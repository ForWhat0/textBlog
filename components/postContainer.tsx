import React from 'react'
import styled from 'styled-components'
import Post from './post'
import Link from "next/link";



const StyledContainer = styled.div`
 display:flex;
 cursor:pointer;
 flex: ${props => props.flex};
 flex-direction: ${props => props.flexDirection};
 overflow: hidden;
 margin: 0 0 40px;
 padding: 0 20px 40px;
 min-height: 220px;
 border-bottom: 1px solid #e9eef1;
 background-size: cover;
  transition: transform .2s linear;
    &:hover  {
    transform: scale(1.01);
  }
 @media (max-width: 768px) {
   flex: 1 1 301px;
    flex-direction: column;
    padding-bottom: 40px;
    border-top: 0;
  }
`
type PostType = {
    id:string | number,
    title:string,
    body:string
}
type PostContainerType = {
    post:PostType,
    size:string
}
const PostContainer = ({post,size}:PostContainerType) => {
    const date = new Date().toLocaleDateString()
    const {id , title , body } = post
    const flexDirection = size === 'large' ? 'row' : 'column'
    const flex = size === 'large' ? '1 1 100%' : '1 1 301px'
    return (
                <Link href={`/posts/[id]`} as={`/posts/${id}`}>
                        <StyledContainer flexDirection={flexDirection} flex={flex}>
                            <Post
                                title={title}
                                date={date}
                                body={body}
                                size={size}
                            />
                        </StyledContainer>
                </Link>
    )
}

export default PostContainer