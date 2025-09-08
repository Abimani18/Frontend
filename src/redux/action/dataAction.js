// src/actions/dataActions.js
export const updateData = (page, data) => ({
  type: 'UPDATE_DATA',
  payload: {
    page,
    data
  }
});
