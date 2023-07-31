import { AuthorUtilityType } from './utilities'

export type Author = {
  id: number
  name: string
  age: number
  avatar: string
  bio: string
}

export type Post = AuthorUtilityType<Pick<Author, 'id' | 'name' | 'avatar'>> & {
  id: number
  text: string
  date: string
}

export type CreatePost = Omit<Post, 'id'>
