import React, { Component } from 'react';
import './App.css';
import data from './items.json'
import materials from './materials.json'
import CardList from './components/CardList/CardList'
import Header from './components/Header/Header';

class App extends Component {
  state = {
    data,
    materials,
    filtered: data,
    sortby: 1,
    filterby: 1
  }

  // сортировка списка
  sortArr(filterSelector) {
    this.setState(
      this.state.sorted.sort((a, b) => {
        if (filterSelector == 1) {
          return a.price.current_price - b.price.current_price
        } else {
          return b.price.current_price - a.price.current_price
        }
      })
    )
  }
  // фильтрация по материалу
  filterArr(materialId) {
    const copyArr = [...this.state.data]
    const resArr = copyArr.filter(e => {
      if (e['material'] == materialId) {
        return true
      } else {
        return false
      }
    })
    this.setState({ filtred: resArr })
  }


  render() {
    return (
      <div className="App">
        <Header filter={this.filterArr} sort={this.sortArr} />
        <CardList cards={this.state.filtered} />
        <button onClick={() => this.setState({ sortby: 1 })} >По возрастанию</button>
        <button onClick={() => this.setState({ sortby: -1 })} >ПО Убыванию</button>
        <button onClick={() => this.setState({ filterby: 1 })}>Дерево</button>
        <button onClick={() => this.setState({ filterby: -1 })}>Металл</button>
      </div >
    );
  }
}

export default App;
