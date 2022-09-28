import React, { useState } from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }

  selectItem(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    const { items = [] } = this.props
    const { selectedIndex } = this.state

    if(items.length === 0) throw new Error(`Accordion must have items`)

    const selectedItem = items[selectedIndex] || {}

    return (<div>
      {items.map((item, index) => {
        const displayContent = index === selectedIndex;
        return (
          <React.Fragment key={item.title}>
            <div><button onClick={() => this.selectItem(index)}>{item.title}</button></div>
            {displayContent ? <div>{item.content}</div> : null}
          </React.Fragment>
        )
      })}
    </div>)
  }
}

export default Accordion