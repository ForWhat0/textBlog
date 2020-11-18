import React, {useState} from 'react'
import {MainLayout} from '../../components/MainLayout'
import {useDispatch, useSelector} from "react-redux";
import {actionCreatePost, ShowAlert} from "../../redux/actions/actions";
import StyledLoader from "../../components/loader";
import StyledButton from "../../components/button";
import styled from "styled-components";
import StyledInput from "../../components/input";

const Form = styled.form`
                width: 50%;
                margin-left:25%;
                display:flex;
                justify-content: center;
                margin-top: 50px;
                flex-direction: column;
                background: linear-gradient(#B7F8DB , #50A7C2);               
                padding: 30px;
                border-radius: 5px;
`

const LoaderContainer = styled.div`
                width: 100%;
                display:flex;
                justify-content: center;
                margin-top: 50p;
`
const Label = styled.label`
                width: 100%;
                display:flex;
                justify-content: center;
                margin-top: 10px;
                font-size:24px;
`

export default function CreatePost() {

    const [title, setTitle] = React.useState("");
    const [body, setBody] = useState('');
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.app)

    const handleChangeTitle = e => {
        setTitle(e.target.value)
    }
    const handleChangeBody = e => {
        setBody(e.target.value)
    }
    const submitHandler =e=>{
        e.preventDefault()
        if (!title){
            dispatch(ShowAlert("title can't be empty",'error'))
            return
        }
        if (!body){
            dispatch(ShowAlert("body can't be empty",'error'))
            return
        }
        const newPost = {
            title,
            body
        }
        dispatch(actionCreatePost(newPost))
        setTitle('')
        setBody('')
    }

    return(
        <MainLayout>
                {
                    loading ?
                        <LoaderContainer>
                            <StyledLoader/>
                        </LoaderContainer>
                        :
                        <Form onSubmit={submitHandler}>
                                <Label htmlFor="title">Post title</Label>
                                <StyledInput type='text'
                                             name='title'
                                             rows={null}
                                             func={handleChangeTitle}/>
                                <Label htmlFor="body">Post body</Label>
                                <StyledInput
                                    type='textArea'
                                    name='body'
                                    rows='3'
                                    func={handleChangeBody}
                                />
                            <StyledButton type="submit" text='Create Post' func={()=>console.log('Creating Post')}/>
                        </Form>
                }

        </MainLayout>
    )
}

