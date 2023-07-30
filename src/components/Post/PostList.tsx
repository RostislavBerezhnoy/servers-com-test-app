import { FC } from 'react'
import { List } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { BorderedBox } from 'components/Box'
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
    <BorderedBox>
      <List dataSource={posts} renderItem={post => <PostItem {...post} />} />
    </BorderedBox>
  </InfiniteScroll>
)
