import React, { useState } from "react";

const INITIAL_STATE = {
  name: "",
  address: "",
  location: "",
  image: "",
};

const Form = (props) => {
  const [state, setState] = useState(INITIAL_STATE);

  const submitForm = (ev) => {
    ev.preventDefault();
    const { name, address, location, image } = state;

        if (!name || !address || !location || !image) {
            console.log('Debes rellenar todos los campos');
            return;
        }

        console.log(state);
        props.addProfile(state);
        setState(INITIAL_STATE);
    };

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Address</p>
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>City</p>
          <input
            type="text"
            name="location"
            value={state.location}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Image</p>
          <input
            type="text"
            name="image"
            value={state.image}
            onChange={handleInput}
          />
        </label>

        <div style={{ padding: "20px" }}>
          {state.image ? (
            <img src={state.image} alt={state.name} width="200px" />
          ) : null}
        </div>

        <div>
          <button type="submit">Save Profile</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
