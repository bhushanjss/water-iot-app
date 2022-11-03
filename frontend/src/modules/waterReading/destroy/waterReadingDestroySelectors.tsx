import { createSelector } from 'reselect';

const selectRaw = (state) => state.waterReading.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const waterReadingDestroySelectors = {
  selectLoading,
};

export default waterReadingDestroySelectors;
