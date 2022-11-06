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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import addressEnumerators from 'src/modules/address/addressEnumerators';
import SelectFormItem from "../../shared/form/items/SelectFormItem";
import SelectCascadeFormItem from "../../shared/form/items/SelectCascadeFormItem";

const schema = yup.object().shape({
  address1: yupFormSchemas.string(
    i18n('entities.address.fields.address1'),
    {},
  ),
  address2: yupFormSchemas.string(
    i18n('entities.address.fields.address2'),
    {},
  ),
  city: yupFormSchemas.string(
    i18n('entities.address.fields.city'),
    {},
  ),
  tehsil: yupFormSchemas.string(
    i18n('entities.address.fields.tehsil'),
    {},
  ),
  district: yupFormSchemas.string(
    i18n('entities.address.fields.district'),
    {
      "required": true
    },
  ),
  state: yupFormSchemas.string(
    i18n('entities.address.fields.state'),
    {
      "required": true
    },
  ),
  coords: yupFormSchemas.string(
    i18n('entities.address.fields.coords'),
    {},
  ),
  pin: yupFormSchemas.integer(
    i18n('entities.address.fields.pin'),
    {
      "min": 100000
    },
  ),
  label: yupFormSchemas.string(
    i18n('entities.address.fields.label'),
    {},
  ),
  user: yupFormSchemas.relationToOne(
    i18n('entities.address.fields.user'),
    {},
  ),
});

function AddressForm(props) {
  const [stateSelected, setStateSelected] = useState("Jammu and Kashmir");

  const [districts, setDistricts] = useState([{
    "id": "Srinagar",
    "name": "Srinagar",
    "coords": "34.1069229,74.6663258"
  }]);

  const [coord, setCoord] = useState("0,0");

  const [initialValues] = useState(() => {
    const record = props.record || {};
    if(record) {
      const selectedState = addressEnumerators.state.find( (item) => item.state === record.state)
      const dists:any = selectedState?.districtData;
      setDistricts(dists ||[]);
    }

    return {
      address1: record.address1,
      address2: record.address2,
      city: record.city,
      tehsil: record.tehsil,
      district: record.district,
      state: record.state,
      coords: record.coords,
      pin: record.pin,
      label: record.label,
      user: record.user,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    let recordValues = values;
    if(!values.label) {
      const { state, district, tehsil, city } = values;
      let label = city;
      label = `${label}, ${district}, ${state}`;
      recordValues = {...values, label};
    }
    props.onSubmit(props.record?.id, recordValues);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const selectDistricts = (data) => {
    const state = data.value || "Delhi";
    const selectedState = addressEnumerators.state.find( (item) => item.state === state)
    const dists:any = selectedState?.districtData;
    setDistricts(dists);
  }

  const selectCoord = (data) => {
    const item: any = districts.find( (item) => item.id === data.value)
    setCoord(item.coords)
  }

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                  name="label"
                  label={i18n('entities.address.fields.label')}
                  required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address1"
                label={i18n('entities.address.fields.address1')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address2"
                label={i18n('entities.address.fields.address2')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="city"
                label={i18n('entities.address.fields.city')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="tehsil"
                label={i18n('entities.address.fields.tehsil')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectCascadeFormItem
                  name="state"
                  label={i18n('entities.address.fields.state')}
                  options={addressEnumerators.state.sort( (a,b) => {
                    if(a.state < b.state) return -1
                    else if(a.state > b.state) return 1
                    else return 0
                  }).map((item) => ({
                    value: item.state,
                    label: item.state,
                  }))}
                  callAfter={selectDistricts}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectCascadeFormItem
                  name="district"
                  label={i18n('entities.address.fields.district')}
                  options={districts.sort( (a,b) => {
                    if( a && b ) {
                      if(a.id < b.id) return -1
                      else if(a.id > b.id) return 1
                      else return 0;
                    }
                    return 0;
                  }).map(
                      (item) => ({
                        value: item.id,
                        label: item.name,
                      }),
                  )}
                  required={true}
                  callAfter={selectCoord}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="pin"
                label={i18n('entities.address.fields.pin')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                  name="coords"
                  label={i18n('entities.address.fields.coords')}
                  required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <UserAutocompleteFormItem
                name="user"
                label={i18n('entities.address.fields.user')}
                required={false}
                showCreate={!props.modal}
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

export default AddressForm;
