import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import waterReadingEnumerators from 'src/modules/waterReading/waterReadingEnumerators';
import moment from 'moment';

export default [
  {
    name: 'user',
    label: i18n('entities.waterReading.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.waterReading.fields.user'),
      {},
    ),
  },
  {
    name: 'device',
    label: i18n('entities.waterReading.fields.device'),
    schema: schemas.relationToOne(
      i18n('entities.waterReading.fields.device'),
      {},
    ),
  },
  {
    name: 'dateTime',
    label: i18n('entities.waterReading.fields.dateTime'),
    schema: schemas.datetime(
      i18n('entities.waterReading.fields.dateTime'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'type',
    label: i18n('entities.waterReading.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.waterReading.fields.type'),
      {
        "options": waterReadingEnumerators.type
      },
    ),
  },
  {
    name: 'source',
    label: i18n('entities.waterReading.fields.source'),
    schema: schemas.enumerator(
      i18n('entities.waterReading.fields.source'),
      {
        "options": waterReadingEnumerators.source
      },
    ),
  },
  {
    name: 'remark',
    label: i18n('entities.waterReading.fields.remark'),
    schema: schemas.string(
      i18n('entities.waterReading.fields.remark'),
      {},
    ),
  },
  {
    name: 'temperature',
    label: i18n('entities.waterReading.fields.temperature'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.temperature'),
      {
        "min": -5,
        "max": 100
      },
    ),
  },
  {
    name: 'pH',
    label: i18n('entities.waterReading.fields.pH'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.pH'),
      {
        "scale": 7,
        "min": 0,
        "max": 14
      },
    ),
  },
  {
    name: 'tds',
    label: i18n('entities.waterReading.fields.tds'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.tds'),
      {},
    ),
  },
  {
    name: 'conductivity',
    label: i18n('entities.waterReading.fields.conductivity'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.conductivity'),
      {},
    ),
  },
  {
    name: 'alkalinity',
    label: i18n('entities.waterReading.fields.alkalinity'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.alkalinity'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'hardness',
    label: i18n('entities.waterReading.fields.hardness'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.hardness'),
      {},
    ),
  },
  {
    name: 'turbidity',
    label: i18n('entities.waterReading.fields.turbidity'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.turbidity'),
      {
        "min": 0,
        "max": 1000
      },
    ),
  },
  {
    name: 'oxygen',
    label: i18n('entities.waterReading.fields.oxygen'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.oxygen'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'calcium',
    label: i18n('entities.waterReading.fields.calcium'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.calcium'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'magnesium',
    label: i18n('entities.waterReading.fields.magnesium'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.magnesium'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'sodium',
    label: i18n('entities.waterReading.fields.sodium'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.sodium'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'potassium',
    label: i18n('entities.waterReading.fields.potassium'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.potassium'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'iron',
    label: i18n('entities.waterReading.fields.iron'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.iron'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'chlorine',
    label: i18n('entities.waterReading.fields.chlorine'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.chlorine'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'carbonate',
    label: i18n('entities.waterReading.fields.carbonate'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.carbonate'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'bicarbonate',
    label: i18n('entities.waterReading.fields.bicarbonate'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.bicarbonate'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'chloride',
    label: i18n('entities.waterReading.fields.chloride'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.chloride'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'sulphate',
    label: i18n('entities.waterReading.fields.sulphate'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.sulphate'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'manganese',
    label: i18n('entities.waterReading.fields.manganese'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.manganese'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'nitrate',
    label: i18n('entities.waterReading.fields.nitrate'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.nitrate'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'fluoride',
    label: i18n('entities.waterReading.fields.fluoride'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.fluoride'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'silicate',
    label: i18n('entities.waterReading.fields.silicate'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.silicate'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'phosphate',
    label: i18n('entities.waterReading.fields.phosphate'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.phosphate'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'arsenic',
    label: i18n('entities.waterReading.fields.arsenic'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.arsenic'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'copper',
    label: i18n('entities.waterReading.fields.copper'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.copper'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'cadmium',
    label: i18n('entities.waterReading.fields.cadmium'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.cadmium'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'selenium',
    label: i18n('entities.waterReading.fields.selenium'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.selenium'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'mercury',
    label: i18n('entities.waterReading.fields.mercury'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.mercury'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'lead',
    label: i18n('entities.waterReading.fields.lead'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.lead'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'zinc',
    label: i18n('entities.waterReading.fields.zinc'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.zinc'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'boron',
    label: i18n('entities.waterReading.fields.boron'),
    schema: schemas.decimal(
      i18n('entities.waterReading.fields.boron'),
      {
        "min": 0
      },
    ),
  },
];