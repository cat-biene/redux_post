import { Post } from "../../types/Post";

export default function PostItem({ id, title, body, userId, tags, reactions }: Post) {
    return (
        <div>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <p>userId: {userId}</p>
            <p>tags: {tags}</p>
            <p>reactions: {reactions}</p>
        </div>
    )
}