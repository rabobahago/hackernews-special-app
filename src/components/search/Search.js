import React from 'react'
const Search = ({ onChange, value, children, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} />
        <button type="submit">{children}</button>
      </form>
    </div>
  )
}
export default Search
