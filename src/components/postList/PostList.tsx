import React from "react"
import PostCard from "../postCard/PostCard"
import {PostProps} from '@/Types/types'

const PostList = async () => {

  const data:PostProps[] = await getData();

  return (
    <div className="postList">
      {data.map((post:PostProps) => {
      return <PostCard key={post.id} {...post} />
      })}

    </div>
  )
}



async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error('Failed to fecth Data');
  }

  return res.json();
}


export default PostList