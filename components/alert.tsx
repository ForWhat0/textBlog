import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

const AlertDiv = styled.div`
  width:80%;
  margin-left:10%;
  text-align:center;
  background-color: ${props => props.colorType};
  color:white;
  padding:10px;
`

export const Alert = ()=>{
    const text :string | null = useSelector(state=>{ return state.app.alert })
    const type: string = useSelector(state=>{ return state.app.type })
    const colorType = type === 'success' ? 'green' : 'red'
    return(
        <AlertDiv colorType={colorType}>
            {text ? text : 'somethings goes wrong'}
        </AlertDiv>
    )
}