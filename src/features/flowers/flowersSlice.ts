import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'
import { IFlowerItem, IFlowersData } from '@/common/dto/getFlowersDto'
import type { PayloadAction } from '@reduxjs/toolkit'

export const getFlowers = createAsyncThunk('@@flowers', async (_, thunkAPI) => {
  try {
    const res = await axios<IFlowersData>(`${BASE_URL}/flowers`)
    return res.data
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error)
  }
})

export interface IInitialState {
  list: IFlowersData
  filtered: IFlowersData
  flowers: IFlowerItem[]
  isLoading: boolean
}

const flowersSlice = createSlice({
  name: '@@flowers',
  initialState: {
    list: [],
    filtered: [],
    flowers: [],
    isLoading: false,
  } as IInitialState,
  reducers: {
    setFlowers: (state, action: PayloadAction<IFlowerItem[]>) => {
      state.flowers = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlowers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      getFlowers.fulfilled,
      (state, action: PayloadAction<IFlowersData>) => {
        state.list = action.payload
        state.flowers = action.payload[0].flowers
        state.isLoading = false
      }
    )
    builder.addCase(getFlowers.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { setFlowers } = flowersSlice.actions

export default flowersSlice.reducer
