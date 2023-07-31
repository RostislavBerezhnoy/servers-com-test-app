import { useModal } from 'hooks/useModal'
import { Button } from 'antd'
import { CreatePostModal } from './CreatePostModal'

export const CreatePost = () => {
  const {
    isOpen: isCreatePostModalOpen,
    closeModal: closeCreatePostModal,
    openModal: openCreatePostModal,
  } = useModal()

  return (
    <>
      <Button type='primary' ghost onClick={openCreatePostModal}>
        Create a new post
      </Button>
      {isCreatePostModalOpen && (
        <CreatePostModal isOpen={isCreatePostModalOpen} closeModal={closeCreatePostModal} />
      )}
    </>
  )
}
