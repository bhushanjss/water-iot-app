import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/waterReading/list/waterReadingListActions';
import selectors from 'src/modules/waterReading/list/waterReadingListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import waterReadingEnumerators from 'src/modules/waterReading/waterReadingEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import DeviceAutocompleteFormItem from 'src/view/device/autocomplete/DeviceAutocompleteFormItem';
import AddressAutocompleteFormItem from "../../address/autocomplete/AddressAutocompleteFormItem";

const schema = yup.object().shape({
  user: yupFilterSchemas.relationToOne(
    i18n('entities.waterReading.fields.user'),
  ),
  device: yupFilterSchemas.relationToOne(
    i18n('entities.waterReading.fields.device'),
  ),
  location: yupFilterSchemas.relationToOne(
      i18n('entities.waterReading.fields.location'),
  ),
  dateTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.waterReading.fields.dateTimeRange'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.waterReading.fields.type'),
  ),
  source: yupFilterSchemas.enumerator(
    i18n('entities.waterReading.fields.source'),
  ),
  remark: yupFilterSchemas.string(
    i18n('entities.waterReading.fields.remark'),
  ),
  temperatureRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.temperatureRange'),
  ),
  pHRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.pHRange'),
  ),
  tdsRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.tdsRange'),
  ),
  conductivityRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.conductivityRange'),
  ),
  alkalinityRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.alkalinityRange'),
  ),
  hardnessRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.hardnessRange'),
  ),
  turbidityRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.turbidityRange'),
  ),
  oxygenRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.oxygenRange'),
  ),
  calciumRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.calciumRange'),
  ),
  magnesiumRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.magnesiumRange'),
  ),
  sodiumRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.sodiumRange'),
  ),
  potassiumRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.potassiumRange'),
  ),
  ironRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.ironRange'),
  ),
  chlorineRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.chlorineRange'),
  ),
  carbonateRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.carbonateRange'),
  ),
  bicarbonateRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.bicarbonateRange'),
  ),
  chlorideRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.chlorideRange'),
  ),
  sulphateRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.sulphateRange'),
  ),
  manganeseRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.manganeseRange'),
  ),
  nitrateRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.nitrateRange'),
  ),
  fluorideRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.fluorideRange'),
  ),
  silicateRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.silicateRange'),
  ),
  phosphateRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.phosphateRange'),
  ),
  arsenicRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.arsenicRange'),
  ),
  copperRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.copperRange'),
  ),
  cadmiumRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.cadmiumRange'),
  ),
  seleniumRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.seleniumRange'),
  ),
  mercuryRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.mercuryRange'),
  ),
  leadRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.leadRange'),
  ),
  zincRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.zincRange'),
  ),
  boronRange: yupFilterSchemas.decimalRange(
    i18n('entities.waterReading.fields.boronRange'),
  ),
});

const emptyValues = {
  user: null,
  device: null,
  location: null,
  dateTimeRange: [],
  type: null,
  source: null,
  remark: null,
  temperatureRange: [],
  pHRange: [],
  tdsRange: [],
  conductivityRange: [],
  alkalinityRange: [],
  hardnessRange: [],
  turbidityRange: [],
  oxygenRange: [],
  calciumRange: [],
  magnesiumRange: [],
  sodiumRange: [],
  potassiumRange: [],
  ironRange: [],
  chlorineRange: [],
  carbonateRange: [],
  bicarbonateRange: [],
  chlorideRange: [],
  sulphateRange: [],
  manganeseRange: [],
  nitrateRange: [],
  fluorideRange: [],
  silicateRange: [],
  phosphateRange: [],
  arsenicRange: [],
  copperRange: [],
  cadmiumRange: [],
  seleniumRange: [],
  mercuryRange: [],
  leadRange: [],
  zincRange: [],
  boronRange: [],
}

