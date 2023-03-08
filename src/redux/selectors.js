import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);
