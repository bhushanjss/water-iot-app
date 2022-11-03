import { createSelector } from 'reselect';

const selectRaw = (state) => state.address.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const addressDestroySelectors = {
  selectLoading,
};

export default addressDestroySelectors;
