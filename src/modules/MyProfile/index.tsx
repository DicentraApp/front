import { useAppSelector } from '@/hooks/hooks'

const MyProfile = () => {
  const { currentUser } = useAppSelector((state) => state.users)

  return (
    <div className="bg-light pt-48 pb-40 h-screen">
      <div className="container">
        <h2 className="text-3xl font-semibold">Personal data</h2>

        <div className="w-6/12 bg-white p-6 mt-6">
          <div className="mb-2">
            Name: <span className="text-xl ml-4">{currentUser?.name}</span>
          </div>
          <div className="mb-2">
            Phone: <span className="text-xl ml-4">+{currentUser?.phone}</span>
          </div>
          <div className="mb-2">
            Email: <span className="text-xl ml-4">{currentUser?.email}</span>
          </div>

          <button className="flex items-center text-gold mt-6 mb-2">
            <img
              className="mr-2"
              src="/images/icons/lock.svg"
              alt="Change password"
            />
            Change password
          </button>
          <button className="flex items-center text-gold">
            <img className="mr-2" src="/images/icons/pen.svg" alt="Edit data" />
            Edit data
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
