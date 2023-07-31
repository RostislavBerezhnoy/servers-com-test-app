import { useEffect } from 'react'
import { PostsQueries, AuthorsQueries } from 'api'
import { toast } from 'react-hot-toast'
import { useFilter } from 'hooks/useFilter'
import { Box } from 'components/Box'
import { WrappedLoader } from 'components/Loader'
import { PostList, PostFilter } from 'components/Post'
import { CreatePost } from 'widgets/CreatePost'

export const Feed = () => {
  const { useLazyGetPostsQuery } = PostsQueries
  const { useGetAuthorsQuery } = AuthorsQueries

  const [getPosts, { data: posts = [], isLoading: isPostsLoading, isError: isPostsError }] =
    useLazyGetPostsQuery()

  const { data: authors = [], isLoading: isAuthorsLoading } = useGetAuthorsQuery()

  const {
    filters: { page, search, author, date },
    setPage,
    setSearch,
    setAuthor,
    setDate,
  } = useFilter(getPosts)

  const loadMorePosts = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (isPostsError) toast.error('The posts have not been loaded')
  }, [isPostsError])

  if (isPostsLoading) return <WrappedLoader />

  return (
    <Box alignItems='center'>
      <Box maxWidth={600} width='100%'>
        <Box marginBottom={20}>
          <CreatePost />
        </Box>
        <Box marginBottom={30}>
          <PostFilter
            search={search}
            setSearch={setSearch}
            authors={authors}
            authorsLoading={isAuthorsLoading}
            date={date}
            setDate={setDate}
            author={author}
            setAuthor={setAuthor}
          />
        </Box>
        <PostList posts={posts} loadMore={loadMorePosts} />
      </Box>
    </Box>
  )
}
