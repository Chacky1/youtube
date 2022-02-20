import React from 'react'
import { Link } from 'react-router-dom'

const TrainStations = ({ stations }) => {
  return (
		<div className="train-stations">
			{Object.keys(stations).map((stationName) => {
			  return (
					<Link key={stationName} to={`${stations[stationName]}`}>
						{stationName}
					</Link>
			  )
			})}
		</div>
  )
}

export default TrainStations
