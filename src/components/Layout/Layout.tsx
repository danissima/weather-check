import React from "react"
import Container from "../Container/Container"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="Layout">
      <Header />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout