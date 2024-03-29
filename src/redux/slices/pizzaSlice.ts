import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { RootState } from '../store';


type Pizza = {
    id: string;
    price: number;
    title: string;
    imageUrl: string;
    sizes: number[];
    types: number[];
}

export enum Status{
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error", 
}

interface PizzaSliceState{
    items: Pizza[];
    status: Status;
}


const initialState:PizzaSliceState = {
  items: [],
  status: Status.LOADING,
}


export const fetchPizzas = createAsyncThunk<Pizza[], Record<string,string>> (
  'pizza/fetchPizzasStatus',
  async (params) => {
    const {
      sortBy,
      order,
      category,        
      search,
      currentPage,
    } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://65e9cfcfc9bf92ae3d3a4e2e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
      return data 
  })

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = []

      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = Status.SUCCESS
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        console.log(action, 'rejected')
        state.status = Status.ERROR
        state.items = []
      });
  }
})

export const selectPizzaData = (state: RootState) => state.pizza
export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer;