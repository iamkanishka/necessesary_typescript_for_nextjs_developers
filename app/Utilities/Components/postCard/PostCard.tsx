import React from 'react';
import {PostProps} from '@/Utilities/Types/types'

const PostCard = (props:PostProps) =>{
 
 return (
  <div className='postCard'>
    <h1>{props.title}</h1>
    <p>{props.body}</p>

  </div>
 )
}

export default PostCard