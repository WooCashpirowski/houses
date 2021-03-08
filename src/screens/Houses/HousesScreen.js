import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteHouse, listHouses } from "../../redux/actions";

const HousesScreen = () => {
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.housesList);

  useEffect(() => {
    dispatch(listHouses());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Czy aby na pewno?")) {
      dispatch(deleteHouse(id));
    }
  };

  return (
    <div>
      <ul>
        {houses.map((house) => (
          <li key={house._id}>
            {house.description} <Link to={`/houses/${house._id}`}>przejdź</Link>{" "}
            <button onClick={() => handleDelete(house._id)}>Usuń</button>
          </li>
        ))}
      </ul>
      <Link to="/create">Dodaj dom</Link>
    </div>
  );
};

export default HousesScreen;
