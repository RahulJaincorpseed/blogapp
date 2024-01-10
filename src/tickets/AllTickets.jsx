import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../component/Button"
import { deleteNewTicketData, getAllTickets, getSingleTicket } from "../redux/slices/ticket"
import { Link } from "react-router-dom"

const AllTickets = () => {
  const allTickets = useSelector((prev) => prev?.ticket)
  const {delete: deleteDep} = useSelector((prev) => prev?.ticket)

  useEffect(() => {
    dispatch(getAllTickets())
  }, [deleteDep])

  const {
    isLoading: loadTickets,
    data: tickets,
    isError: ticketError,
  } = allTickets
  console.log("all tickets", allTickets)

  const dispatch = useDispatch()

  return (
    <div>
      <div className="d-flex justify-content-between p-2">
        <div>
          <h4>List of All Tickets</h4>
        </div>
        <div>
        <Link className="btn btn-primary" to="/addticket">Add new Ticket</Link>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Subject</th>
            <th scope="col">Description</th>
            <th scope="col">Single Ticket</th>
            <th scope="col">Delete Ticket</th>
          </tr>
        </thead>
        <tbody>
          {loadTickets ? (
            <h1>Loading</h1>
          ) : (
            tickets?.data?.map((t, index) => (
              <tr key={index}>
                <th scope="row">{t.id}</th>
                <td>{t.subject}</td>
                <td>{t.description}</td>
               
                <td> <Link className="btn btn-info" to={`/ticket/${t.id}`}>GO Ticket</Link></td>
                <td>
                  {" "}
                  <Button
                    data="delete Ticket"
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteNewTicketData(t.id))}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AllTickets
