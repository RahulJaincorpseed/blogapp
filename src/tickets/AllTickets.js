import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../component/Button"
import { deleteNewTicketData } from "../redux/slices/ticket"

const AllTickets = () => {
  const allTickets = useSelector((prev) => prev?.ticket)

  const {
    isLoading: loadTickets,
    data: tickets,
    isError: ticketError,
  } = allTickets
  console.log("all tickets", allTickets)

  const dispatch = useDispatch()

  return (
    <div>
      {loadTickets ? (
        <h1>Loading</h1>
      ) : (
        tickets?.data?.map((t, index) => (
          <div key={index}>
            <p>{t.id}</p>
            <p>{t.subject}</p>
            <p>{t.description}</p>
            <Button
              data="delete Ticket"
              onClick={() => dispatch(deleteNewTicketData(t.id))}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default AllTickets
