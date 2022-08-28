import { createReducer, on } from '@ngrx/store';
import { change } from './searchText.actions';

export const initialState = '';

export const searchTextReducer = createReducer(
  initialState,
  on(change, (state, { text }) => text),
);
