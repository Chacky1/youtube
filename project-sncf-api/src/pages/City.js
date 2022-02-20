import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import citiesStations from '../gares.json'

import TrainStations from '../components/TrainStations'

const City = () => {
  const { city } = useParams()

  return (
		<div className="city">
			<h2> {city} </h2> <TrainStations stations={citiesStations[city]} />{' '}
			<Outlet />
		</div>
  )
}

export default City
