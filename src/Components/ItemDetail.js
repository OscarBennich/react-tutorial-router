import React, { useState, useEffect } from "react";
import "../App.css";

function Item({ match }) {
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${match.params.id}`
      ).then((response) => response.json());
      setItem(data);
    };

    fetchItems();
  }, [match]);

  const [item, setItem] = useState([]);

  

  return (
      <div>
          <h1> Test </h1>
          <div>
            {item.title}
          </div>
      </div>
  );
}

export default Item;
