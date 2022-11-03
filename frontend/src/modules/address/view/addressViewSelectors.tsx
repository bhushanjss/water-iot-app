import { createSelector } from 'reselect';

const selectRaw = (state) => state.address.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const addressViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default addressViewSelectors;
