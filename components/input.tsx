import React from 'react'
import styled,{keyframes} from 'styled-components'

const Input = styled.input.attrs(props => ({
    type: "text",
    name:props.name,
    onChange:props.func
}))`
font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: 1 px solid green;
  width: 100%;
  display: block;
`;
const TextArea = styled.textarea.attrs(props => ({
    name:props.name,
    rows:props.rows,
    onChange:props.func
}))`
font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: 1 px solid green;
  width: 100%;
  display: block;
  margin-bottom:10px;
`;

type StyledInputType = {
    rows:string | null,
    func:any,
    type:string,
    name:string
}

const StyledInput =({rows,func,type,name}:StyledInputType)=>{
    if (type === "text"){
        return <Input  name={name} type={type} func={func}/>
    }
    else if (rows) {
        return <TextArea rows={rows} name={name} type={type} func={func}/>
    }
}
export default StyledInput