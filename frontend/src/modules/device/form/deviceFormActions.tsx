import DeviceService from 'src/modules/device/deviceService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DEVICE_FORM';

const deviceFormActions = {
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
        type: deviceFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DeviceService.find(id);
      }

      dispatch({
        type: deviceFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deviceFormActions.INIT_ERROR,
      });

      getHistory().push('/device');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: deviceFormActions.CREATE_STARTED,
      });

      await DeviceService.create(values);

      dispatch({
        type: deviceFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.device.create.success'),
      );

      getHistory().push('/device');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deviceFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: deviceFormActions.UPDATE_STARTED,
      });

      await DeviceService.update(id, values);

      dispatch({
        type: deviceFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.device.update.success'),
      );

      getHistory().push('/device');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deviceFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default deviceFormActions;
