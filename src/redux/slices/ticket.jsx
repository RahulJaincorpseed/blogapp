import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { postQuery } from "../../API/postQuery"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { deleteQuery } from "../../API/deleteQuery"

export const getAllTickets = createAsyncThunk("allTicket", async () => {
  const myTickets = await axios.get(`/api/auth/user/allTickets`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
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

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    delete: false,
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
  },
})

export default ticketSlice.reducer


