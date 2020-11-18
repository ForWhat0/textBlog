import Link from 'next/link'
import Head from 'next/head'
import {Alert} from "./alert";
import React from "react";
import {useSelector} from "react-redux";

export function MainLayout({children}:any ) {
    const {alert} = useSelector(state=>state.app)
    return (
        <>
            <Head>
                <title>Posts Page | Test Blog</title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={'/'}><a>Back to all posts</a></Link>
                <Link href={'/posts/new'}><a>Create Posts</a></Link>
            </nav>
            <main>
                {alert && <Alert/>}
                {children}
            </main>
            <style jsx>{`
        nav {
          position: fixed;
          height: 70px;
          left: 0;
          top: 0;
          color:#000000;
          right: 0;
           background: linear-gradient(#B7F8DB , #50A7C2);             
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index:2;
        }
        
        nav a {
          font-size:24px;
          color:#000000;
          text-decoration: none;
        }
        
        main {
          margin-top: 100px;
          padding: 1rem;
           z-index:1;
        }
      `}</style>
        </>
    )
}