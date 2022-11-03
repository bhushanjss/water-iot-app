import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.waterReading.fields.id'),
  },
  {
    name: 'user',
    label: i18n('entities.waterReading.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'device',
    label: i18n('entities.waterReading.fields.device'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dateTime',
    label: i18n('entities.waterReading.fields.dateTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'type',
    label: i18n('entities.waterReading.fields.type'),
  },
  {
    name: 'source',
    label: i18n('entities.waterReading.fields.source'),
  },
  {
    name: 'remark',
    label: i18n('entities.waterReading.fields.remark'),
  },
  {
    name: 'temperature',
    label: i18n('entities.waterReading.fields.temperature'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'pH',
    label: i18n('entities.waterReading.fields.pH'),
    render: exporterRenders.decimal(7),
  },
  {
    name: 'tds',
    label: i18n('entities.waterReading.fields.tds'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'conductivity',
    label: i18n('entities.waterReading.fields.conductivity'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'alkalinity',
    label: i18n('entities.waterReading.fields.alkalinity'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'hardness',
    label: i18n('entities.waterReading.fields.hardness'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'turbidity',
    label: i18n('entities.waterReading.fields.turbidity'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'oxygen',
    label: i18n('entities.waterReading.fields.oxygen'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'calcium',
    label: i18n('entities.waterReading.fields.calcium'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'magnesium',
    label: i18n('entities.waterReading.fields.magnesium'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'sodium',
    label: i18n('entities.waterReading.fields.sodium'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'potassium',
    label: i18n('entities.waterReading.fields.potassium'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'iron',
    label: i18n('entities.waterReading.fields.iron'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'chlorine',
    label: i18n('entities.waterReading.fields.chlorine'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'carbonate',
    label: i18n('entities.waterReading.fields.carbonate'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'bicarbonate',
    label: i18n('entities.waterReading.fields.bicarbonate'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'chloride',
    label: i18n('entities.waterReading.fields.chloride'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'sulphate',
    label: i18n('entities.waterReading.fields.sulphate'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'manganese',
    label: i18n('entities.waterReading.fields.manganese'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'nitrate',
    label: i18n('entities.waterReading.fields.nitrate'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'fluoride',
    label: i18n('entities.waterReading.fields.fluoride'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'silicate',
    label: i18n('entities.waterReading.fields.silicate'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'phosphate',
    label: i18n('entities.waterReading.fields.phosphate'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'arsenic',
    label: i18n('entities.waterReading.fields.arsenic'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'copper',
    label: i18n('entities.waterReading.fields.copper'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'cadmium',
    label: i18n('entities.waterReading.fields.cadmium'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'selenium',
    label: i18n('entities.waterReading.fields.selenium'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'mercury',
    label: i18n('entities.waterReading.fields.mercury'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'lead',
    label: i18n('entities.waterReading.fields.lead'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'zinc',
    label: i18n('entities.waterReading.fields.zinc'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'boron',
    label: i18n('entities.waterReading.fields.boron'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.waterReading.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.waterReading.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
