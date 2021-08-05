import React from "react"

interface Props {
  children: React.ReactNode
}

const Container: React.FC<Props> = (props) => {
  return (
    <div className="Container">
      {props.children}
    </div>
  )
}

export default Container