import { createSelector } from 'reselect';

const selectRaw = (state) => state.waterReading.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const waterReadingViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default waterReadingViewSelectors;
