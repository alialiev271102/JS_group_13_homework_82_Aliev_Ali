import {createAction, props} from "@ngrx/store";

export const addNumber = createAction(
  '[Calculate] Add Numbers',
  props<{number: string}>()
);
