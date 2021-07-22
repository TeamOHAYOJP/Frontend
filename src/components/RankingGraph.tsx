import React, { VFC, FC } from 'react';

import { Ranking } from 'interfaces/ranking';
import moment from 'moment'
import { Line } from 'react-chartjs-2'


interface PROPS {
    rankings: Ranking[]
}

const getGraghData = (rankings: Ranking[]) => {

    let weeklyRankings = Array(7)
    let j = 6
    let i = rankings.length - 1

    while (i >= 0 && j >= 0) {
        weeklyRankings[j--] = rankings[i--]
    }

    const data = weeklyRankings.map(r => {
        const date = new Date(r.createdAt)
        return {
            
            x: date.getDate(),
            y: date.getDate(),

            // x: moment(`${year}-01-01`), 
            // y: moment(`1970-02-01 ${times[index]}`).valueOf()
        }
    });

    return data
}
const getLabelData = (rankings: Ranking[]) => {
    console.log(rankings)
    let weeklyRankings = Array(7)
    let j = 6
    let i = rankings.length - 1

    while (i >= 0 && j >= 0) {
        weeklyRankings[j--] = rankings[i--]
    }

    const data = weeklyRankings.map(r => new Date(r.createdAt).getDate());
    return data
}

export const RankingGraph: VFC<PROPS> = (props: PROPS) => {



    const data = {
        labels: getLabelData(props.rankings),
        datasets: [
            {
                label: "Woke up time",
                backgroundColor: "#008080",
                borderColor: "#7fffd4",
                pointBorderWidth: 10,
                data: getGraghData(props.rankings),
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                                unit: 'day',
                                unitStepSize: 1
                            }
                        }],
                        y: [{
                            type: 'time',
                            distribution: 'linear',
                            time: {
                                unit: 'hour',
                                unitStepSize: 1 
                            },
                            // ticks: {
                            //     min: moment('1970-02-01 00:00:00').valueOf(),
                            //     max: moment('1970-02-01 23:59:59').valueOf(),
                            //     stepSize: 3.6e+6,
                            //     beginAtZero: false,
                            //     callback: (value:any) => {
                            //       let date = moment(value);
                            //       if(date.diff(moment('1970-02-01 23:59:59'), 'minutes') === 0) {
                            //         return null;
                            //       }
                                  
                            //       return date.format('h A');
                            //     }
                            // }

                        }]

                    }
                }


            }
        ]
    }
    console.log(getGraghData(props.rankings))
    return (
        <div>
            <Line data={data} />
        </div>
    )
}