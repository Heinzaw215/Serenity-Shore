import RoomList from '../data/roomList.json';
import '../css/RoomBox.css';

const RoomBox = () => {
  return (
    <div className="room-box">
      {RoomList.map(({ name, description, price, id, image, image_alt }) => (
        <div className="room-item" key={id}>
          <img src={image} alt={image_alt} />
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Price: {price} per night</p>
        </div>
      ))}
    </div>
  );
};

export default RoomBox;