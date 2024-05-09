import { IUser } from '@/common/dto/getUsersDto'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
  users: IUser[]
}

const usersSlice = createSlice({
  name: '@@users',
  initialState: {
    users: [],
  } as IInitialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload)
    },
  },
})

export const { setUsers } = usersSlice.actions

export const usersReducer = usersSlice.reducer
