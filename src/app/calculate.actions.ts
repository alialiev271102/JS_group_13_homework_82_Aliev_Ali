import {createAction, props} from "@ngrx/store";

export const addNumber = createAction(
  '[Calculate] Add Numbers',
  props<{number: string}>()
);

export const getAnswer = createAction(
  '[Calculator] Get Answer'
);

export const deleteNumber = createAction(
  '[Calculator] Delete Number'
)
