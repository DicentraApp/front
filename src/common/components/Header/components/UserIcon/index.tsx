import { FC } from 'react'

interface IUserIcon {
  iconUserPath: string
}

const UserIcon: FC<IUserIcon> = ({ iconUserPath }) => {
  return (
    <button className="ml-4">
      <img src={iconUserPath} alt="user-icon" />
    </button>
  )
}

export default UserIcon
