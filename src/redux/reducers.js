import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, updateFilter } from './actions';
import { nanoid } from 'nanoid';

export const contactsReducer = createReducer([], (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      const hasContact = state.some(item => item.name.toLowerCase() === action.payload.name.toLowerCase())
      if (!hasContact) {
        action.payload.id = nanoid();
        state.push(action.payload);
      } else {
        alert(`${action.payload.name} is already in contacts`);
      }
    })
    .addCase(removeContact, (state, action) => {
      return state.filter(item => item.id !== action.payload);
    })
});
export const filterReducer = createReducer('', (builder) => {
  builder
    .addCase(updateFilter, (state, action) => {
      return action.payload;
    })
} );
