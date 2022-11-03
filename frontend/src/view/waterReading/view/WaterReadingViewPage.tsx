import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/waterReading/view/waterReadingViewActions';
import selectors from 'src/modules/waterReading/view/waterReadingViewSelectors';
import WaterReadingView from 'src/view/waterReading/view/WaterReadingView';
import WaterReadingViewToolbar from 'src/view/waterReading/view/WaterReadingViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function WaterReadingPage() {
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
          [i18n('entities.waterReading.menu'), '/water-reading'],
          [i18n('entities.waterReading.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.waterReading.view.title')}
        </PageTitle>

        <WaterReadingViewToolbar match={match} />

        <WaterReadingView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default WaterReadingPage;
