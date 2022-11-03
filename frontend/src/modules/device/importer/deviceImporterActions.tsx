import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/device/importer/deviceImporterSelectors';
import DeviceService from 'src/modules/device/deviceService';
import fields from 'src/modules/device/importer/deviceImporterFields';
import { i18n } from 'src/i18n';

const deviceImporterActions = importerActions(
  'DEVICE_IMPORTER',
  selectors,
  DeviceService.import,
  fields,
  i18n('entities.device.importer.fileName'),
);

export default deviceImporterActions;