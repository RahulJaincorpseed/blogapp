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

export const deleteNewTicketData = createAsyncThunk(
  "deleteTicket",
  async (id) => {
    const myNewTicket = await deleteQuery(
      `/api/auth/user/deleteTicket?id=${id}`
    )
    return myNewTicket
  }
)

export const getSingleTicket = createAsyncThunk("singleTicket", async (id) => {
  console.log("i am, calling.....")
  const myNewTicket = await getQuery(`/api/auth/user/ticket?id=${id}`)
  return myNewTicket
})

//   ttp://localhost:8081/api/auth/user/ticket?id=2

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    isLoading: false,
    isCreateLoad: false,
    isCreateError: false,
    data: [],
    isError: false,
    delete: false,
    singleProduct: {},
  },
  extraReducers: (builder) => {
    // get all ticket cases
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
    //  Add New ticket cases
    builder.addCase(addNewTicketData.pending, (state, action) => {
      state.isCreateLoad = true
    })
    builder.addCase(addNewTicketData.fulfilled, (state, action) => {
      state.isCreateLoad = false
      state = { ...state, data: action.payload }
    })
    builder.addCase(addNewTicketData.rejected, (state, action) => {
      state.isCreateError = true
      state.isCreateLoad = false
      console.log("Error", state)
    })
    // Delete New Ticket
    builder.addCase(deleteNewTicketData.pending, (state, action) => {
      state.delete = true
    })

    builder.addCase(deleteNewTicketData.fulfilled, (state, action) => {
      state.delete = false
    })

    builder.addCase(deleteNewTicketData.rejected, (state, action) => {
      state.delete = false
      console.log(action.payload);
    })

    builder.addCase(getSingleTicket.fulfilled, (state, action) => {
      state.singleProduct = action.payload
    })
  },
})

export default ticketSlice.reducer
