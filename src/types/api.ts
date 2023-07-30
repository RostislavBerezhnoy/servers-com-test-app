export type Author = {
  id: number
  name: string
  age: number
  avatar: string
  bio: string
}

export type Post = {
  id: number
  text: string
  date: string
  authorId: number
  authorName: string
  authorAvatar: string
}

export type CreatePost = Omit<Post, 'id'>
