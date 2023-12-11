import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add');
export const removeContact = createAction('contact/remove');
export const updateFilter = createAction('filter/update');
