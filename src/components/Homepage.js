import React from 'react'
import { Grid, Stack, Typography, Box } from '@mui/material';
import millify from 'millify';
import moneyLoader from '../images/moneyLoader.gif'


import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';

function Homepage() {

    const { data, isFetching } = useGetCryptosQuery(10);

    const globalStats = data?.data?.stats;

    if (isFetching) return "Loading.....";


    return (
        <Stack direction="column">
            <Box mt={5} mb={5}>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item sm={12}>
                        <Typography sx={{ fontWeight: 550 }} align="center" variant="h4">GLOBAL CRYPTO STATS</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Stack>
                            <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{millify(globalStats?.totalExchanges)}</Typography>
                            <Typography align="center" variant="h5">Total Exchanges</Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography align="center" variant="h3"><img alt="money" src={moneyLoader} width="100px" /></Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Stack>
                            <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{`$${millify(globalStats?.totalMarketCap)}`}</Typography>
                            <Typography align="center" variant="h5">Total Market Cap</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Stack>
                            <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{`$${millify(globalStats?.total24hVolume)}`}</Typography>
                            <Typography align="center" variant="h5">Total 24h Volume</Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Stack>
                            <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{globalStats?.total}</Typography>
                            <Typography align="center" variant="h5">Total Cryptocurrencies</Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Stack>
                            <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{millify(globalStats.totalMarkets)}</Typography>
                            <Typography align="center" variant="h5">Total Markets</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box    >
                <Grid container justifyContent="center" style={{marginTop: "25px"}} >
                    <Grid item sm={12}>
                        <Typography sx={{ fontWeight: 550 }} align="center" variant="h4">TOP 10 CRYPTO'S</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Cryptocurrencies simplified />
                    </Grid>
                </Grid>
            </Box>

        </Stack>
    )
}

export default Homepage
