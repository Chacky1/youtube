import React, { useState } from 'react'
import Departures from './Departures'
import Arrivals from './Arrivals'

const TrainStation = () => {
  const [departureMode, setDepartureMode] = useState(true)

  return (
		<div className="train-station">
			<div className="directions">
				<div
					className="directions__departure"
					onClick={() => setDepartureMode(true)}>
					<h3>Départs</h3>
				</div>
				<div
					className="directions__arrivals"
					onClick={() => setDepartureMode(false)}>
					<h3>Arrivées</h3>
				</div>
			</div>

			{departureMode && <Departures />}
			{!departureMode && <Arrivals />}
		</div>
  )
}

export default TrainStation
