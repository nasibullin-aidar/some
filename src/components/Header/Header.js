import React from 'react'
import './Header.sass'
import Selector from '../../Selector/Select'

function Header(props) {
  return (
    <div className="header">
      <h1 className="section-title header__section-title">Комплекты стеллажных систем</h1>
      <div className="selectors">
        <Selector
          onChange={props.sort}
          options={[{ label: 'По возрастанию', value: 1 }, { label: 'По убыванию', value: -1 }]} value=""/>
        <Selector
          onChange={props.filter}
          options={[{ label: 'Дерево', value: 1 }, { label: 'Металл', value: 2 }]} />
      </div>
    </div>
  )
}

export default Header
