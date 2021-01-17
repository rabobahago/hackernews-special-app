import React from 'react'
import Search from './components/search/Search'
import Table from './components/table/Table'
import './App.css'
import Button from './components/button/Button'
//const DEFAULT_QUERY = 'redux'
const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

//const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`
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
    const { hits, page } = result
    const oldHits = page !== 0 ? this.state.result.hits : []
    const updatedHits = [...oldHits, ...hits]
    this.setState({
      result: { hits: updatedHits, page },
    })
  }
  fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`,
    )
      .then((response) => response.json())
      .then((result) => {
        this.setSearchTopStories(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  componentDidMount() {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }
  onDismiss = (id) => {
    const filteredState = this.state.result.filter((item) => {
      return item.objectID !== id
    })
    this.setState({ ...this.state.result, result: filteredState })
  }
  onSearchChange = (event) => {
    this.setState({ ...this.state, searchItem: event.target.value })
  }
  onSubmitChange = (event) => {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
    event.preventDefault()
  }
  render() {
    console.log(this.state.result)
    const { searchItem, result } = this.state
    const page = (result && result.page) || 0
    return (
      <div className="page">
        <div className="interactions">
          <Search
            onChange={this.onSearchChange}
            value={searchItem}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        {result && <Table list={result.hits} onDismiss={this.onDismiss} />}
        <div className="interactions">
          <Button
            onClick={() => this.fetchSearchTopStories(searchItem, page + 1)}
          >
            more
          </Button>
        </div>
      </div>
    )
  }
}

export default App
