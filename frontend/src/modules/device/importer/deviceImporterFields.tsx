import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'label',
    label: i18n('entities.device.fields.label'),
    schema: schemas.string(
      i18n('entities.device.fields.label'),
      {},
    ),
  },
  {
    name: 'deviceId',
    label: i18n('entities.device.fields.deviceId'),
    schema: schemas.string(
      i18n('entities.device.fields.deviceId'),
      {},
    ),
  },
  {
    name: 'serialNumber',
    label: i18n('entities.device.fields.serialNumber'),
    schema: schemas.string(
      i18n('entities.device.fields.serialNumber'),
      {},
    ),
  },
  {
    name: 'user',
    label: i18n('entities.device.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.device.fields.user'),
      {},
    ),
  },
  {
    name: 'version',
    label: i18n('entities.device.fields.version'),
    schema: schemas.string(
      i18n('entities.device.fields.version'),
      {},
    ),
  },
];