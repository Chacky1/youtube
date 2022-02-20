import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { parseUTCDate } from './Utils'

const Arrivals = () => {
  const { codeStation } = useParams()

  const [nextArrivals, setNextArrivals] = useState([])

  /* I have to study the useEffect again for arrivals */
  useEffect(() => {
    axios
      .get(
				`https://api.sncf.com/v1/coverage/sncf/stop_areas/${codeStation}/arrivals`,
				{
				  headers: {
				    Authorization: `${process.env.REACT_APP_API_KEY}`
				  }
				}
      )
      .then((response) => {
        setNextArrivals(
          response.data.departures.map((departure) => {
            return {
              operator: '',
              transportationMode: departure.display_informations.network,
              trainNumber: departure.display_informations.headsign,
              baseDepartureTime: parseUTCDate(
                departure.stop_date_time.base_departure_date_time
              ),
              realDepartureTime: parseUTCDate(
                departure.stop_date_time.departure_date_time
              ),
              destination:
								departure.display_informations.direction.split(' (')[0]
            }
          })
        )
      })
      .catch((error) => console.log(error))
  }, [])

  return <div className="arrivals">Arrivals</div>
}

export default Arrivals
