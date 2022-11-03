import WaterReadingService from 'src/modules/waterReading/waterReadingService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'WATERREADING_VIEW';

const waterReadingViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: waterReadingViewActions.FIND_STARTED,
      });

      const record = await WaterReadingService.find(id);

      dispatch({
        type: waterReadingViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: waterReadingViewActions.FIND_ERROR,
      });

      getHistory().push('/water-reading');
    }
  },
};

export default waterReadingViewActions;
