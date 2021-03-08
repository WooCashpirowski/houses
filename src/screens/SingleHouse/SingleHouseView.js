import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHouseDetails, deleteHouse } from "../../redux/actions";

const SingleHouseView = ({ match, history }) => {
  const houseId = match.params.id;
  const dispatch = useDispatch();
  const { house } = useSelector((state) => state.houseDetails);

  useEffect(() => {
    dispatch(getHouseDetails(houseId));
  }, [dispatch, houseId]);

  const handleDelete = (id) => {
    if (window.confirm("Czy aby na pewno?")) {
      dispatch(deleteHouse(id));
      history.push("/houses");
    }
  };

  return (
    <div>
      <h2>Dom nr: {house._id}</h2>
      <p>Opis: {house.description}</p>
      <p>Dodany: {house.createdAt}</p>
      <button onClick={() => handleDelete(house._id)}>Usuń</button>
      <Link to="/houses">Wróć</Link>
    </div>
  );
};

export default SingleHouseView;
