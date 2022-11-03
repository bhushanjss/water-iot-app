import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.address.fields.id'),
  },
  {
    name: 'address1',
    label: i18n('entities.address.fields.address1'),
  },
  {
    name: 'address2',
    label: i18n('entities.address.fields.address2'),
  },
  {
    name: 'city',
    label: i18n('entities.address.fields.city'),
  },
  {
    name: 'tehsil',
    label: i18n('entities.address.fields.tehsil'),
  },
  {
    name: 'district',
    label: i18n('entities.address.fields.district'),
  },
  {
    name: 'state',
    label: i18n('entities.address.fields.state'),
  },
  {
    name: 'coords',
    label: i18n('entities.address.fields.coords'),
  },
  {
    name: 'pin',
    label: i18n('entities.address.fields.pin'),
  },
  {
    name: 'label',
    label: i18n('entities.address.fields.label'),
  },
  {
    name: 'user',
    label: i18n('entities.address.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.address.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.address.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
