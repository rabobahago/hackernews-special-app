import React from 'react'
import Button from '../button/Button'
const Table = ({ list, onDismiss, searchItem }) => {
  const isSearch = (search) => {
    return (item) => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    }
  }
  return (
    <div>
      {list.filter(isSearch(searchItem)).map((item) => {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
            </span>
          </div>
        )
      })}
    </div>
  )
}
export default Table