const previewRenders = {
  user: {
    label: i18n('entities.waterReading.fields.user'),
    render: filterRenders.relationToOne(),
  },
  device: {
      label: i18n('entities.waterReading.fields.device'),
      render: filterRenders.relationToOne(),
    },
  location: {
    label: i18n('entities.waterReading.fields.location'),
    render: filterRenders.relationToOne(),
  },
  dateTimeRange: {
    label: i18n('entities.waterReading.fields.dateTimeRange'),
    render: filterRenders.datetimeRange(),
  },
  type: {
    label: i18n('entities.waterReading.fields.type'),
    render: filterRenders.enumerator('entities.waterReading.enumerators.type',),
  },
  source: {
    label: i18n('entities.waterReading.fields.source'),
    render: filterRenders.enumerator('entities.waterReading.enumerators.source',),
  },
  remark: {
    label: i18n('entities.waterReading.fields.remark'),
    render: filterRenders.generic(),
  },
  temperatureRange: {
    label: i18n('entities.waterReading.fields.temperatureRange'),
    render: filterRenders.decimalRange(),
  },
  pHRange: {
    label: i18n('entities.waterReading.fields.pHRange'),
    render: filterRenders.decimalRange(7),
  },
  tdsRange: {
    label: i18n('entities.waterReading.fields.tdsRange'),
    render: filterRenders.decimalRange(),
  },
  conductivityRange: {
    label: i18n('entities.waterReading.fields.conductivityRange'),
    render: filterRenders.decimalRange(),
  },
  alkalinityRange: {
    label: i18n('entities.waterReading.fields.alkalinityRange'),
    render: filterRenders.decimalRange(),
  },
  hardnessRange: {
    label: i18n('entities.waterReading.fields.hardnessRange'),
    render: filterRenders.decimalRange(),
  },
  turbidityRange: {
    label: i18n('entities.waterReading.fields.turbidityRange'),
    render: filterRenders.decimalRange(),
  },
  oxygenRange: {
    label: i18n('entities.waterReading.fields.oxygenRange'),
    render: filterRenders.decimalRange(),
  },
  calciumRange: {
    label: i18n('entities.waterReading.fields.calciumRange'),
    render: filterRenders.decimalRange(),
  },
  magnesiumRange: {
    label: i18n('entities.waterReading.fields.magnesiumRange'),
    render: filterRenders.decimalRange(),
  },
  sodiumRange: {
    label: i18n('entities.waterReading.fields.sodiumRange'),
    render: filterRenders.decimalRange(),
  },
  potassiumRange: {
    label: i18n('entities.waterReading.fields.potassiumRange'),
    render: filterRenders.decimalRange(),
  },
  ironRange: {
    label: i18n('entities.waterReading.fields.ironRange'),
    render: filterRenders.decimalRange(),
  },
  chlorineRange: {
    label: i18n('entities.waterReading.fields.chlorineRange'),
    render: filterRenders.decimalRange(),
  },
  carbonateRange: {
    label: i18n('entities.waterReading.fields.carbonateRange'),
    render: filterRenders.decimalRange(),
  },
  bicarbonateRange: {
    label: i18n('entities.waterReading.fields.bicarbonateRange'),
    render: filterRenders.decimalRange(),
  },
  chlorideRange: {
    label: i18n('entities.waterReading.fields.chlorideRange'),
    render: filterRenders.decimalRange(),
  },
  sulphateRange: {
    label: i18n('entities.waterReading.fields.sulphateRange'),
    render: filterRenders.decimalRange(),
  },
  manganeseRange: {
    label: i18n('entities.waterReading.fields.manganeseRange'),
    render: filterRenders.decimalRange(),
  },
  nitrateRange: {
    label: i18n('entities.waterReading.fields.nitrateRange'),
    render: filterRenders.decimalRange(),
  },
  fluorideRange: {
    label: i18n('entities.waterReading.fields.fluorideRange'),
    render: filterRenders.decimalRange(),
  },
  silicateRange: {
    label: i18n('entities.waterReading.fields.silicateRange'),
    render: filterRenders.decimalRange(),
  },
  phosphateRange: {
    label: i18n('entities.waterReading.fields.phosphateRange'),
    render: filterRenders.decimalRange(),
  },
  arsenicRange: {
    label: i18n('entities.waterReading.fields.arsenicRange'),
    render: filterRenders.decimalRange(),
  },
  copperRange: {
    label: i18n('entities.waterReading.fields.copperRange'),
    render: filterRenders.decimalRange(),
  },
  cadmiumRange: {
    label: i18n('entities.waterReading.fields.cadmiumRange'),
    render: filterRenders.decimalRange(),
  },
  seleniumRange: {
    label: i18n('entities.waterReading.fields.seleniumRange'),
    render: filterRenders.decimalRange(),
  },
  mercuryRange: {
    label: i18n('entities.waterReading.fields.mercuryRange'),
    render: filterRenders.decimalRange(),
  },
  leadRange: {
    label: i18n('entities.waterReading.fields.leadRange'),
    render: filterRenders.decimalRange(),
  },
  zincRange: {
    label: i18n('entities.waterReading.fields.zincRange'),
    render: filterRenders.decimalRange(),
  },
  boronRange: {
    label: i18n('entities.waterReading.fields.boronRange'),
    render: filterRenders.decimalRange(),
  },
}

function WaterReadingListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem  
                    name="user"
                    label={i18n('entities.waterReading.fields.user')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DeviceAutocompleteFormItem  
                    name="device"
                    label={i18n('entities.waterReading.fields.device')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="dateTimeRange"
                    label={i18n('entities.waterReading.fields.dateTimeRange')}    
                    showTime
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="remark"
                    label={i18n('entities.waterReading.fields.remark')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="temperatureRange"
                    label={i18n('entities.waterReading.fields.temperatureRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="pHRange"
                    label={i18n('entities.waterReading.fields.pHRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="tdsRange"
                    label={i18n('entities.waterReading.fields.tdsRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="conductivityRange"
                    label={i18n('entities.waterReading.fields.conductivityRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="alkalinityRange"
                    label={i18n('entities.waterReading.fields.alkalinityRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="hardnessRange"
                    label={i18n('entities.waterReading.fields.hardnessRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="turbidityRange"
                    label={i18n('entities.waterReading.fields.turbidityRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="oxygenRange"
                    label={i18n('entities.waterReading.fields.oxygenRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="calciumRange"
                    label={i18n('entities.waterReading.fields.calciumRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="magnesiumRange"
                    label={i18n('entities.waterReading.fields.magnesiumRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="sodiumRange"
                    label={i18n('entities.waterReading.fields.sodiumRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="potassiumRange"
                    label={i18n('entities.waterReading.fields.potassiumRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="ironRange"
                    label={i18n('entities.waterReading.fields.ironRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="chlorineRange"
                    label={i18n('entities.waterReading.fields.chlorineRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="carbonateRange"
                    label={i18n('entities.waterReading.fields.carbonateRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="bicarbonateRange"
                    label={i18n('entities.waterReading.fields.bicarbonateRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="chlorideRange"
                    label={i18n('entities.waterReading.fields.chlorideRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="sulphateRange"
                    label={i18n('entities.waterReading.fields.sulphateRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="manganeseRange"
                    label={i18n('entities.waterReading.fields.manganeseRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="nitrateRange"
                    label={i18n('entities.waterReading.fields.nitrateRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="fluorideRange"
                    label={i18n('entities.waterReading.fields.fluorideRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="silicateRange"
                    label={i18n('entities.waterReading.fields.silicateRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="phosphateRange"
                    label={i18n('entities.waterReading.fields.phosphateRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="arsenicRange"
                    label={i18n('entities.waterReading.fields.arsenicRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="copperRange"
                    label={i18n('entities.waterReading.fields.copperRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="cadmiumRange"
                    label={i18n('entities.waterReading.fields.cadmiumRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="seleniumRange"
                    label={i18n('entities.waterReading.fields.seleniumRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="mercuryRange"
                    label={i18n('entities.waterReading.fields.mercuryRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="leadRange"
                    label={i18n('entities.waterReading.fields.leadRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="zincRange"
                    label={i18n('entities.waterReading.fields.zincRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="boronRange"
                    label={i18n('entities.waterReading.fields.boronRange')}      
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default WaterReadingListFilter;