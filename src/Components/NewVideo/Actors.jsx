import { actors } from '../data'

const Actors = () => {
  return (
    <div className="actors-list">
      {actors.map((actor) => (
        <div key={actor.id} className="actor-details">
          <img src={actor.actorImg} alt={actor.name} className="actor-img" />
          <p>{actor.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Actors
