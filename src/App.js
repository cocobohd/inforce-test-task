import React from "react";
import Item from "./components/Item/Item";
import items from "./items";

export default function App() {

  const [data, setData] = React.useState(items)

  function count() {
    const copyData = items.concat()
    let newItems = copyData.sort(
      (a, b)=>{return a.count > b.count ? 1 : -1}
    )
    setData(newItems)
  }
  function name() {
    const copyData = items.concat()
    let newItems = copyData.sort(
      (a, b)=>{return a.name > b.name ? 1 : -1}
    )
    setData(newItems)
  }

  const itemRender = data.map(item => {
    return <Item 
      key={item.id}
      imageUrl={item.imageUrl}
      name={item.name}
      count={item.count}
      weight={item.weight}
      size={item.size}
      comments={item.comments}
    />
  })

  return (
    <div className="app--general" onLoad={name}>
      <p className="sort">
        <button onClick={() => count()}>Sort by Count</button>
        <button onClick={() => name()}>Sort by Name</button>
      </p>
      <div className="app">
          {itemRender}
      </div>
    </div>
  )
}