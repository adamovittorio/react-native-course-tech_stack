import { combineReducers } from 'redux';

import LibraryReducers from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducers,
  selectedLibraryId: SelectionReducer
});
