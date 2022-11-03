import AddressService from 'src/modules/address/addressService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ADDRESS_FORM';

const addressFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: addressFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AddressService.find(id);
      }

      dispatch({
        type: addressFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: addressFormActions.INIT_ERROR,
      });

      getHistory().push('/address');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: addressFormActions.CREATE_STARTED,
      });

      await AddressService.create(values);

      dispatch({
        type: addressFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.address.create.success'),
      );

      getHistory().push('/address');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: addressFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: addressFormActions.UPDATE_STARTED,
      });

      await AddressService.update(id, values);

      dispatch({
        type: addressFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.address.update.success'),
      );

      getHistory().push('/address');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: addressFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default addressFormActions;
