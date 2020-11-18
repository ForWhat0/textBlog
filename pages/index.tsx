import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import axios from "axios";
import {NextPageContext} from 'next'
import styled from 'styled-components'
import {MainLayout} from '../components/MainLayout'
import {actionGetPosts} from "../redux/actions/actions";
import PostContainer from '../components/postContainer'
import StyledLoader from "../components/loader"
import StyledButton from "../components/button"
import {MyPost} from '../interfaces/post'


const GlobalContainer = styled.div`
                margin: 0 auto;
                max-width: 1040px;
                width: 100%
`
const LoaderContainer = styled.div`
                width: 100%;
                display:flex;
                justify-content: center;
`
const PostsContainer = styled.div`
                    position:relative;
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 -20px;
`

interface PostsPageProps {
    InitialPosts: MyPost[]
}

export default function Posts({ InitialPosts }:PostsPageProps | null) {

    const dispatch = useDispatch()
    const {posts} = useSelector(state=>state.posts)
    const {loading} = useSelector(state=>state.app)
    const {limit} = useSelector(state=>state.posts)

    const loadMore=()=>{
        async function load_SPA_data() {
            if (limit === 6){
                dispatch(actionGetPosts(12))
            }
            else {
                dispatch(actionGetPosts(limit))
            }
        }

        load_SPA_data()
    }
    useEffect(() => {
        async function load_SPA_data() {
            dispatch(actionGetPosts(limit))
        }

        if (!InitialPosts) {
            load_SPA_data()
        }
    }, [])

   const getPostsForRender=(arr:Array<object>)=>{
        return (
            arr.map((post:object,index:number)=>{
                if(index === 0 || index % 6 === 0){
                    // @ts-ignore
                    return <PostContainer key={post.id}  size='large' post={post} />
                }
                else{
                    // @ts-ignore
                    return <PostContainer key={post.id} size='small' post={post} />
                }
            })
        )
   }

    const  renderPosts=()=>{
        if (InitialPosts && !posts.length){
            return getPostsForRender(InitialPosts)
        }
        else {
            return getPostsForRender(posts)
        }
    }


    return (
        <MainLayout title={'Home Page'}>
            <GlobalContainer >
                <PostsContainer >
                    {renderPosts()}
                </PostsContainer>
                {
                    loading ?
                        <LoaderContainer>
                            <StyledLoader/>
                        </LoaderContainer>
                        :
                        <StyledButton type='submit' text='Load More' func={loadMore }/>

                }
            </GlobalContainer>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}:NextPageContext) => {
    if (!req) {
        return {InitialPosts: null}
    }

    const data = await axios.get(`https://simple-blog-api.crew.red/posts?_limit=6`)
    const InitialPosts: MyPost[] = data.data

    return {
        InitialPosts
    }
}