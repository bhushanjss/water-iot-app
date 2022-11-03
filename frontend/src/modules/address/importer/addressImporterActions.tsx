import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/address/importer/addressImporterSelectors';
import AddressService from 'src/modules/address/addressService';
import fields from 'src/modules/address/importer/addressImporterFields';
import { i18n } from 'src/i18n';

const addressImporterActions = importerActions(
  'ADDRESS_IMPORTER',
  selectors,
  AddressService.import,
  fields,
  i18n('entities.address.importer.fileName'),
);

export default addressImporterActions;