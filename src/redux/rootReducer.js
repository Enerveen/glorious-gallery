import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import loadingReducer from './loadingReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  loading: loadingReducer,
  location: locationReducer,
});

export default rootReducer;
