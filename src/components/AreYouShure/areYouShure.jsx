import React from "react";
import "./areyoushure--style.css"

export default function AreYouShure ({active, setActive, children}) {
  return (
    <div className={active ? "ays active" : "ays"} onClick={() => setActive(false)}>
      <div className={active ? "ays--content active" : "ays--contet"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}