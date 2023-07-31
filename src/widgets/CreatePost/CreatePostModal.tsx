import { FC, useState, useEffect, ChangeEvent } from 'react'
import { createPortal } from 'react-dom'
import { PostsQueries } from 'api'
import { useAppSelector } from 'store'
import { toast } from 'react-hot-toast'
import { Modal, Button, Input } from 'antd'
import { Box } from 'components/Box'
import dayjs from 'dayjs'

const { TextArea } = Input

export type CreatePostModalProps = {
  isOpen: boolean
  closeModal: () => void
}

export const CreatePostModal: FC<CreatePostModalProps> = ({ isOpen, closeModal }) => {
  const {
    id: authorId,
    name: authorName,
    avatar: authorAvatar,
  } = useAppSelector(store => store?.user)
  const [text, setText] = useState<string>('')

  const { useCreatePostMutation } = PostsQueries
  const [
    createPost,
    {
      isLoading: isCreatePostLoading,
      isSuccess: isisCreatePostSuccess,
      isError: isCreatePostError,
    },
  ] = useCreatePostMutation()

  useEffect(() => {
    if (isisCreatePostSuccess) {
      toast.success('A new post has been successfully created')
      closeModal()
    }
  }, [isisCreatePostSuccess, closeModal])

  useEffect(() => {
    if (isCreatePostError) toast.error('A new post has not been created')
  }, [isCreatePostError])

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return createPortal(
    <Modal
      title='Create new post'
      open={isOpen}
      onCancel={closeModal}
      footer={[
        <Button
          key='submit'
          type='primary'
          onClick={() =>
            text &&
            createPost({ text, date: dayjs().toISOString(), authorId, authorName, authorAvatar })
          }
          loading={isCreatePostLoading}
          disabled={isCreatePostLoading || !text}
        >
          Create
        </Button>,
        <Button key='close' onClick={closeModal} disabled={isCreatePostLoading}>
          Close
        </Button>,
      ]}
    >
      <Box margin='20px 0 30px 0'>
        <TextArea
          rows={5}
          placeholder='Enter the message...'
          maxLength={200}
          showCount
          style={{ resize: 'none' }}
          value={text}
          onChange={onChange}
        />
      </Box>
    </Modal>,
    document.body,
  )
}
