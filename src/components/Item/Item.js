import React from "react";
import "./item--style.css"
import ItemView from "../ItemView/ItemView";
import ProductView from "../ProductView/productView";
import AreYouShure from "../AreYouShure/areYouShure";

export default function Item(prop) {
  const [iViewActive, setIViewActive] = React.useState(false)
  const [productView, setProductView] = React.useState(false)
  const [shure, setShure] = React.useState(false)

  return (
    <div className="item">
      <div className="item--info" onClick={() => setProductView(true)}>
        <img className="item--img" src={prop.imageUrl} alt=""/>
        <div className="item--text">
          <h1 className="item--name">
            {prop.name}
          </h1>
          <p className="item--count">
            In stock: {prop.count}
          </p>
        </div>
      </div>
      <button className="item--btn" onClick={() => setIViewActive(true)}>Add</button>
      
      <ItemView active={iViewActive} setActive={setIViewActive}>
        <h2>{prop.name}</h2>
        <div className="item--characteristic">
          <p>
            Width: <span className="item--choose">{prop.size.width}</span>
          </p> 
          <p>
            Height: <span className="item--choose">{prop.size.height}</span>
          </p>
          <p>
            Weight: <span className="item--choose">{prop.weight}</span> 
          </p>
        </div>
        <div className="iview--btns">
          <button>Confirm</button>
          <button onClick={() => setIViewActive(false)}>Cancel</button>
          <button onClick={() => setShure(true)}>Delete</button>
        </div>

        <AreYouShure active={shure} setActive={setShure}>
          <div>
            Are You Shure?
          </div>
          <div className="sure--btns">
            <button onClick={() => {setIViewActive(false); setShure(false)} }>Yes</button>
            <button onClick={() => setShure(false)}>No</button>
          </div>
        </AreYouShure>
      </ItemView>

      <ProductView active={productView} setActive={setProductView}>
        <div className="item--info">
          <img className="item--img" src={prop.imageUrl} alt=""/>
          <div className="item--text">
            <h1 className="item--name">
              {prop.name}
            </h1>
            <p className="item--count">
              In stock: {prop.count}
            </p>
            <div className="item--characteristic">
              <p>
                Width: <span className="item--choose">{prop.size.width}</span>
              </p> 
              <p>
                Height: <span className="item--choose">{prop.size.height}</span>
              </p>
              <p>
                Weight: <span className="item--choose">{prop.weight}</span> 
              </p>
            </div>
            <div>
              Comments: {prop.comments}
            </div>
          </div>
        </div>
      </ProductView>
    </div>
  )
}