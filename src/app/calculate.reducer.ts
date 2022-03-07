import {createReducer, on} from "@ngrx/store";
import {addNumber, deleteNumber, getAnswer} from "./calculate.actions";

const initialState = '';

export const calculateReducer = createReducer(
  initialState,
  on(addNumber, (state, {number}) => state + number),
  on(getAnswer, (state) => eval(state)),
  on(deleteNumber, (state) => state.substring(0, state.length - 1)),
)
