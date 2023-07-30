import { FC } from 'react'
import { List } from 'antd'
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
    hasMore={true}
    next={loadMore}
    loader={null}
    scrollableTarget='scrollableDiv'
  >
    <List
      style={{
        borderRadius: 15,
        border: '1px solid #dce1e6',
        padding: 20,
        backgroundColor: '#fff',
      }}
      dataSource={posts}
      renderItem={post => <PostItem {...post} />}
    />
  </InfiniteScroll>
)
