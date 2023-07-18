import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
position:relative;
display:inline-flex;
align-items:center;
justify-content:center;
text-align:center;
text-decoration:none;
vertical-align:middle;
cursor:pointer;
user-select:none;
border-radius:0.3rem;`

const Button = ({ type, variant, className, id, onClick, children }) {
  return (
    <button
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : `btn-component`}
      id={id}
      onClick={onClick}
    ></button>
  );
}

export default Button;
