import React, {useEffect} from 'react'
import {MainLayout} from '../../components/MainLayout'
import {useRouter} from 'next/router'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {actionGetPost} from "../../redux/actions/actions";
import PostContainer from "../../components/postContainer";
import StyledLoader from "../../components/loader";
import {MyPost} from "../../interfaces/post";
import {NextPageContext} from "next";

interface PostPageProps {
    InitialPost: MyPost
}

const LoaderContainer = styled.div`
                width: 100%;
                display:flex;
                justify-content: center;
                margin-top: 50p;
`

export default function Post({ InitialPost }:PostPageProps | null) {

    const router = useRouter()
    const id = router.query.id
    const dispatch = useDispatch()
    const {post} = useSelector(state=>state.posts)
    const {loading} = useSelector(state=>state.app.loading)


    useEffect(() => {
        async function load_SPA_data() {
            dispatch(actionGetPost(id))
        }

        if (!InitialPost) {
            load_SPA_data()
        }
    }, [])

    const getPostForRender=(singlePost)=>{
        return (
            <>
                {
                    !loading ?
                        <PostContainer size='small' post={singlePost} />
                        :
                        <LoaderContainer>
                            <StyledLoader/>
                        </LoaderContainer>
                }
            </>
        )
    }

    const renderPost=()=>{
        if (InitialPost) {
            return getPostForRender(InitialPost)
        }
        else{
            return getPostForRender(post)
        }
    }

    return(
        <MainLayout>
            {renderPost()}
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({ query, req }:PostNextPageContext) => {
    if (!req) {
        return {InitialPost: null}
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const InitialPost:MyPost = await response.json()

    return {
        InitialPost
    }
}
