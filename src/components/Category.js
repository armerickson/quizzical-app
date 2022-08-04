import React from "react"

export default function Category(props) {
  const {icon, action, text} = props;

  return (
      <button className="category"
        onClick={action}>
          <p className="category--text">{text}</p>
          <i className={icon}></i>
      </button>
  )
}
