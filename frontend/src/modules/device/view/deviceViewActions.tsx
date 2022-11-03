import DeviceService from 'src/modules/device/deviceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DEVICE_VIEW';

const deviceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: deviceViewActions.FIND_STARTED,
      });

      const record = await DeviceService.find(id);

      dispatch({
        type: deviceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deviceViewActions.FIND_ERROR,
      });

      getHistory().push('/device');
    }
  },
};

export default deviceViewActions;
