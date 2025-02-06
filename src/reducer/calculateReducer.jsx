import {useReducer} from "react";

const initialState = {
  result: "",
  a: null,
  b: null,
  operation: null,
  error: ""
 };

const reducer = (state, action) => {
  switch (action.type) {
    case "set_value":
      console.log(state)
      console.log(action)
      if(state.operation == null) {
        const a = state.a == null ? action.payload.value : state.a + "" + action.payload.value;

        return {
          ...state,
          a: a,
          result: a,
          error: ""
        }
      } else {
        const b = state.b == null ? action.payload.value : state.b + "" + action.payload.value;

        return {
          ...state,
          b: b,
          result: b,
          error: ""
        }
      }
    case "set_operator":
      console.log(action.payload)
      return {
        ...state,
        operation: action.payload,
        result: ''
      };
    case "calculate":
      if (state.a !== null && state.b !== null) {
        let result = eval(`${state.a}${state.operation}${state.b}`);
        return {
          result: result.toString(),
          a: result,
          b: null,
          operation: null
        };
      }
      return state;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const useCalculateReducer = () => useReducer(reducer, initialState)

export default useCalculateReducer