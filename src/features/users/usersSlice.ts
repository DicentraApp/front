import { IUser } from '@/common/dto/getUsersDto'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import {
  ChangeUser,
  IInitialState,
  IPasswords,
  IUserAddressWithID,
  LoginUser,
  UserReview,
} from './dto'
// import { BASE_URL } from '@/utils/constans'
// import { createAsyncThunk } from '@reduxjs/toolkit'

// Request if server is running

// export const loginUser = createAsyncThunk(
//   '@@users/loginUser',
//   async (payload: LoginUser, thunkAPI) => {
//     try {
//       const res = await fetch(BASE_URL + '/login', {
//         method: 'POST',
//         body: JSON.stringify(payload),
//       })
//       return await res.json()
//     } catch (error) {
//       console.log(error)
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

// export const changeUserPassword = createAsyncThunk(
//   '@@users/changePassword',
//   async (payload: IPasswords, thunkAPI) => {
//     try {
//       const res = await fetch(BASE_URL + '/login/password', {
//         method: 'POST',
//         body: JSON.stringify(payload),
//       })
//       return await res.json()
//     } catch (error) {
//       console.log(error)
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

const usersSlice = createSlice({
  name: '@@users',
  initialState: {
    users: [],
    currentUser: null,
    passwordMessage: '',
    registrationError: '',
    registrationStatus: 'idle',
  } as IInitialState,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<IUser>) => {
      if (!state.users.length) {
        state.users.push(payload)
        state.registrationStatus = 'success'
        return
      }

      const found = state.users.find((user) => user.phone === payload.phone)

      if (found) {
        state.registrationError =
          'The user with this phone number is already registered.'
      } else {
        state.users.push(payload)
        state.registrationError = ''
        state.registrationStatus = 'success'
      }
    },
    loginUser: (state, { payload }: PayloadAction<LoginUser>) => {
      if (!state.users) {
        return
      }

      state.users?.map((user) => {
        if (
          user.phone === payload.phone &&
          user.password === payload.password
        ) {
          state.currentUser = user
          return
        } else return
      })
    },
    changeCurrentUserData: (state, { payload }: PayloadAction<ChangeUser>) => {
      state.users.map((user) => {
        if (user.id === payload.id) {
          user.name = payload.name
          user.phone = payload.phone
          user.email = payload.email
        } else return
      })
    },
    addCurrentUserReview: (state, { payload }: PayloadAction<UserReview>) => {
      state.users.map((user) => {
        if (user.id == payload.userID) {
          user.reviews?.push(payload)
          // state.currentUser?.reviews?.push(payload)
        } else return user
      })
    },
    setCurrentUserAddress: (
      state,
      { payload }: PayloadAction<IUserAddressWithID>
    ) => {
      state.users.map((user) => {
        if (user.id === payload.id) {
          user.address = { ...payload }
        } else return
      })
    },
    changeUserPassword: (state, { payload }: PayloadAction<IPasswords>) => {
      state.users.map((user) => {
        if (user.id === payload.id) {
          if (user.password === payload.password) {
            user.password = payload.newPassword
            user.confirmPassword = payload.confirmPassword
            state.passwordMessage = 'Password changed successfully!'
          } else {
            return
          }
        } else return
      })
    },
    resetPasswordMessage: (state) => {
      state.passwordMessage = ''
    },
    resetCurrentUser: (state) => {
      state.currentUser = null
      state.registrationStatus = 'idle'
    },
    resetRegistrationMessage: (state) => {
      state.registrationStatus = 'idle'
    },
    resetRegistrationError: (state) => {
      state.registrationError = ''
    },
  },
  // Reducers if server is running
  //
  // extraReducers: (builder) => {
  //   builder.addCase(
  //     loginUser.fulfilled,
  //     (state, { payload }: PayloadAction<LoginUser>) => {
  //       state.users.map((user) => {
  //         if (
  //           user.phone === payload.phone &&
  //           user.password === payload.password
  //         ) {
  //           state.currentUser = user
  //         } else {
  //           return
  //         }
  //       })
  //     }
  //   ),
  //     builder.addCase(
  //       changeUserPassword.fulfilled,
  //       (state, { payload }: PayloadAction<IPasswords>) => {
  //         state.users.map((user) => {
  //           if (user.id === payload.id) {
  //             if (user.password === payload.password) {
  //               user.password = payload.newPassword
  //               user.confirmPassword = payload.confirmPassword
  //               state.passwordMessage = 'Password changed successfully!'
  //             } else {
  //               return
  //             }
  //           } else return
  //         })
  //       }
  //     )
  // },
})

export const {
  setUsers,
  loginUser,
  changeUserPassword,
  setCurrentUserAddress,
  changeCurrentUserData,
  addCurrentUserReview,
  resetCurrentUser,
  resetPasswordMessage,
  resetRegistrationMessage,
  resetRegistrationError,
} = usersSlice.actions

export const usersReducer = usersSlice.reducer
