import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import personEnumerators from 'src/modules/person/personEnumerators';
import moment from 'moment';

export default [
  {
    name: 'firstName',
    label: i18n('entities.person.fields.firstName'),
    schema: schemas.string(
      i18n('entities.person.fields.firstName'),
      {
        "required": true,
        "min": 2
      },
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.person.fields.lastName'),
    schema: schemas.string(
      i18n('entities.person.fields.lastName'),
      {
        "required": true,
        "min": 2
      },
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.person.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.person.fields.gender'),
      {
        "required": true,
        "options": personEnumerators.gender
      },
    ),
  },
  {
    name: 'birthdate',
    label: i18n('entities.person.fields.birthdate'),
    schema: schemas.date(
      i18n('entities.person.fields.birthdate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.person.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.person.fields.phoneNumber'),
      {},
    ),
  },
  {
    name: 'location',
    label: i18n('entities.person.fields.location'),
    schema: schemas.relationToOne(
      i18n('entities.person.fields.location'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.person.fields.email'),
    schema: schemas.string(
      i18n('entities.person.fields.email'),
      {},
    ),
  },
  {
    name: 'label',
    label: i18n('entities.person.fields.label'),
    schema: schemas.string(
      i18n('entities.person.fields.label'),
      {},
    ),
  },
  {
    name: 'user',
    label: i18n('entities.person.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.person.fields.user'),
      {},
    ),
  },
];