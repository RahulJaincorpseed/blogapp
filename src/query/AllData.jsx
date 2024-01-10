import React from "react"
import { useQuery } from "@tanstack/react-query"
import { getQuery } from "../API/getQuery"
import axios from "axios"

const AllData = () => {
  const {data} = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      return getQuery(`/api/auth/user/allTickets`)
    },
  })

  console.log("data is", data)

  return (
    <div>
      <p>All Data is Here</p>
    </div>
  )
}

export default AllData
