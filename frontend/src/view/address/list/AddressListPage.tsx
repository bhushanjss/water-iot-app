import React from 'react';
import { i18n } from 'src/i18n';
import AddressListFilter from 'src/view/address/list/AddressListFilter';
import AddressListTable from 'src/view/address/list/AddressListTable';
import AddressListToolbar from 'src/view/address/list/AddressListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AddressListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.address.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.address.list.title')}
        </PageTitle>

        <AddressListToolbar />
        <AddressListFilter />
        <AddressListTable />
      </ContentWrapper>
    </>
  );
}

export default AddressListPage;
