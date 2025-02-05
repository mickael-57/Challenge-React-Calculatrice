import {useReducer} from "react";

const initialState = {
  result: "",
  prevValue: null,
  operation: null,
  error: ""
 };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return { ...state, input: state.input + action.payload };
    case "set_value":
      console.log(state)
      console.log(action)
      if(state.prevValue == null) {
        return {
          ...state,
          prevValue: action.payload.value,
          result: action.payload.value,
          error: ""
        }
      } else {
        return {
          ...state,
          result: action.payload.value,
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
      if (state.prevValue !== null && state.result !== "") {
        const currentValue = parseFloat(state.result);
        let result = eval(`${state.prevValue}${state.operation}${currentValue}`);
        return {
          result: result.toString(),
          prevValue: null,
          operation: null
        };
      }
      return state;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const useCalculateReducer = () => useReducer(reducer, initialState)

export default useCalculateReducer