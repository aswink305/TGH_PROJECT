import { configureStore } from '@reduxjs/toolkit'
import quoteReducer  from './Quotes'
  

export const store = configureStore({
  reducer: {
    Quote:quoteReducer
  },
})