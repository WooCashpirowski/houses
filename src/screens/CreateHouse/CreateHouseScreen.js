import React, { useState } from "react";
import { createHouse } from "../../redux/actions";
import { useDispatch } from "react-redux";

const CreateHouseScreen = ({ history }) => {
  const [address, setAddress] = useState("");
  const [floorsNumber, setFloorsNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [label, setLabel] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createHouse(address, floorsNumber, description, label));
    history.push("/houses");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="address"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        required
        placeholder="adres"
      />
      <input
        type="number"
        name="floors"
        onChange={(e) => setFloorsNumber(e.target.value)}
        value={floorsNumber}
        required
      />
      <input
        type="text"
        name="desc"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
        placeholder="opis"
      />
      <input
        type="text"
        name="label"
        onChange={(e) => setLabel(e.target.value)}
        value={label}
        required
        placeholder="etykieta"
      />
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default CreateHouseScreen;
