import React, { useReducer } from "react";
import { data, people } from "../../../data";
import reducer from "./reducer";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";

const defaultState = {
  people: data,
  isLoading: false
};

const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type:REMOVE_ITEM, payload: {id} })
  };

  const clearList = () => {
    dispatch({ type:CLEAR_LIST});
    // setPeople([]);
  };

  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST })
  };
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
