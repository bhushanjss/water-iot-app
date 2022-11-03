import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/address/importer/addressImporterActions';
import fields from 'src/modules/address/importer/addressImporterFields';
import selectors from 'src/modules/address/importer/addressImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AddressImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.address.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.address.menu'), '/address'],
          [i18n('entities.address.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.address.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AddressImportPage;
