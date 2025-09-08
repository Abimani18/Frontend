// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from '../reducers/authReducer';
import dataReducer from './dataReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  user: userReducer,
  data : dataReducer
  // Add other reducers here as key-value pairs
});

export default rootReducer;
