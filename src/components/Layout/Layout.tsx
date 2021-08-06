import React from "react"
import Container from "../Container/Container"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

interface Props {
  allowReturn: boolean | undefined;
  theme: string | undefined;
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className={`Layout ${props.theme ? `Layout_${props.theme}` : ''}`}>
      <Header allowReturn={props.allowReturn} />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout