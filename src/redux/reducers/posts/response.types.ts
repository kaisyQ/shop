import type { ServerPost } from "types/types";

export type GetPostsResponse = {
    data: {
        posts: ServerPost[]
    },
    status: number
}

export type GetPostResponse = {
    data: {
        post: ServerPost
    },
    status: number
}

export type CreatePostResponse = {
    data: {
        createdPost: ServerPost
    },
    status: number
}

export type DeletePostResponse = {
    data: {
        deletedPost: ServerPost
    },
    status: number
}

export type UpdatePostResponse = {
    data: {
        updatedPost: ServerPost
    },
    status: number
}