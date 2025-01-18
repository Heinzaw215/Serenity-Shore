import EventList from '../data/eventList.json';
import '../css/EventBox.css';

const EventBox = () => {
  return (
    <div className="event-box">
      {EventList.map(({ title, description, date, id, image, image_alt }) => (
        <div className="event-item" key={id}>
          <img src={image} alt={image_alt} />
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Date: {date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventBox;