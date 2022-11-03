import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.device.fields.id'),
  },
  {
    name: 'label',
    label: i18n('entities.device.fields.label'),
  },
  {
    name: 'deviceId',
    label: i18n('entities.device.fields.deviceId'),
  },
  {
    name: 'serialNumber',
    label: i18n('entities.device.fields.serialNumber'),
  },
  {
    name: 'user',
    label: i18n('entities.device.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'version',
    label: i18n('entities.device.fields.version'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.device.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.device.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
