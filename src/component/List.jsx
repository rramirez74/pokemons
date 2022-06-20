import './List.css'

const List = (props) => {
  return (
    <div className='list-card'>
      <div>
        <img src={props.image} className='list-card-image' />
      </div>
      <div className="list-card-content">
        <h1>{props.name}</h1>
      </div>
    </div>
  )
}

export default List