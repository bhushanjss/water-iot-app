import React from 'react';
import { i18n } from 'src/i18n';
import WaterReadingListFilter from 'src/view/waterReading/list/WaterReadingListFilter';
import WaterReadingListTable from 'src/view/waterReading/list/WaterReadingListTable';
import WaterReadingListToolbar from 'src/view/waterReading/list/WaterReadingListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function WaterReadingListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.waterReading.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.waterReading.list.title')}
        </PageTitle>

        <WaterReadingListToolbar />
        <WaterReadingListFilter />
        <WaterReadingListTable />
      </ContentWrapper>
    </>
  );
}

export default WaterReadingListPage;
