import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  Quotes: {},
}

export const quoteSlice = createSlice({
  name: 'Quote',
  initialState,
  reducers: {
    
    newQuotes: (state, action) => {
       
            state.Quotes = action.payload
        
      
    },
  },
})


export const { newQuotes } = quoteSlice.actions

export default quoteSlice.reducer