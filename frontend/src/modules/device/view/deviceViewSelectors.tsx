import { createSelector } from 'reselect';

const selectRaw = (state) => state.device.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const deviceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default deviceViewSelectors;
