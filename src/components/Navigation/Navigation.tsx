import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageNotFound from "../../pages/404/404"
import About from "../../pages/About/About"
import History from "../../pages/History/History"
import Home from "../../pages/Home/Home"
import SingleCity from "../../pages/SingleCity/SingleCity"
import Layout from "../Layout/Layout"

const Navigation: React.FC = () => {
  const pages = [
    { path: '/about', component: <About /> },
    { path: '/history', component: <History /> },
    { path: '/single-city/:city', component: <SingleCity />, theme: 'gradient', allowReturn: true },
    { path: '/', component: <Home /> },
    { path: '/*', component: <PageNotFound /> },
  ]

  return (
    <Router>
      <Switch>
        {pages.map((page, i) => {
          return (
            <Route exact path={page.path} key={i}>
              <Layout
                allowReturn={page.allowReturn}
                theme={page.theme}
              >
                {page.component}
              </Layout>
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}

export default Navigation