import { FC } from 'react'
import { List, Divider } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PostItem } from './PostItem'
import { Post } from 'types/api'

export type PostListProps = {
  posts: Post[]
  loadMore: () => void
}

export const PostList: FC<PostListProps> = ({ posts, loadMore }) => (
  <InfiniteScroll
    dataLength={posts.length}
    hasMore={posts.length < 10}
    next={loadMore}
    loader={null}
    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
    scrollableTarget='scrollableDiv'
  >
    <List dataSource={posts} renderItem={post => <PostItem {...post} />} />
  </InfiniteScroll>
)
