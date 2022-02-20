import React from 'react'
import CityCard from './CityCard'

const CityCards = () => {
  const cities = [
    'bordeaux',
    'brest',
    'lille',
    'lyon',
    'marseille',
    'nantes',
    'paris',
    'strasbourg',
    'toulouse'
  ]

  return (
		<div className="city-cards">
			{cities.map((city) => {
			  return <CityCard key={city} city={city} />
			})}
		</div>
  )
}

export default CityCards
