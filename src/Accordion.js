import React, { useState } from 'react';

function Accordion(props = {}) {
  const { items = [] } = props
  const [selectedIndex, setSelectedIndex] = useState(0);

  if(items.length === 0) throw new Error(`Accordion must have items`)

  const selectedItem = items[selectedIndex] || {}

  function selectItem(index) {
    setSelectedIndex(index);
  }
  
  return (<div>
    {items.map((item, index) => {
      const displayContent = index === selectedIndex;
      return (
        <React.Fragment key={item.title}>
          <div><button onClick={() => selectItem(index)}>{item.title}</button></div>
          {displayContent ? <div>{item.content}</div> : null}
        </React.Fragment>
      )
    })}
  </div>)
}

export default Accordion