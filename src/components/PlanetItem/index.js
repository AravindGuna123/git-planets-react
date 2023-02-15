// Write your code here

import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <div className="planet-card">
      <img src={imageUrl} alt={`planet${name}`} className="image-size" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
