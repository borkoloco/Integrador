import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actionTypes";
import axios from "axios";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//VER PORQUE VA EN DISPATCH LA ASYNC

// CON EXPRESS
// export const addFav = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";
//   return (dispatch) => {
//     axios.post(endpoint, character).then(({ data }) => {
//       return dispatch({
//         type: ADD_FAV,
//         payload: data,
//       });
//     });
//   };
// };

//dispatch??
//ME REPITE CHARACTERS EL ADD...VER NATI

// ANTES DE EXPRESS
//   return {
//     type: ADD_FAV,
//     payload: character,
//   };
// };

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// CON EXPRESS
// export const removeFav = (id) => {
//   // CON EXPRESS
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: REMOVE_FAV,
//         payload: data,
//       });
//     });
//   };
// };

//ANTES DE EXPRESS
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// };

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
export const resetCards = () => {
  return {
    type: RESET,
  };
};
