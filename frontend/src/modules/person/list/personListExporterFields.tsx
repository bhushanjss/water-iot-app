import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.person.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.person.fields.firstName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.person.fields.lastName'),
  },
  {
    name: 'gender',
    label: i18n('entities.person.fields.gender'),
  },
  {
    name: 'birthdate',
    label: i18n('entities.person.fields.birthdate'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.person.fields.phoneNumber'),
  },
  {
    name: 'location',
    label: i18n('entities.person.fields.location'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'email',
    label: i18n('entities.person.fields.email'),
  },
  {
    name: 'label',
    label: i18n('entities.person.fields.label'),
  },
  {
    name: 'user',
    label: i18n('entities.person.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.person.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.person.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
