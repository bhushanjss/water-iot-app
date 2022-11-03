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
import actions from 'src/modules/person/list/personListActions';
import selectors from 'src/modules/person/list/personListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import personEnumerators from 'src/modules/person/personEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import AddressAutocompleteFormItem from 'src/view/address/autocomplete/AddressAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFilterSchemas.string(
    i18n('entities.person.fields.firstName'),
  ),
  lastName: yupFilterSchemas.string(
    i18n('entities.person.fields.lastName'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.person.fields.gender'),
  ),
  birthdateRange: yupFilterSchemas.dateRange(
    i18n('entities.person.fields.birthdateRange'),
  ),
  phoneNumber: yupFilterSchemas.string(
    i18n('entities.person.fields.phoneNumber'),
  ),
  location: yupFilterSchemas.relationToOne(
    i18n('entities.person.fields.location'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.person.fields.email'),
  ),
  label: yupFilterSchemas.string(
    i18n('entities.person.fields.label'),
  ),
  user: yupFilterSchemas.relationToOne(
    i18n('entities.person.fields.user'),
  ),
});

const emptyValues = {
  firstName: null,
  lastName: null,
  gender: null,
  birthdateRange: [],
  phoneNumber: null,
  location: null,
  email: null,
  label: null,
  user: null,
}

const previewRenders = {
  firstName: {
    label: i18n('entities.person.fields.firstName'),
    render: filterRenders.generic(),
  },
  lastName: {
    label: i18n('entities.person.fields.lastName'),
    render: filterRenders.generic(),
  },
  gender: {
    label: i18n('entities.person.fields.gender'),
    render: filterRenders.enumerator('entities.person.enumerators.gender',),
  },
  birthdateRange: {
    label: i18n('entities.person.fields.birthdateRange'),
    render: filterRenders.dateRange(),
  },
  phoneNumber: {
    label: i18n('entities.person.fields.phoneNumber'),
    render: filterRenders.generic(),
  },
  location: {
      label: i18n('entities.person.fields.location'),
      render: filterRenders.relationToOne(),
    },
  email: {
    label: i18n('entities.person.fields.email'),
    render: filterRenders.generic(),
  },
  label: {
    label: i18n('entities.person.fields.label'),
    render: filterRenders.generic(),
  },
  user: {
    label: i18n('entities.person.fields.user'),
    render: filterRenders.relationToOne(),
  },
}

function PersonListFilter(props) {
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
                  <InputFormItem
                    name="firstName"
                    label={i18n('entities.person.fields.firstName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="lastName"
                    label={i18n('entities.person.fields.lastName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="gender"
                    label={i18n('entities.person.fields.gender')}
                    options={personEnumerators.gender.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.person.enumerators.gender.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="birthdateRange"
                    label={i18n('entities.person.fields.birthdateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="phoneNumber"
                    label={i18n('entities.person.fields.phoneNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <AddressAutocompleteFormItem  
                    name="location"
                    label={i18n('entities.person.fields.location')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="email"
                    label={i18n('entities.person.fields.email')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="label"
                    label={i18n('entities.person.fields.label')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem  
                    name="user"
                    label={i18n('entities.person.fields.user')}        
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

export default PersonListFilter;