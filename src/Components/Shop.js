import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((response) => response.json());
    setItems(data);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item) => (
        <Link to={`shop/${item.id}`}>
          <li key={item.id}>
            {item.title}
          </li>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
