function Card(props) {
  return (
    <div className="card" tabIndex="0">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;