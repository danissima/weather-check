import React from "react"
import Container from "../Container/Container"
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
    </div>
  )
}

export default Layout