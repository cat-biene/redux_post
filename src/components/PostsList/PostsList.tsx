import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import PostItem from '../PostItem/PostItem';

export default function PostsList() {

    const {value, status}= useSelector((state: RootState) => state.posts);
    return (
        <div>
            {
                value.map(post =>
                    <PostItem key={post.id}
                        {...post} /> )
            }
        </div>
    )
}