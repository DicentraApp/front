export interface IUserAddress {
  city: string
  street: string
  number: string
}

export interface IUser {
  id: string
  name: string
  phone: string
  email: string
  password: string
  confirmPassword: string
  createdAt: Date
  address?: IUserAddress | undefined
}
