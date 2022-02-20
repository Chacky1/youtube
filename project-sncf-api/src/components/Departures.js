import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getUTCDate, parseUTCDate } from './Utils'

const Departures = () => {
  const { codeStation } = useParams()

  const [nextDepartures, setNextDepartures] = useState([])

  useEffect(() => {
    const getStops = (vehicleJourneyId) => {
      axios
        .get(
					`https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${vehicleJourneyId}`,
					{
					  headers: {
					    Authorization: `${process.env.REACT_APP_API_KEY}`
					  }
					}
        )
        .then((response) => {
          return response.data.vehicle_journeys[0].stop_times.map((station) => {
            return station.stop_point.name
          })
        })
        .catch((error) => console.log(error))
    }

    axios
      .get(
				`https://api.sncf.com/v1/coverage/sncf/stop_areas/${codeStation}/departures?datetime=${getUTCDate()}`,
				{
				  headers: {
				    Authorization: `${process.env.REACT_APP_API_KEY}`
				  }
				}
      )
      .then((response) => {
        setNextDepartures(
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
								departure.display_informations.direction.split(' (')[0],
              stops: getStops(departure.links[1].id)
            }
          })
        )
      })
      .catch((error) => console.log(error))
  }, [])

  return <div className="departures">Departures</div>
}

export default Departures
