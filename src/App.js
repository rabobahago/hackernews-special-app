import React from 'react'
import Search from './components/search/Search'
import Table from './components/table/Table'
import './App.css'
const DEFAULT_QUERY = 'redux'
const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`
// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ]
class App extends React.Component {
  state = {
    result: null,
    searchItem: '',
  }
  setSearchTopStories = (result) => {
    this.setState({ result })
  }
  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setSearchTopStories(result)
      })
      .catch((error) => {
        console.log(error)
      })
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
    //console.log('render')
    const { searchItem, result } = this.state
    if (!result) {
      return null
    }
    return (
      <div className="page">
        <div className="interactions">
          <Search onChange={this.onSearchChange} value={searchItem}>
            Search
          </Search>
        </div>
        <Table
          list={result.hits}
          searchItem={searchItem}
          onDismiss={this.onDismiss}
        />
      </div>
    )
  }
}

export default App
