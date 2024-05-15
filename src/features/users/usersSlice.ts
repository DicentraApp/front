import { IUser, IUserAddress } from '@/common/dto/getUsersDto'
import { BASE_URL } from '@/utils/constans'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type LoginUser = Pick<IUser, 'phone' | 'password'>
type ChangeUser = Pick<IUser, 'phone' | 'name' | 'email'>

interface IPasswords {
  password: string
  newPassword: string
  confirmPassword: string
}

export interface IInitialState {
  users: IUser[]
  currentUser: IUser | null
  loginError: string
  passwordError: string
  passwordMessage: string
}

export const loginUser = createAsyncThunk(
  '@@users/loginUser',
  async (payload: LoginUser, thunkAPI) => {
    try {
      const res = await fetch(BASE_URL + '/login', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      return await res.json()
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const changeUserPassword = createAsyncThunk(
  '@@users/changePassword',
  async (payload: IPasswords, thunkAPI) => {
    try {
      const res = await fetch(BASE_URL + '/login/password', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      return await res.json()
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const usersSlice = createSlice({
  name: '@@users',
  initialState: {
    users: [],
    currentUser: null,
    loginError: '',
    passwordError: '',
    passwordMessage: '',
  } as IInitialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload)
    },
    changeCurrentUserData: (state, action: PayloadAction<ChangeUser>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload }
      } else return
    },
    setCurrentUserAddress: (state, action: PayloadAction<IUserAddress>) => {
      if (state.currentUser) {
        state.currentUser.address = action.payload
      } else return
    },
    resetLoginError: (state) => {
      state.loginError = ''
    },
    resetPasswordMessage: (state) => {
      state.passwordMessage = ''
    },
    resetCurrentUser: (state) => {
      state.currentUser = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<LoginUser>) => {
        state.users.map((user) => {
          if (
            user.phone === action.payload.phone &&
            user.password === action.payload.password
          ) {
            state.currentUser = user
            state.loginError = ''
          } else if (
            user.phone === action.payload.phone &&
            user.password !== action.payload.password
          ) {
            state.loginError = 'Invalid password. Please try again!'
          } else if (user.phone !== action.payload.phone) {
            state.loginError = 'The account cannot be found. Please register!'
          } else {
            return
          }
        })
      }
    ),
      builder.addCase(
        changeUserPassword.fulfilled,
        (state, { payload }: PayloadAction<IPasswords>) => {
          if (state.currentUser?.password === payload.password) {
            state.currentUser.password = payload.newPassword
            state.currentUser.confirmPassword = payload.confirmPassword
            state.passwordMessage = 'Password changed successfully!'
          } else {
            return
          }
        }
      )
  },
})

export const {
  setUsers,
  resetLoginError,
  resetCurrentUser,
  setCurrentUserAddress,
  changeCurrentUserData,
  resetPasswordMessage,
} = usersSlice.actions

export const usersReducer = usersSlice.reducer
