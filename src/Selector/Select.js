import React, { useState } from 'react'
import './Select.sass'

function Selector(props) {
  const { onChange, options } = props
  const [closed, setClosed] = useState(true)
  const [selected, setSelected] = useState()

  const closedHandle = (() => {
    setClosed(!closed)
  })
  const setInnerHandle = (() => {
    setInner(item)
    setChange(current)
    closedHandle()

  })

  return (
    <div className="select header__select">
      <p className="select__label">{label}</p>
      <div onClick={closedHandle} className="select__header">
        <span className="select__current">{selected}</span>
        <div className="select__icon">
          <img src="images/arrow.png" alt="стрелка" />
        </div>
      </div>
      {closed ? null :
        <div className="select__body">
          <p onClick={setInnerHandle} className="select__item">{change}</p>
        </div>
      }
    </div>
  )
}

export default Selector
