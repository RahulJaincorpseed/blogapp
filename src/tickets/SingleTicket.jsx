import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getSingleTicket } from "../redux/slices/ticket";
import { useDispatch, useSelector } from "react-redux";

const SingleTicket = () => {

    const {ticketId} = useParams();

    const singleTicket = useSelector((state) => (state.ticket.singleProduct));

    console.log("i am sinlg e ticket", singleTicket);

    const {data: singleTicketData} = singleTicket;

    const dispatch = useDispatch();
    console.log(ticketId);

    useEffect(() => {
        dispatch(getSingleTicket(ticketId))
    },[])


  return (
    <div>
        <p>Sinlge Ticket</p>
        <p>ID: {singleTicketData?.id}</p>
        <p>Subject: {singleTicketData?.subject}</p>
        <p>Description: {singleTicketData?.description}</p>
    </div>
  )
};

export default SingleTicket;
