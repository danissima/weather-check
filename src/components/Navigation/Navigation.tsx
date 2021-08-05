import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "../../pages/About/About"
import History from "../../pages/History/History"
import Home from "../../pages/Home/Home"
import Menu from "../Menu/Menu"

const Navigation: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/history'>
          <History />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Navigation