import React, { useState } from "react"
import Input from "../component/Input"
import Button from "../component/Button"
import { useDispatch } from "react-redux"
import { addNewTicketData } from "../redux/slices/ticket"
import { useNavigate } from "react-router"

const AddTicket = () => {
  const [addNewTicket, setAddNewTicket] = useState({
    description: "",
    subject: "",
  })

  const navigate  = useNavigate()

  const dispatch = useDispatch()

  const newTicketAdd = (e) => {
    setAddNewTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addNewTicketFun = (e) => {
    e.preventDefault()
    dispatch(addNewTicketData(addNewTicket))
    navigate('/allticket')
  }

  console.log(addNewTicket)

  return (
    <div>
      <form>
        <Input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          onChange={(e) => newTicketAdd(e)}
        />
        <Input
          type="text"
          name="description"
          placeholder="Enter Description"
          onChange={(e) => newTicketAdd(e)}
        />
        <Button onClick={(e) => addNewTicketFun(e)} data="Add New Tickets" />
      </form>
    </div>
  )
}

export default AddTicket
