import listActions from 'src/modules/device/list/deviceListActions';
import DeviceService from 'src/modules/device/deviceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DEVICE_DESTROY';

const deviceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: deviceDestroyActions.DESTROY_STARTED,
      });

      await DeviceService.destroyAll([id]);

      dispatch({
        type: deviceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.device.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/device');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: deviceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: deviceDestroyActions.DESTROY_ALL_STARTED,
      });

      await DeviceService.destroyAll(ids);

      dispatch({
        type: deviceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.device.destroyAll.success'),
      );

      getHistory().push('/device');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: deviceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default deviceDestroyActions;
