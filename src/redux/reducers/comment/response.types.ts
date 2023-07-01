import type { ServerComment } from "types/types"

export type GetCommentsResponse = {
    data: {
        comments: ServerComment[]
    },  
    status: number
}

export type DeleteCommentResponse = {
    data: {
        deletedComment: {
            created_at: string,
            id: string,
            stars: number,
            text: string,
            userName: string
        }
    },
    status: number
}

export type CreateCommentResponse = {
    data: {
        comment: ServerComment
    },
    status: number
}