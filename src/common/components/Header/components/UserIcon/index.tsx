import { setLoginModal } from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { useNavigate } from 'react-router-dom'

const UserIcon = () => {
  const { currentUser } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleOpenUser = () => {
    if (currentUser) {
      navigate('/my-profile')
    } else {
      dispatch(setLoginModal(true))
    }
  }
  return (
    <button className="ml-4" onClick={handleOpenUser}>
      {!currentUser ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 10.0833C7.975 10.0833 6.33337 8.44171 6.33337 6.41667C6.33337 4.39162 7.975 2.75 10 2.75C12.0251 2.75 13.6667 4.39162 13.6667 6.41667C13.6667 8.44171 12.0251 10.0833 10 10.0833ZM5.33337 6.41667C5.33337 3.83934 7.42271 1.75 10 1.75C12.5774 1.75 14.6667 3.83934 14.6667 6.41667C14.6667 8.994 12.5774 11.0833 10 11.0833C7.42271 11.0833 5.33337 8.994 5.33337 6.41667ZM8.83333 12.9167C5.33553 12.9167 2.5 15.7522 2.5 19.25H3.5C3.5 16.3045 5.88781 13.9167 8.83333 13.9167H11.1667C14.1122 13.9167 16.5 16.3045 16.5 19.25H17.5C17.5 15.7522 14.6645 12.9167 11.1667 12.9167H8.83333Z"
            fill="#292933"
          />
        </svg>
      ) : (
        <div className="rounded-full bg-bordo p-2 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 10.0833C7.975 10.0833 6.33337 8.44171 6.33337 6.41667C6.33337 4.39162 7.975 2.75 10 2.75C12.0251 2.75 13.6667 4.39162 13.6667 6.41667C13.6667 8.44171 12.0251 10.0833 10 10.0833ZM5.33337 6.41667C5.33337 3.83934 7.42271 1.75 10 1.75C12.5774 1.75 14.6667 3.83934 14.6667 6.41667C14.6667 8.994 12.5774 11.0833 10 11.0833C7.42271 11.0833 5.33337 8.994 5.33337 6.41667ZM8.83333 12.9167C5.33553 12.9167 2.5 15.7522 2.5 19.25H3.5C3.5 16.3045 5.88781 13.9167 8.83333 13.9167H11.1667C14.1122 13.9167 16.5 16.3045 16.5 19.25H17.5C17.5 15.7522 14.6645 12.9167 11.1667 12.9167H8.83333Z"
              fill="#fff"
            />
          </svg>
        </div>
      )}
    </button>
  )
}

export default UserIcon
