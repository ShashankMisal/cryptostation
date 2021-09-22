import React from 'react'
import { Grid, Stack, Typography, Box } from '@mui/material';
import millify from 'millify';
import moneyLoader from '../images/moneyLoader.gif'
import CryptoCard from './CryptoCard'


import { useGetCryptosQuery } from '../services/cryptoApi';

function Homepage() {

    const { data, isFetching } = useGetCryptosQuery(10);

    const globalStats = data?.data?.stats;
    console.log(data)

    if (isFetching) return "Loading.....";


    return (
        <>
        <Box mt={5} mb={5}>

            <Grid container spacing={4}>
                <Grid item sm={12}>
                    <Typography sx={{ fontWeight: 550 }} align="center" variant="h4">GLOBAL CRYPTO STATS</Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ fontWeight: 600 }} align="center" variant="h3">{millify(globalStats?.totalExchanges)}</Typography>
                        <Typography align="center" variant="h5">Total Exchanges</Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography align="center" variant="h3"><img alt="money" src={moneyLoader} width="100px" /></Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ fontWeight: 600 }} align="center" variant="h3">{`$${millify(globalStats?.totalMarketCap)}`}</Typography>
                        <Typography align="center" variant="h5">Total Market Cap</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ fontWeight: 600 }} align="center" variant="h3">{`$${millify(globalStats?.total24hVolume)}`}</Typography>
                        <Typography align="center" variant="h5">Total 24h Volume</Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ fontWeight: 600 }} align="center" variant="h3">{globalStats?.total}</Typography>
                        <Typography align="center" variant="h5">Total Cryptocurrencies</Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ fontWeight: 600 }} align="center" variant="h3">{millify(globalStats.totalMarkets)}</Typography>
                        <Typography align="center" variant="h5">Total Markets</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>

    </>
    )
}

export default Homepage
