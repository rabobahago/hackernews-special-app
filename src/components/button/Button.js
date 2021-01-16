import React from 'react'
const Button = ({ className, children, onClick, type = 'button' }) => {
  return (
    <div>
      <button onClick={onClick} className={className} type={type}>
        {children}
      </button>
    </div>
  )
}
export default Button
