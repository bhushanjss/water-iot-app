import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/waterReading/importer/waterReadingImporterActions';
import fields from 'src/modules/waterReading/importer/waterReadingImporterFields';
import selectors from 'src/modules/waterReading/importer/waterReadingImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function WaterReadingImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.waterReading.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.waterReading.menu'), '/water-reading'],
          [i18n('entities.waterReading.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.waterReading.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default WaterReadingImportPage;
