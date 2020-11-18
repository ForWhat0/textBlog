import React from 'react'
import styled from 'styled-components'

const PhotoContainer = styled.div`
   position: relative;
    display: block;
    overflow: hidden;
    border-radius: 3px;
    flex: ${props => props.flex};
    margin-bottom: 0;
     min-height: ${props => props.PhotoMinHeight};
     @media (max-width: 768px) {
    min-height:200px;
  }
}
`
const TextContainer = styled.div`
    padding: ${props => props.TextPadding};
  flex:${props => props.TextFlex};
   flex-grow: 1;
    display: flex;
    flex-direction: column; 
    @media (max-width: 768px) {
   padding: unset;
   flex: auto !important;
  }
`
const StyledPhoto = styled.img`
     position: ${props => props.photoPosition};
    width: 100%;
    height: ${props => props.photoHeight};
    background: #c5d2d9 no-repeat 50%;
    object-fit: cover;
     @media (max-width: 768px) {
   height: 200px;
   position:relative;
  }
`

const Title = styled.h2`
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const Description = styled.p`
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`
type PostType = {
    title:string,
    body:string,
    size:string,
    date:string
}

const Post =({
                 title,
                 date,
                 body,
                 size
             }:PostType)=>{
    const TextFlex = size === 'large' ? '0 1 361px !important' : 'none'
    const flex = size === 'large' ? '1 1 auto' : 'none'
    const photoPosition = size === 'large' ? 'absolute' : 'relative'
    const photoHeight = size === 'large' ? '100%' : '200px'
    const PhotoMinHeight = size === 'large' ? '380px' : 'none'
    const TextPadding = size === 'large' ? '0 0 0 40px' : 'none'
    return (
            <>
             <PhotoContainer flex={flex} PhotoMinHeight={PhotoMinHeight}>
                 <StyledPhoto
                     photoHeight={photoHeight}
                     photoPosition={photoPosition}
                     src="https://i1.wp.com/itc.ua/wp-content/uploads/2015/08/Windows-10-intro.jpg?resize=671%2C362&quality=100&strip=all&ssl=1"
                 />
             </PhotoContainer>
            <TextContainer TextFlex={TextFlex} TextPadding={TextPadding}>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Description>{body}</Description>
            </TextContainer>
        </>
    )
}
export default Post