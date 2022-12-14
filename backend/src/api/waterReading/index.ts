export default (app) => {
  app.post(
    `/tenant/:tenantId/water-reading`,
    require('./waterReadingCreate').default,
  );
  app.put(
    `/tenant/:tenantId/water-reading/:id`,
    require('./waterReadingUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/water-reading/import`,
    require('./waterReadingImport').default,
  );
  app.delete(
    `/tenant/:tenantId/water-reading`,
    require('./waterReadingDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/water-reading/autocomplete`,
    require('./waterReadingAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/water-reading`,
    require('./waterReadingList').default,
  );
  app.get(
    `/tenant/:tenantId/water-reading/:id`,
    require('./waterReadingFind').default,
  );
};
