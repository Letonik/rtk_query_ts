import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/postService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading} = postAPI.useFetchAllUsersQuery(limit)
    const [createPost, {error: createError}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    useEffect(() => {
       /* setTimeout(() => {
            setLimit(3)
        }, 2000)*/
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className='post__list'>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {posts?.map(post =>
                    <PostItem
                        key={post.id} post={post}
                        remove={handleRemove}
                        update={handleUpdate}
                    />
                )}
            </div>
        </div>
    );
};

export default PostContainer;