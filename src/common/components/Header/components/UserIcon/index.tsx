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
        <img src="/images/icons/icon_user.svg" alt="user" />
      ) : (
        <div className="rounded-full bg-light p-2 flex items-center justify-center">
          <img src="/images/icons/icon_user.svg" alt="user" />
        </div>
      )}
    </button>
  )
}

export default UserIcon
