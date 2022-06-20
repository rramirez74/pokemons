import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <div>
        <img src={props.image} className='card-image' />
      </div>
      <div className="card-content">
        <h1>{props.name}</h1>
      </div>
    </div>
  )
}

export default Card