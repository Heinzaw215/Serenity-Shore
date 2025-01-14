import MenuList from "../data/menuList";
import "../css/MenuBox.css";

const MenuBox = () => {
  return (
    <>
      {MenuList.map(({ id, name, description, price, image, image_alt }) => (
        <div className="menu-box" key={id}>
          <img src={image} alt={image_alt} />
          <h3> {name} </h3>
          <p>
            {description} <br />
            Price: <b>{price} MMK</b>
          </p>
        </div>
      ))}
    </>
  );
};

export default MenuBox;
