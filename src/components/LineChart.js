import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Line } from 'react-chartjs-2';


function LineChart({ coinHistory, currentPrice, coinName }) {

    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };


    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div>
            <Box display="flex" justifyContent="space-between" p={2.5}>
                <Typography variant="h5" color="primary" style={{fontWeight:800}}>
                    {coinName} Price Chart
                </Typography>
                <Typography variant="body1" style={{fontWeight:"750",margin:"5px"}}>
                    Change: {coinHistory?.data?.change}%
                </Typography>
                <Typography variant="body1" style={{ fontWeight: "750", margin: "5px",paddingLeft:"10px" }}>
                    Current {coinName} Price: $ {currentPrice}
                </Typography>
            </Box>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
