import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setReviewsModal } from '@/features/modal/modalSlice'
import Rating from '@/common/UI/Icons/Rating'
import { BASE_URL } from '@/utils/constans'
import { addReview } from '@/features/flowers/flowersSlice'

const ReviewsModalForm = () => {
  const {
    flowerItem: { id },
  } = useAppSelector((state) => state.flowers)
  const dispatch = useAppDispatch()
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      comment: '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const date = new Date().toLocaleString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      const comment = {
        id: crypto.randomUUID(),
        rating: currentIndex,
        createdAt: date,
        ...data,
      }

      const res = await fetch(`${BASE_URL}/flowers/${id}/reviews`, {
        method: 'POST',
        body: JSON.stringify(comment),
      })

      if (res.status === 200) {
        dispatch(addReview(comment))
        dispatch(setReviewsModal(false))
      }
    } catch (error) {
      console.log(error)
    }
    reset()
    setCurrentIndex(0)
  })

  return (
    <>
      <div className="mb-5">
        <div className="flex items-center justify-center mb-1">
          <span className="mr-3">Your rating: </span>
          <Rating
            count={5}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            className="w-full bg-white rounded-full p-4 border-none mb-1 focus:outline-gold "
            type="text"
            placeholder="Your name"
            {...register('name', {
              required: 'Name is required!',
              min: {
                message: 'Name must contain at least 2 characters',
                value: 2,
              },
              // onChange: (e) => {
              //   e.target.value = e.target.value.replace(/[^a-zA-Z]+/g, '')
              // },
            })}
          />
          <div className="text-red-600 h-3 text-xs ml-5">
            {errors.name?.message}
          </div>
        </div>

        <div className="mb-6">
          <textarea
            className="w-full h-48 bg-white rounded-3xl p-4 border-none resize-none focus:outline-gold"
            placeholder="Review text"
            {...register('comment', {
              required: 'Comment is required!',
            })}
          />
          <div className="text-red-600 h-3 text-xs ml-5">
            {errors.comment?.message}
          </div>
        </div>

        <DarktBtn
          text="Send"
          width="w-full py-4 disabled:opacity-75 disabled:bg-dark"
          type="submit"
          disabled={!currentIndex}
        />
      </form>
    </>
  )
}

export default ReviewsModalForm
