import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { postQuery } from "../../API/postQuery"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { deleteQuery } from "../../API/deleteQuery"
import { getQuery } from "../../API/getQuery"

export const getAllTickets = createAsyncThunk("allTicket", async () => {
  const myTickets = await getQuery(`/api/auth/user/allTickets`)
  return myTickets
})

export const addNewTicketData = createAsyncThunk("addTicket", async (data) => {
  const myNewTicket = await postQuery(`/api/auth/user/raise`, data)
  return myNewTicket
})


export const deleteNewTicketData = createAsyncThunk("deleteTicket", async (id) => {
    const myNewTicket = await deleteQuery(`/api/auth/user/deleteTicket?id=${id}`)
    return myNewTicket
  })

  
export const getSingleTicket = createAsyncThunk("singleTicket", async (id) => {
    console.log("i am, calling.....");
    const myNewTicket = await getQuery(`/api/auth/user/ticket?id=${id}`)
    return myNewTicket
  })

//   ttp://localhost:8081/api/auth/user/ticket?id=2

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    delete: false,
    singleProduct: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deleteNewTicketData.fulfilled, (state, action) => {
        state.delete = action.payload
      })
    builder.addCase(getAllTickets.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getAllTickets.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(getAllTickets.rejected, (state, action) => {
      state.isError = true
      console.log("Error", state, action.payload)
    })
    builder.addCase(addNewTicketData.fulfilled, (state, action) => {
      state = { ...state, data: action.payload }
    })
    builder.addCase(getSingleTicket.fulfilled, (state, action) => {
        state.singleProduct = action.payload
      })
  },
})

export default ticketSlice.reducer


