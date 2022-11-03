import list from 'src/modules/device/list/deviceListReducers';
import form from 'src/modules/device/form/deviceFormReducers';
import view from 'src/modules/device/view/deviceViewReducers';
import destroy from 'src/modules/device/destroy/deviceDestroyReducers';
import importerReducer from 'src/modules/device/importer/deviceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
