import { instance } from "api/api";
import { type CreateCommentDto } from 'dto/CreateCommentDto';

export const getComments = () => instance.get("comments/")

export const createComment = (comment: CreateCommentDto) => instance.post("comments/create", {
    username: comment.username,
    text: comment.text,
    stars: comment.stars
});