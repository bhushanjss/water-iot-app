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

const filterData = (readings: Array<any>) => {
  let labels:Array<string> = [];
  let readingValues:Array<string> = [];
  readings.forEach( reading => {
    if(reading['dateTime'] && reading['alkalinity']) {
      labels.push(reading['dateTime']);
      readingValues.push(reading['alkalinity']);
    }
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Alkalinity',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: readingValues,
      },
    ],
  };
  return data;
}

export default function DashboardLineChart(props) {
  const { readings } = props;
  const data = filterData(readings);
  return <Line data={data} options={options} />;
}
