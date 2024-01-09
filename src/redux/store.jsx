import { configureStore } from "@reduxjs/toolkit"
import  counterSlice  from "./slices/counter"
import  ticketSlice  from "./slices/ticket"
import { thunk } from "redux-thunk"

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    ticket: ticketSlice,
  },
})
