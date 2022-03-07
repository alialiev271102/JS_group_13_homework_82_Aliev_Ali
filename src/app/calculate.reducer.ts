import {createReducer, on} from "@ngrx/store";
import {addNumber} from "./calculate.actions";

const initialState = '';

export const calculateReducer = createReducer(
  initialState,
  on(addNumber, (state, {number}) => state + number)
)
