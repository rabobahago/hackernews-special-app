import React from 'react'
import Button from '../button/Button'
const Table = ({ list, onDismiss, searchItem }) => {
  const isSearch = (search) => {
    return (item) => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    }
  }
  return (
    <div className="table">
      {list.filter(isSearch(searchItem)).map((item) => {
        return (
          <div key={item.objectID} className="table-row">
            <span style={{ width: '40%' }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: '30%' }}>{item.author}</span>
            <span style={{ width: '10%' }}>{item.num_comments}</span>
            <span style={{ width: '10%' }}>{item.points}</span>
            <span style={{ width: '10%' }}>
              <Button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </Button>
            </span>
          </div>
        )
      })}
    </div>
  )
}
export default Table
