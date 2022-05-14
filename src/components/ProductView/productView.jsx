import React from "react";
import "./product--view.css"

export default function ProductView ({active, setActive, children}) {
  return (
    <div className={active ? "iview active" : "iview"} onClick={() => setActive(false)}>
      <div className={active ? "iview--content active" : "iview--contet"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}