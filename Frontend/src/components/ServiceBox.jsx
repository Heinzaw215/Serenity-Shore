import ServiceList from '../data/serviceList.json';
import '../css/ServiceBox.css';

const ServiceBox = () => {
  return (
    <div className="service-box">
      {ServiceList.map(({ name, description, id, image, image_alt }) => (
        <div className="service-item" key={id}>
          <img src={image} alt={image_alt} />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceBox;