import list from 'src/modules/waterReading/list/waterReadingListReducers';
import form from 'src/modules/waterReading/form/waterReadingFormReducers';
import view from 'src/modules/waterReading/view/waterReadingViewReducers';
import destroy from 'src/modules/waterReading/destroy/waterReadingDestroyReducers';
import importerReducer from 'src/modules/waterReading/importer/waterReadingImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
