import { IUser } from '@/common/dto/getUsersDto'
import { BASE_URL } from '@/utils/constans'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type LoginUser = Pick<IUser, 'phone' | 'password'>

export interface IInitialState {
  users: IUser[]
  currentUser: IUser | null
  loginError: string
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

const usersSlice = createSlice({
  name: '@@users',
  initialState: {
    users: [],
    currentUser: null,
    loginError: '',
  } as IInitialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload)
    },
    resetLoginError: (state) => {
      state.loginError = ''
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
    )
  },
})

export const { setUsers, resetLoginError, resetCurrentUser } =
  usersSlice.actions

export const usersReducer = usersSlice.reducer
