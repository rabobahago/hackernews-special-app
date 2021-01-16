import React from 'react'
import Search from './components/search/Search'
import Table from './components/table/Table'
import './App.css'
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]
class App extends React.Component {
  state = {
    list: list,
    searchItem: '',
  }
  onDismiss = (id) => {
    const filteredState = this.state.list.filter((item) => {
      return item.objectID !== id
    })
    this.setState({ list: filteredState })
  }
  onSearchChange = (event) => {
    this.setState({ ...this.state, searchItem: event.target.value })
  }
  render() {
    const { searchItem, list } = this.state
    return (
      <div className="page">
        <div className="interactions">
          <Search onChange={this.onSearchChange} value={searchItem}>
            Search
          </Search>
        </div>
        <Table list={list} searchItem={searchItem} onDismiss={this.onDismiss} />
      </div>
    )
  }
}

export default App
