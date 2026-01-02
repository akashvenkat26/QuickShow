import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets'
import Title from '../../components/admin/Title'
import { dateFormat } from '../../lib/dateFormat'

const ListShows = () => {

  const currency = import.meta.env.VITE_CURRENCY || '₹'
  const [shows, setShows] = useState([])

  const getAllShows = async () => {
    try {
      setShows([
        {
          movie: dummyBookingData[0],
          showDateTime: "2025-06-30T02:30:00.000Z",
          showPrice: 59,
          occupiesSeats: {
            A1: "user_1",
            B1: "user_2",
            C1: "user_3",
          }
        }
      ])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getAllShows()
  }, [])

  return (
    <>
      <Title text1="List" text2="Shows" />

      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full bg-primary/20 text-left text-white rounded-md overflow-hidden">
          <thead>
            <tr className="bg-primary/30">
              <th className="p-3 font-medium">Movie Name</th>
              <th className="p-3 font-medium">Show Time</th>
              <th className="p-3 font-medium">Total Bookings</th>
              <th className="p-3 font-medium">Earnings</th>
            </tr>
          </thead>

          <tbody className="text-sm font-light">
            {shows.length > 0 ? (
              shows.map((show, index) => {
                const totalBookings = Object.keys(show.occupiesSeats).length
                const earnings = totalBookings * show.showPrice

                return (
                  <tr
                    key={index}
                    className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
                  >
                    <td className="p-3">{dummyBookingData[index].show.movie.title
                      }</td>
                    <td className="p-3">{dateFormat(show.showDateTime)}</td>
                    <td className="p-3">{totalBookings}</td>
                    <td className="p-3">
                      {currency} {earnings}
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-white/60">
                  No shows available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListShows
