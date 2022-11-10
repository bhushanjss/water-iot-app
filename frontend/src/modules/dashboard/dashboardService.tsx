
const separateItems = (readings: Array<any>, categories: Array<string>) => {
    let results = {
        labels: Array<string>()
    };
    categories.forEach(category => {
        results[category] = []
    });

    readings.forEach( reading => {
        if(reading['dateTime']) {
            results.labels.push(reading['dateTime']);
            categories.forEach(category => {
                results[category].push(reading[category])
            });
        }
    });
    return results;
}

const splitDataGroup1 = (readings: Array<any>) => {

    const readingList = separateItems(readings, ['alkalinity', 'conductivity', 'hardness']);

    const data = {
        labels: readingList.labels,
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
                data: readingList['alkalinity'],
            },{
                label: 'Total Conductivity',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,112,190,0.4)',
                borderColor: 'rgb(75,120,192)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(24,79,79)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: readingList['conductivity'],
            },{
                label: 'Total Hardness',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(142,190,46,0.4)',
                borderColor: 'rgb(183,187,72)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(193,130,63)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(138,121,53)',
                pointHoverBorderColor: 'rgb(186,175,170)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: readingList['hardness'],
            },
        ],
    };
    return data;
}

export default class DashboardService {

    static getGroup1Data(readings: Array<any>) {
        return splitDataGroup1(readings)
    }

    static getpHData(readings: Array<any>) {
        const readingList = separateItems(readings, ['pH']);
        const data = {
            labels: readingList.labels,
            datasets: [
                {
                    label: 'pH',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(192,122,75,0.4)',
                    borderColor: 'rgb(192,178,75)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgb(128,192,75)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgb(85,192,75)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: readingList['pH'],
                }
            ],
        };
        return data;
    }

}