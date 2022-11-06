import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import waterReadingEnumerators from 'src/modules/waterReading/waterReadingEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import DeviceAutocompleteFormItem from 'src/view/device/autocomplete/DeviceAutocompleteFormItem';
import AddressAutocompleteFormItem from "../../address/autocomplete/AddressAutocompleteFormItem";

const schema = yup.object().shape({
  user: yupFormSchemas.relationToOne(
    i18n('entities.waterReading.fields.user'),
    {},
  ),
  device: yupFormSchemas.relationToOne(
    i18n('entities.waterReading.fields.device'),
    {},
  ),
  location: yupFormSchemas.relationToOne(
      i18n('entities.person.fields.location'),
      {},
  ),
  dateTime: yupFormSchemas.datetime(
    i18n('entities.waterReading.fields.dateTime'),
    {},
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.waterReading.fields.type'),
    {
      "options": waterReadingEnumerators.type
    },
  ),
  source: yupFormSchemas.enumerator(
    i18n('entities.waterReading.fields.source'),
    {
      "options": waterReadingEnumerators.source
    },
  ),
  remark: yupFormSchemas.string(
    i18n('entities.waterReading.fields.remark'),
    {},
  ),
  temperature: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.temperature'),
    {
      "min": -5,
      "max": 100
    },
  ),
  pH: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.pH'),
    {
      "scale": 7,
      "min": 0,
      "max": 14
    },
  ),
  tds: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.tds'),
    {},
  ),
  conductivity: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.conductivity'),
    {},
  ),
  alkalinity: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.alkalinity'),
    {
      "min": 0
    },
  ),
  hardness: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.hardness'),
    {},
  ),
  turbidity: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.turbidity'),
    {
      "min": 0,
      "max": 1000
    },
  ),
  oxygen: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.oxygen'),
    {
      "min": 0
    },
  ),
  calcium: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.calcium'),
    {
      "min": 0
    },
  ),
  magnesium: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.magnesium'),
    {
      "min": 0
    },
  ),
  sodium: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.sodium'),
    {
      "min": 0
    },
  ),
  potassium: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.potassium'),
    {
      "min": 0
    },
  ),
  iron: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.iron'),
    {
      "min": 0
    },
  ),
  chlorine: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.chlorine'),
    {
      "min": 0
    },
  ),
  carbonate: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.carbonate'),
    {
      "min": 0
    },
  ),
  bicarbonate: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.bicarbonate'),
    {
      "min": 0
    },
  ),
  chloride: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.chloride'),
    {
      "min": 0
    },
  ),
  sulphate: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.sulphate'),
    {
      "min": 0
    },
  ),
  manganese: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.manganese'),
    {
      "min": 0
    },
  ),
  nitrate: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.nitrate'),
    {
      "min": 0
    },
  ),
  fluoride: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.fluoride'),
    {
      "min": 0
    },
  ),
  silicate: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.silicate'),
    {
      "min": 0
    },
  ),
  phosphate: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.phosphate'),
    {
      "min": 0
    },
  ),
  arsenic: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.arsenic'),
    {
      "min": 0
    },
  ),
  copper: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.copper'),
    {
      "min": 0
    },
  ),
  cadmium: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.cadmium'),
    {
      "min": 0
    },
  ),
  selenium: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.selenium'),
    {
      "min": 0
    },
  ),
  mercury: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.mercury'),
    {
      "min": 0
    },
  ),
  lead: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.lead'),
    {
      "min": 0
    },
  ),
  zinc: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.zinc'),
    {
      "min": 0
    },
  ),
  boron: yupFormSchemas.decimal(
    i18n('entities.waterReading.fields.boron'),
    {
      "min": 0
    },
  ),
});

function WaterReadingForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      user: record.user,
      device: record.device,
      location: record.location,
      dateTime: record.dateTime ? moment(record.dateTime) : null,
      type: record.type,
      source: record.source,
      remark: record.remark,
      temperature: record.temperature,
      pH: record.pH,
      tds: record.tds,
      conductivity: record.conductivity,
      alkalinity: record.alkalinity,
      hardness: record.hardness,
      turbidity: record.turbidity,
      oxygen: record.oxygen,
      calcium: record.calcium,
      magnesium: record.magnesium,
      sodium: record.sodium,
      potassium: record.potassium,
      iron: record.iron,
      chlorine: record.chlorine,
      carbonate: record.carbonate,
      bicarbonate: record.bicarbonate,
      chloride: record.chloride,
      sulphate: record.sulphate,
      manganese: record.manganese,
      nitrate: record.nitrate,
      fluoride: record.fluoride,
      silicate: record.silicate,
      phosphate: record.phosphate,
      arsenic: record.arsenic,
      copper: record.copper,
      cadmium: record.cadmium,
      selenium: record.selenium,
      mercury: record.mercury,
      lead: record.lead,
      zinc: record.zinc,
      boron: record.boron,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <UserAutocompleteFormItem  
                name="user"
                label={i18n('entities.waterReading.fields.user')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DeviceAutocompleteFormItem  
                name="device"
                label={i18n('entities.waterReading.fields.device')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <AddressAutocompleteFormItem
                  name="location"
                  label={i18n('entities.waterReading.fields.location')}
                  required={false}
                  showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateTime"
                label={i18n('entities.waterReading.fields.dateTime')}
                required={false}
                showTime
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="type"
                label={i18n('entities.waterReading.fields.type')}
                options={waterReadingEnumerators.type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.waterReading.enumerators.type.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="source"
                label={i18n('entities.waterReading.fields.source')}
                options={waterReadingEnumerators.source.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.waterReading.enumerators.source.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="remark"
                label={i18n('entities.waterReading.fields.remark')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="temperature"
                label={i18n('entities.waterReading.fields.temperature')}
              hint={i18n('entities.waterReading.hints.temperature')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="pH"
                label={i18n('entities.waterReading.fields.pH')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="tds"
                label={i18n('entities.waterReading.fields.tds')}
              hint={i18n('entities.waterReading.hints.tds')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="conductivity"
                label={i18n('entities.waterReading.fields.conductivity')}
              hint={i18n('entities.waterReading.hints.conductivity')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="alkalinity"
                label={i18n('entities.waterReading.fields.alkalinity')}
              hint={i18n('entities.waterReading.hints.alkalinity')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="hardness"
                label={i18n('entities.waterReading.fields.hardness')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="turbidity"
                label={i18n('entities.waterReading.fields.turbidity')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="oxygen"
                label={i18n('entities.waterReading.fields.oxygen')}
              hint={i18n('entities.waterReading.hints.oxygen')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="calcium"
                label={i18n('entities.waterReading.fields.calcium')}
              hint={i18n('entities.waterReading.hints.calcium')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="magnesium"
                label={i18n('entities.waterReading.fields.magnesium')}
              hint={i18n('entities.waterReading.hints.magnesium')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="sodium"
                label={i18n('entities.waterReading.fields.sodium')}
              hint={i18n('entities.waterReading.hints.sodium')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="potassium"
                label={i18n('entities.waterReading.fields.potassium')}
              hint={i18n('entities.waterReading.hints.potassium')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="iron"
                label={i18n('entities.waterReading.fields.iron')}
              hint={i18n('entities.waterReading.hints.iron')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="chlorine"
                label={i18n('entities.waterReading.fields.chlorine')}
              hint={i18n('entities.waterReading.hints.chlorine')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="carbonate"
                label={i18n('entities.waterReading.fields.carbonate')}
              hint={i18n('entities.waterReading.hints.carbonate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="bicarbonate"
                label={i18n('entities.waterReading.fields.bicarbonate')}
              hint={i18n('entities.waterReading.hints.bicarbonate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="chloride"
                label={i18n('entities.waterReading.fields.chloride')}
              hint={i18n('entities.waterReading.hints.chloride')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="sulphate"
                label={i18n('entities.waterReading.fields.sulphate')}
              hint={i18n('entities.waterReading.hints.sulphate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="manganese"
                label={i18n('entities.waterReading.fields.manganese')}
              hint={i18n('entities.waterReading.hints.manganese')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="nitrate"
                label={i18n('entities.waterReading.fields.nitrate')}
              hint={i18n('entities.waterReading.hints.nitrate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="fluoride"
                label={i18n('entities.waterReading.fields.fluoride')}
              hint={i18n('entities.waterReading.hints.fluoride')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="silicate"
                label={i18n('entities.waterReading.fields.silicate')}
              hint={i18n('entities.waterReading.hints.silicate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="phosphate"
                label={i18n('entities.waterReading.fields.phosphate')}
              hint={i18n('entities.waterReading.hints.phosphate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="arsenic"
                label={i18n('entities.waterReading.fields.arsenic')}
              hint={i18n('entities.waterReading.hints.arsenic')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="copper"
                label={i18n('entities.waterReading.fields.copper')}
              hint={i18n('entities.waterReading.hints.copper')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="cadmium"
                label={i18n('entities.waterReading.fields.cadmium')}
              hint={i18n('entities.waterReading.hints.cadmium')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="selenium"
                label={i18n('entities.waterReading.fields.selenium')}
              hint={i18n('entities.waterReading.hints.selenium')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="mercury"
                label={i18n('entities.waterReading.fields.mercury')}
              hint={i18n('entities.waterReading.hints.mercury')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="lead"
                label={i18n('entities.waterReading.fields.lead')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="zinc"
                label={i18n('entities.waterReading.fields.zinc')}
              hint={i18n('entities.waterReading.hints.zinc')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="boron"
                label={i18n('entities.waterReading.fields.boron')}
              hint={i18n('entities.waterReading.hints.boron')}  
                required={false}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default WaterReadingForm;
