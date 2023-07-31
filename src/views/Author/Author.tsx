import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthorsQueries } from 'api'
import { toast } from 'react-hot-toast'
import { Typography } from 'antd'
import { Box, WrappedBox } from 'components/Box'
import { Loader } from 'components/Loader'
import { BackButton } from 'components/BackButton'
import { AuthorCard } from 'components/AuthorCard'
import { Author as AuthorType } from 'types/api'

const { Title } = Typography

export const Author = () => {
  const { id = '' } = useParams()
  const { useGetAuthorByIdQuery } = AuthorsQueries

  const {
    data: author = {} as AuthorType,
    isLoading: isAuthorLoading,
    isError: isAuthorError,
  } = useGetAuthorByIdQuery(id, { skip: !id })

  useEffect(() => {
    if (isAuthorError) toast.error('The profile has not been loaded')
  }, [isAuthorError])

  if (isAuthorLoading)
    return (
      <WrappedBox>
        <Loader />
      </WrappedBox>
    )

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
            <AuthorCard {...author} />
          </Box>
        </Box>
      )}
    </>
  )
}
