import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  //all characters seria myfavorites tecnicamente
};

//no tengo detail

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // return {
    //   ...state,
    //   myFavorites: [...state.myFavorites, action.payload],
    //   allCharacters: [...state.allCharacters, action.payload],
    // };

    //me agrega muchas veces el mismo
    //me remueve el corazon cuando filtro

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // CON EXPRESS
    // return { ...state, myFavorites: action.payload };

    // ANTES DE EXPRESS
    // let copy = state.myFavorites.filter(
    //   (char) => parseInt(char.id) !== parseInt(action.payload)
    // );
    // //aca nati filtro myfavs...habia puesto allchars
    // return {
    //   ...state,
    //   myFavorites: copy,
    //   allCharacters: copy,
    // };

    case FILTER:
      let copy2 = [...state.allCharacters];
      let filterGender = copy2.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites: filterGender,
      };
    case ORDER:
      let copy3 = [...state.myFavorites];
      return {
        ...state,
        myFavorites: copy3.sort((a, b) =>
          action.payload === "A" ? a.id - b.id : b.id - a.id
        ),
      };

    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return { ...state };
  }
};

//en el order dberia poner allfavorites???? Si.. cambiado
//no se eliminarn....el error esta en el remove
//porque return en el sort? revisar eso
//tambien se puede hacer el filter afuera en un let y despues igualarlo a la propiedad
//me pide hacer una copia para que no se pisen los arrays....se pierde el array si no hago copia

export default reducer;
