import React from "react"

interface Props {
  children: React.ReactElement;
  text: string;
  disabledText: boolean;
}

const Icon: React.FC<Props> = (props) => {
  return (
    <div className="Icon">
      <div className="Icon__img">
        {props.children}
      </div>
      <p className={`Icon__text ${props.disabledText ? 'Icon__text_secondary' : ''}`}>
        {props.text}
      </p>
    </div>
  )
}

export default Icon