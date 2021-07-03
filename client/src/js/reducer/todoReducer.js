import {

    GET_Todo,
    SET_LOADING,
} from "../const/actionType";
const initState = {
 todos:[],
 isLoading: false,
};
export default function (state = initState, { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case GET_Todo:
      return {
        ...state,
        todos: payload, isLoading: false  };
              default:
                return state;
            }
          }
         