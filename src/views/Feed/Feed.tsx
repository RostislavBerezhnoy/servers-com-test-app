import { useEffect } from 'react'
import { PostsQueries } from 'api'
import { toast } from 'react-hot-toast'
import { useFilter } from 'hooks/useFilter'
import { WrappedBox, Box } from 'components/Box'
import { Loader } from 'components/Loader'
import { PostList, PostFilter } from 'components/Post'

export const Feed = () => {
  const { useLazyGetPostsQuery } = PostsQueries

  const [getPosts, { data: posts = [], isLoading: isPostsLoading, isError: isPostsError }] =
    useLazyGetPostsQuery()

  const {
    filters: { page, search },
    setPage,
    setSearch,
  } = useFilter(getPosts)

  useEffect(() => {
    if (isPostsError) toast.error('Не удалось загрузить список постов')
  }, [isPostsError])

  if (isPostsLoading)
    return (
      <WrappedBox>
        <Loader />
      </WrappedBox>
    )

  return (
    <Box alignItems='center'>
      <Box width={550}>
        <PostFilter search={search} setSearch={setSearch} />
        <PostList posts={posts} loadMore={() => setPage(page + 1)} />
      </Box>
    </Box>
  )
}
