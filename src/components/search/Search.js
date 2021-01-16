import React from 'react'
const Search = ({ onChange, value, children }) => {
  return (
    <div>
      <form>
        {children}
        <input onChange={onChange} value={value} />
      </form>
    </div>
  )
}
export default Search
