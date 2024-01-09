import React from "react"

const Input = React.forwardRef(
  ({ className = "", type, placeholder, ...props }, ref) => (
    <input type={type} ref={ref} placeholder={placeholder} {...props} />
  )
)

export default Input
