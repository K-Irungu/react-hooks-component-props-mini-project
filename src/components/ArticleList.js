import React from "react";
import Article from "./Article"


function ArticleList({posts}) {
const postsArr = {posts}
const newArr = postsArr.posts;

const array = newArr.map((post)  => {

    return (
        <Article 
        key={post.name}
        id={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
         />
    
    )
})
   return(
        <main>
            {array}
        </main>
)}

export default ArticleList;