const MenuBox = () => {
  const MenuList = [
    {
      name: "Espresso",
      description: "A coffee",
      price: "0.99",
    },
    {
      name: "Espresso",
      description: "A coffee",
      price: "0.99",
    },
    {
      name: "Espresso",
      description: "A coffee",
      price: "0.99",
    },
    {
      name: "Espresso",
      description: "A coffee",
      price: "0.99",
    },
  ];

  return (
    <>
      {MenuList.map(({ name, description, price }) => (
        <>
          <h3> {name} </h3>
          <p>{description}</p>
          <p>Price: { price }MMK</p>
        </>
      ))}
    </>
  )
}

export default MenuBox;