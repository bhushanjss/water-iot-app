import list from 'src/modules/address/list/addressListReducers';
import form from 'src/modules/address/form/addressFormReducers';
import view from 'src/modules/address/view/addressViewReducers';
import destroy from 'src/modules/address/destroy/addressDestroyReducers';
import importerReducer from 'src/modules/address/importer/addressImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
