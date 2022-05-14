import React from "react";
import "./item--view.css"

export default function ItemView ({active, setActive, children}) {
  return (
    <div className={active ? "iview active" : "iview"} onClick={() => setActive(false)}>
      <div className={active ? "iview--content active" : "iview--contet"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}