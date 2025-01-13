import MenuList from "../data/menuList";

const MenuBox = () => {
  return (
    <>
      {MenuList.map(({ name, description, price, image, image_alt }) => (
        <>
          <img src={image} alt={image_alt} />
          <h3> {name} </h3>
          <p>
            {description} <br />
            Price: <b>{price} MMK</b>
          </p>
        </>
      ))}
    </>
  );
};

export default MenuBox;
