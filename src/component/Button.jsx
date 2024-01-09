import React from "react";

const Button = ({
    className="",
    data,
    ...props
}) => {
  return (<button className={`${className}`} {...props}>{data}</button>);
};

export default Button;
