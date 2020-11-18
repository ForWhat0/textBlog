import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: #4CAF50;
  border: none;
  width:100%;
  text-align:center;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
   transition: transform .1s linear;
    &:hover  {
    transform: scale(1.01);
  }
`
type StyledButtonType = {
    func:any,
    type:string,
    text:string
}

const StyledButton =({type,text,func}:StyledButtonType)=>{
    return <Btn type={type} onClick={()=>func()}>{text}</Btn>
}

export default StyledButton