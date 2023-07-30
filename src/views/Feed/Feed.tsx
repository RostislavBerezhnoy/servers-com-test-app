import { useEffect } from 'react'
import { PostsQueries, AuthorsQueries } from 'api'
import { toast } from 'react-hot-toast'
import { useFilter } from 'hooks/useFilter'
import { WrappedBox, Box } from 'components/Box'
import { Loader } from 'components/Loader'
import { PostList, PostFilter } from 'components/Post'

export const Feed = () => {
  const { useLazyGetPostsQuery } = PostsQueries
  const { useGetAuthorsQuery } = AuthorsQueries

  const [getPosts, { data: posts = [], isLoading: isPostsLoading, isError: isPostsError }] =
    useLazyGetPostsQuery()

  const { data: authors = [], isLoading: isAuthorsLoading } = useGetAuthorsQuery()

  const {
    filters: { page, search, author },
    setPage,
    setSearch,
    setAuthor,
    setDate,
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
      <Box width={600}>
        <PostFilter
          search={search}
          setSearch={setSearch}
          authors={authors}
          authorsLoading={isAuthorsLoading}
          setDate={setDate}
          author={author}
          setAuthor={setAuthor}
        />
        <PostList posts={posts} loadMore={() => setPage(page + 1)} />
      </Box>
    </Box>
  )
}
