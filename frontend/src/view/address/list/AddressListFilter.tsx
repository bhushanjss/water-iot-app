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
import actions from 'src/modules/address/list/addressListActions';
import selectors from 'src/modules/address/list/addressListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';

const schema = yup.object().shape({
  address1: yupFilterSchemas.string(
    i18n('entities.address.fields.address1'),
  ),
  address2: yupFilterSchemas.string(
    i18n('entities.address.fields.address2'),
  ),
  city: yupFilterSchemas.string(
    i18n('entities.address.fields.city'),
  ),
  tehsil: yupFilterSchemas.string(
    i18n('entities.address.fields.tehsil'),
  ),
  district: yupFilterSchemas.string(
    i18n('entities.address.fields.district'),
  ),
  state: yupFilterSchemas.string(
    i18n('entities.address.fields.state'),
  ),
  coords: yupFilterSchemas.string(
    i18n('entities.address.fields.coords'),
  ),
  pinRange: yupFilterSchemas.integerRange(
    i18n('entities.address.fields.pinRange'),
  ),
  label: yupFilterSchemas.string(
    i18n('entities.address.fields.label'),
  ),
  user: yupFilterSchemas.relationToOne(
    i18n('entities.address.fields.user'),
  ),
});

const emptyValues = {
  address1: null,
  address2: null,
  city: null,
  tehsil: null,
  district: null,
  state: null,
  coords: null,
  pinRange: [],
  label: null,
  user: null,
}

const previewRenders = {
  address1: {
    label: i18n('entities.address.fields.address1'),
    render: filterRenders.generic(),
  },
  address2: {
    label: i18n('entities.address.fields.address2'),
    render: filterRenders.generic(),
  },
  city: {
    label: i18n('entities.address.fields.city'),
    render: filterRenders.generic(),
  },
  tehsil: {
    label: i18n('entities.address.fields.tehsil'),
    render: filterRenders.generic(),
  },
  district: {
    label: i18n('entities.address.fields.district'),
    render: filterRenders.generic(),
  },
  state: {
    label: i18n('entities.address.fields.state'),
    render: filterRenders.generic(),
  },
  coords: {
    label: i18n('entities.address.fields.coords'),
    render: filterRenders.generic(),
  },
  pinRange: {
    label: i18n('entities.address.fields.pinRange'),
    render: filterRenders.range(),
  },
  label: {
    label: i18n('entities.address.fields.label'),
    render: filterRenders.generic(),
  },
  user: {
    label: i18n('entities.address.fields.user'),
    render: filterRenders.relationToOne(),
  },
}

function AddressListFilter(props) {
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
                    name="address1"
                    label={i18n('entities.address.fields.address1')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="address2"
                    label={i18n('entities.address.fields.address2')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="city"
                    label={i18n('entities.address.fields.city')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="tehsil"
                    label={i18n('entities.address.fields.tehsil')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="district"
                    label={i18n('entities.address.fields.district')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="state"
                    label={i18n('entities.address.fields.state')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="coords"
                    label={i18n('entities.address.fields.coords')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="pinRange"
                    label={i18n('entities.address.fields.pinRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="label"
                    label={i18n('entities.address.fields.label')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem  
                    name="user"
                    label={i18n('entities.address.fields.user')}        
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

export default AddressListFilter;