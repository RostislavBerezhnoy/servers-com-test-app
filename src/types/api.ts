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
  author: Pick<Author, 'id' | 'name' | 'avatar'>
}
