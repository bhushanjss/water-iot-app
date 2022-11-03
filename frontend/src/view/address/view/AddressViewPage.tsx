import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/address/view/addressViewActions';
import selectors from 'src/modules/address/view/addressViewSelectors';
import AddressView from 'src/view/address/view/AddressView';
import AddressViewToolbar from 'src/view/address/view/AddressViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AddressPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.address.menu'), '/address'],
          [i18n('entities.address.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.address.view.title')}
        </PageTitle>

        <AddressViewToolbar match={match} />

        <AddressView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AddressPage;
