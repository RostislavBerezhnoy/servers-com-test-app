import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthorsQueries, PostsQueries } from 'api'
import { toast } from 'react-hot-toast'
import { useFilter } from 'hooks/useFilter'
import { Typography } from 'antd'
import { Box, WrappedBox } from 'components/Box'
import { WrappedLoader } from 'components/Loader'
import { BackButton } from 'components/BackButton'
import { AuthorCard } from 'components/AuthorCard'
import { Author as AuthorType } from 'types/api'
import { PostList } from 'components/Post'

const { Title } = Typography

export const Author = () => {
  const { id = '' } = useParams()
  const { useGetAuthorByIdQuery } = AuthorsQueries
  const { useLazyGetPostsQuery } = PostsQueries

  const {
    data: author = {} as AuthorType,
    isLoading: isAuthorLoading,
    isError: isAuthorError,
  } = useGetAuthorByIdQuery(id, { skip: !id })

  const [getPosts, { data: posts = [], isLoading: isPostsLoading, isError: isPostsError }] =
    useLazyGetPostsQuery()

  const {
    filters: { page: authorPage },
    setPage,
    setAuthor,
  } = useFilter(getPosts)

  useEffect(() => {
    if (id) setAuthor(id)
  }, [id, setAuthor])

  const loadMorePosts = () => {
    setPage(authorPage + 1)
  }

  useEffect(() => {
    if (isAuthorError) toast.error('The profile has not been loaded')
  }, [isAuthorError])

  useEffect(() => {
    if (isPostsError) toast.error('The posts have not been loaded')
  }, [isPostsError])

  if (isAuthorLoading) return <WrappedLoader />

  return (
    <>
      {Object.getOwnPropertyNames(author).length === 0 ? (
        <>
          <BackButton marginBottom={20} />
          <WrappedBox>
            <Title level={3}>Oops! No data found</Title>
          </WrappedBox>
        </>
      ) : (
        <Box alignItems='center'>
          <Box>
            <BackButton marginBottom={20} />
            <Box marginBottom={30}>
              <AuthorCard {...author} />
            </Box>
            {isPostsLoading ? (
              <WrappedLoader />
            ) : (
              <PostList posts={posts} loadMore={loadMorePosts} />
            )}
          </Box>
        </Box>
      )}
    </>
  )
}
