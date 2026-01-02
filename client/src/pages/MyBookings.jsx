import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import { dateFormat } from '../lib/dateFormat'
import timeFormat from '../lib/timeFormat'

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    setBookings(dummyBookingData)
  }, [])

  return (
    <div className="relative px-6 md:px-16 lg:px-40 pt-28 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="-200px" right="400px" />

      <h1 className="text-lg font-semibold mb-6">My Bookings</h1>

      <div className="space-y-4">
        {bookings.map((item, index) => {
          const movie = item.show.movie

          return (
            <div
              key={index}
              className="flex justify-between gap-6
              bg-primary/10 border border-primary/20
              rounded-lg p-4 max-w-3xl"
            >
              {/* LEFT SIDE */}
              <div className="flex gap-4">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-20 h-12 object-cover rounded"
                />

                <div className="text-sm">
                  <p className="font-semibold">{movie.title}</p>
                  <p className="text-gray-400 text-xs">
                    Duration: {timeFormat(movie.runtime)}
                  </p>
                  <p className="text-gray-400 text-xs">
                    Show: {dateFormat(item.show.showDateTime)}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col justify-between text-sm min-w-[200px]">
                
                {/* Amount + Button */}
                <div className="flex justify-between items-center">
                  <p className="font-semibold">
                    {currency}{item.amount}
                  </p>

                  {!item.isPaid && (
                    <button
                      className="bg-primary px-4 py-1.5
                      text-xs rounded-full font-medium"
                    >
                      Pay Now
                    </button>
                  )}
                </div>

                {/* Tickets */}
                <p>
                  <span className="text-gray-400">Tickets:</span>{' '}
                  {item.bookedSeats.length}
                </p>

                {/* Seats */}
                <p className="text-xs text-gray-300">
                  <span className="text-gray-400">Seats:</span>{' '}
                  {item.bookedSeats.join(', ')}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyBookings
