import "../data/roomList.json"

const RoomBox = () => {
  return (
    <>
      {roomList.map(({ name, description, price, id, image, image_alt}) => (
        <div className="" key={id}>
          <img src={image} alt={image_alt} />
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Price: { price } per night</p>
        </div>
      ))}
    </>
  )
}

export default RoomBox;