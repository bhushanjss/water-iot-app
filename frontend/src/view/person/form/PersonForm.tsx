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
import personEnumerators from 'src/modules/person/personEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import AddressAutocompleteFormItem from 'src/view/address/autocomplete/AddressAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('entities.person.fields.firstName'),
    {
      "required": true,
      "min": 2
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.person.fields.lastName'),
    {
      "required": true,
      "min": 2
    },
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.person.fields.gender'),
    {
      "required": true,
      "options": personEnumerators.gender
    },
  ),
  birthdate: yupFormSchemas.date(
    i18n('entities.person.fields.birthdate'),
    {},
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('entities.person.fields.phoneNumber'),
    {},
  ),
  location: yupFormSchemas.relationToOne(
    i18n('entities.person.fields.location'),
    {},
  ),
  email: yupFormSchemas.string(
    i18n('entities.person.fields.email'),
    {},
  ),
  label: yupFormSchemas.string(
    i18n('entities.person.fields.label'),
    {},
  ),
  user: yupFormSchemas.relationToOne(
    i18n('entities.person.fields.user'),
    {},
  ),
});

function PersonForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      gender: record.gender,
      birthdate: record.birthdate ? moment(record.birthdate, 'YYYY-MM-DD') : null,
      phoneNumber: record.phoneNumber,
      location: record.location,
      email: record.email,
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
              <InputFormItem
                name="firstName"
                label={i18n('entities.person.fields.firstName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('entities.person.fields.lastName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
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
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="birthdate"
                label={i18n('entities.person.fields.birthdate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="phoneNumber"
                label={i18n('entities.person.fields.phoneNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <AddressAutocompleteFormItem  
                name="location"
                label={i18n('entities.person.fields.location')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="email"
                label={i18n('entities.person.fields.email')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="label"
                label={i18n('entities.person.fields.label')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <UserAutocompleteFormItem  
                name="user"
                label={i18n('entities.person.fields.user')}
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

export default PersonForm;
