import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'address1',
    label: i18n('entities.address.fields.address1'),
    schema: schemas.string(
      i18n('entities.address.fields.address1'),
      {},
    ),
  },
  {
    name: 'address2',
    label: i18n('entities.address.fields.address2'),
    schema: schemas.string(
      i18n('entities.address.fields.address2'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.address.fields.city'),
    schema: schemas.string(
      i18n('entities.address.fields.city'),
      {},
    ),
  },
  {
    name: 'tehsil',
    label: i18n('entities.address.fields.tehsil'),
    schema: schemas.string(
      i18n('entities.address.fields.tehsil'),
      {},
    ),
  },
  {
    name: 'district',
    label: i18n('entities.address.fields.district'),
    schema: schemas.string(
      i18n('entities.address.fields.district'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'state',
    label: i18n('entities.address.fields.state'),
    schema: schemas.string(
      i18n('entities.address.fields.state'),
      {},
    ),
  },
  {
    name: 'coords',
    label: i18n('entities.address.fields.coords'),
    schema: schemas.string(
      i18n('entities.address.fields.coords'),
      {},
    ),
  },
  {
    name: 'pin',
    label: i18n('entities.address.fields.pin'),
    schema: schemas.integer(
      i18n('entities.address.fields.pin'),
      {
        "min": 100000
      },
    ),
  },
  {
    name: 'label',
    label: i18n('entities.address.fields.label'),
    schema: schemas.string(
      i18n('entities.address.fields.label'),
      {},
    ),
  },
  {
    name: 'user',
    label: i18n('entities.address.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.address.fields.user'),
      {},
    ),
  },
];