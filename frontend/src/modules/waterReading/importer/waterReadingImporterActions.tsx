import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/waterReading/importer/waterReadingImporterSelectors';
import WaterReadingService from 'src/modules/waterReading/waterReadingService';
import fields from 'src/modules/waterReading/importer/waterReadingImporterFields';
import { i18n } from 'src/i18n';

const waterReadingImporterActions = importerActions(
  'WATERREADING_IMPORTER',
  selectors,
  WaterReadingService.import,
  fields,
  i18n('entities.waterReading.importer.fileName'),
);

export default waterReadingImporterActions;