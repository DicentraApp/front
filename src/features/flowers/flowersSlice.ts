import { createSlice } from '@reduxjs/toolkit'
import {
  IFlowerItem,
  IFlowersData,
  IReviewItem,
} from '@/common/dto/getFlowersDto'
import type { PayloadAction } from '@reduxjs/toolkit'

// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { BASE_URL } from '@/utils/constans'

// request if server is running

// export const getFlowers = createAsyncThunk('@@flowers', async (_, thunkAPI) => {
//   try {
//     const res = await axios<IFlowersData>(`${BASE_URL}/flowers`)
//     return res.data
//   } catch (error) {
//     console.log(error)
//     return thunkAPI.rejectWithValue(error)
//   }
// })

export interface IInitialState {
  list: IFlowersData | []
  filtered: IFlowersData | []
  flowers: IFlowerItem[] | []
  flowerItem: IFlowerItem
  priceWithCount: number
  isLoading: boolean
}

const flowersSlice = createSlice({
  name: '@@flowers',
  initialState: {
    list: [],
    filtered: [],
    flowers: [],
    flowerItem: {},
    priceWithCount: 0,
    isLoading: false,
  } as IInitialState,
  reducers: {
    getFlowers: (state, action: PayloadAction<IFlowersData>) => {
      state.list = action.payload
      state.flowers = action.payload[0].flowers
    },
    setFlowers: (state, action: PayloadAction<IFlowerItem[]>) => {
      state.flowers = action.payload
    },
    setFlowerItem: (state, action: PayloadAction<IFlowerItem>) => {
      state.flowerItem = action.payload
    },
    setPriceWithCount: (state) => {
      if (state.flowerItem.isAction && state.flowerItem.actionPrice) {
        state.priceWithCount = state.flowerItem.actionPrice
      } else {
        state.priceWithCount = state.flowerItem.price
      }
    },
    addPriceWithCount: (state) => {
      if (state.flowerItem.isAction && state.flowerItem.actionPrice) {
        state.priceWithCount += state.flowerItem.actionPrice
      } else {
        state.priceWithCount += state.flowerItem.price
      }
    },
    minusPriceWithCount: (state) => {
      if (state.flowerItem.isAction && state.flowerItem.actionPrice) {
        state.priceWithCount -= state.flowerItem.actionPrice
      } else {
        state.priceWithCount -= state.flowerItem.price
      }
    },
    addReview: (state, action: PayloadAction<IReviewItem>) => {
      state.flowerItem.reviews?.push(action.payload)

      state.list.map((item) => {
        item.flowers.map((f) => {
          if (f.id === action.payload.flowerID) {
            f.reviews?.push(action.payload)
          } else return
        })
      })
    },
  },
  // Reducer if server is running
  // extraReducers: (builder) => {
  //   builder.addCase(getFlowers.pending, (state) => {
  //     state.isLoading = true
  //   })
  //   builder.addCase(
  //     getFlowers.fulfilled,
  //     (state, action: PayloadAction<IFlowersData>) => {
  //       state.list = action.payload
  //       state.flowers = action.payload[0].flowers
  //       state.isLoading = false
  //     }
  //   )
  //   builder.addCase(getFlowers.rejected, (state) => {
  //     state.isLoading = false
  //   })
  // },
})

export const {
  getFlowers,
  setFlowers,
  setFlowerItem,
  addPriceWithCount,
  minusPriceWithCount,
  setPriceWithCount,
  addReview,
} = flowersSlice.actions

export const flowersReducer = flowersSlice.reducer
