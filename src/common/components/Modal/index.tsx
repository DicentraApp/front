import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setReviewsModal } from '@/features/modal/modalSlice'
import { Drawer } from '@mui/material'

const Modal = ({ children }) => {
  const dispatch = useAppDispatch()
  const { reviewsModal } = useAppSelector((state) => state.modal)

  const handleCloseModal = () => {
    dispatch(setReviewsModal(false))
  }

  return (
    <>
      <Drawer anchor={'right'} open={reviewsModal} onClose={handleCloseModal}>
        <div
          className="w-[580px] h-full bg-light flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={handleCloseModal}
          >
            <img
              className="w-9 h-9"
              src="/images/icons/close.svg"
              alt="close"
            />
          </div>
          <div className="w-80 text-dark">
            <h2 className="text-2xl font-medium text-center mb-6">
              Write a review
            </h2>
            {children}
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Modal
