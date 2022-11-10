import React, {useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../modules/waterReading/list/waterReadingListSelectors";
import actions from "../../modules/waterReading/list/waterReadingListActions";

const options = {
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: true,
      },
    ],
  },
};


export default function DashboardLineChart(props) {
  const { readings } = props;
  return <Line data={readings} options={options} />;
}
