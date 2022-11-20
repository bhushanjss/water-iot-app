import {Button, Grid, makeStyles} from '@material-ui/core';
import React, {useEffect} from 'react';
import { i18n } from 'src/i18n';
import DashboardBarChart from 'src/view/dashboard/DashboardBarChart';
import DashboardDoughnutChart from 'src/view/dashboard/DashboardDoughnutChart';
import DashboardHorizontalBarChart from 'src/view/dashboard/DashboardHorizontalBarChart';
import DashboardLineChart from 'src/view/dashboard/DashboardLineChart';
import DashboardMixChartOne from 'src/view/dashboard/DashboardMixChartOne';
import DashboardMixChartTwo from 'src/view/dashboard/DashboardMixChartTwo';
import DashboardPolarChart from 'src/view/dashboard/DashboardPolarChart';
import DashboardRadarChart from 'src/view/dashboard/DashboardRadarChart';
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../modules/waterReading/list/waterReadingListSelectors";
import actions from "../../modules/waterReading/list/waterReadingListActions";
import DashboardService from "../../modules/dashboard/dashboardService";
import addressSelectors from "../../modules/address/addressSelectors";
import AddIcon from "@material-ui/icons/Add";
import {Link} from "react-router-dom";
import deviceSelectors from "../../modules/device/deviceSelectors";

const useStyles = makeStyles((theme) => ({
  chartWrapper: {
    border: '1px solid rgb(224, 224, 224)',
    borderRadius: '5px',
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonWrapper: {
    border: '1px solid rgb(224, 224, 224)',
    borderRadius: '5px',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));

function DashboardPage(props) {
  const classes = useStyles();

  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  // const locationId = "636feb4d22dfe967052f9451"; //Robertsganj
  // const locationId = "636feb8a22dfe967052fbb35"; //Anpara
  // const locationId = "636feb4122dfe967052f8d26"; //Barara, Ambala, Haryana
   const locationId = "636feb3a22dfe967052f887e"; //good
  //   const locationId = "636feb3522dfe967052f85e1";
  //   const locationId = "636feb3422dfe967052f8526"; //OK
  //   const locationId = "636feb2e22dfe967052f81ec"; //Has TDS
  const filter = {

  };

  useEffect(() => {
      // dispatch( actions.doChangeAddSort({field: 'dateTime', order: 'asc'}));
      dispatch(actions.doFetchUserDataFilter(filter));
      // eslint-disable-next-line
  }, [dispatch]);

const waterReadings:Array<any> = useSelector(selectors.selectRows);
const waterReadingDesc = waterReadings.reverse();
const tdsReadings = DashboardService.getTDSData(waterReadings);
const pHReadings = DashboardService.getpHData(waterReadings);
const conductivityReadings = DashboardService.getConductivityData(waterReadings);
// const turbidityReadings = DashboardService.getTurbidityData(waterReadings);
// const temperatureReadings = DashboardService.getTemperatureData(waterReadings);
// const group1Readings = DashboardService.getGroup1Data(waterReadings);


    const hasPermissionToCreateAddress = useSelector(
        addressSelectors.selectPermissionToCreate,
    );

    const hasPermissionToCreateDevice = useSelector(
        deviceSelectors.selectPermissionToCreate,
    );

  return (
    <>
      <div
        style={{
          padding: 0,
        }}
      >
        <Grid spacing={2} container>
          {/*<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>*/}
          {/*  <div className={classes.chartWrapper}>*/}
          {/*    <DashboardDoughnutChart />*/}
          {/*  </div>*/}
          {/*</Grid>*/}
          {/*<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>*/}
          {/*  <div className={classes.chartWrapper}>*/}
          {/*    <DashboardMixChartTwo />*/}
          {/*  </div>*/}
          {/*</Grid>*/}
          {/*<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>*/}
          {/*  <div className={classes.chartWrapper}>*/}
          {/*    <DashboardBarChart />*/}
          {/*  </div>*/}
          {/*</Grid>*/}

          {/*<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>*/}
          {/*  <div className={classes.chartWrapper}>*/}
          {/*    <DashboardMixChartOne />*/}
          {/*  </div>*/}
          {/*</Grid>*/}

          {/*<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>*/}
          {/*  <div className={classes.chartWrapper}>*/}
          {/*    <DashboardPolarChart />*/}
          {/*  </div>*/}
          {/*</Grid>*/}

          {/*<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>*/}
          {/*  <div className={classes.chartWrapper}>*/}
          {/*    <DashboardHorizontalBarChart />*/}
          {/*  </div>*/}
          {/*</Grid>*/}
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className={classes.chartWrapper}>
                    <DashboardLineChart readings={tdsReadings} />
                </div>
            </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <div className={classes.chartWrapper}>
                <DashboardLineChart readings={pHReadings} />
            </div>
          </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className={classes.chartWrapper}>
                    <DashboardLineChart readings={conductivityReadings} />
                </div>
            </Grid>
            {/*<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>*/}
            {/*    <div className={classes.chartWrapper}>*/}
            {/*        <DashboardLineChart readings={temperatureReadings} />*/}
            {/*    </div>*/}
            {/*</Grid>*/}
            {/*<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>*/}
            {/*    <div className={classes.chartWrapper}>*/}
            {/*        <DashboardLineChart readings={turbidityReadings} />*/}
            {/*    </div>*/}
            {/*</Grid>*/}
          {/*<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>*/}
          {/*  <div className={classes.chartWrapper}>*/}
          {/*    <DashboardRadarChart />*/}
          {/*  </div>*/}
          {/*</Grid>*/}
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              {hasPermissionToCreateAddress && (
                  <Button
                      className={classes.buttonWrapper}
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/address/new"
                      startIcon={<AddIcon />}
                      size="small"
                  >
                      {i18n('dashboard.address')}
                  </Button>
              )}
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              {hasPermissionToCreateDevice && (
                  <Button
                      className={classes.buttonWrapper}
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/device/new"
                      startIcon={<AddIcon />}
                      size="small"
                  >
                      {i18n('dashboard.device')}
                  </Button>
              )}
          </Grid>
        </Grid>

        <p
          style={{
            marginTop: '16px',
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          {i18n('dashboard.message')}
        </p>
      </div>
    </>
  );
}

export default DashboardPage;
