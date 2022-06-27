import { createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContactReducer(state, action) {
      state.items = [action.payload, ...state.items];
    },

    deleteContactReducer(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    setFilterReducer(state, action) {
      state.filter = action.payload;
    },
  },
});



export default contactsSlice;
export const { addContactReducer, deleteContactReducer, setFilterReducer } = contactsSlice.actions;
