import React from 'react';
import { i18n } from 'src/i18n';
import DeviceListFilter from 'src/view/device/list/DeviceListFilter';
import DeviceListTable from 'src/view/device/list/DeviceListTable';
import DeviceListToolbar from 'src/view/device/list/DeviceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DeviceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.device.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.device.list.title')}
        </PageTitle>

        <DeviceListToolbar />
        <DeviceListFilter />
        <DeviceListTable />
      </ContentWrapper>
    </>
  );
}

export default DeviceListPage;
