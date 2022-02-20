
import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({ city }) => {
  const handleMouseOver = () => { }

  return (
		<Link
			to={`${city}/departures`}
			className="city-card"
			style={{ backgroundImage: `url('./images/${city}.webp')` }}>
			<h3 className="city-card__name">{city}</h3>
		</Link>
  )
}

export default CityCard
