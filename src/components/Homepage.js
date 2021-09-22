import React from 'react'
import { Grid, Stack, Typography, Box, Button, Container } from '@mui/material';
import millify from 'millify';
import { grey } from '@mui/material/colors';


import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import { Link } from 'react-router-dom';

function Homepage() {

    const { data, isFetching } = useGetCryptosQuery(10);

    const linkStyle = {
        textDecoration: "none",
        color: "black",
    }

    const globalStats = data?.data?.stats;

    if (isFetching) return "Loading.....";


    return (
        <Stack direction="column">
            <Box p={10} style={{backgroundColor:`${grey[50]}`}} width="100%">

                <Container>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item sm={12}>
                            <Typography sx={{ fontWeight: 550 }} align="center" variant="h4">GLOBAL CRYPTO STATS</Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Stack>
                                <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{`${millify(globalStats.totalExchanges)}`}</Typography>
                                <Typography align="center" variant="h5">Total Exchanges</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Stack>
                                <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{`$${millify(globalStats.totalMarketCap)}`}</Typography>
                                <Typography align="center" variant="h5">Total Market Cap</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Stack>
                                <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{`$${millify(globalStats.total24hVolume)}`}</Typography>
                                <Typography align="center" variant="h5">Total 24h Volume</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Stack>
                                <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{globalStats?.total}</Typography>
                                <Typography align="center" variant="h5">Total Cryptocurrencies</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Stack>
                                <Typography sx={{ fontWeight: 600 }} align="center" variant="h4">{millify(globalStats.totalMarkets)}</Typography>
                                <Typography align="center" variant="h5">Total Markets</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box p={10} style={{ backgroundColor: `${grey[200]}` }} width="100%">
                <Container>
                    <Grid container justifyContent="center" style={{ marginTop: "25px" }} >
                        <Grid item sm={12}>
                            <Typography sx={{ fontWeight: 550 }} align="center" variant="h4">TOP 10 CRYPTO'S</Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Cryptocurrencies simplified />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box p={10} mb={10} style={{ backgroundColor: `${grey[50]}`}} >
                <Container>
                    <Grid container justifyContent="center" style={{ marginTop: "25px" }} >
                        <Grid item sm={12}>
                            <Typography sx={{ fontWeight: 550 }} align="center" variant="h4">CRYPTO NEWS</Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <News simplified />
                        </Grid>
                        <Grid item sm={12}>
                            <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
                                <Link to={`/news`} style={linkStyle}>
                                    <Button variant="contained">Show More News</Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container> 
            </Box>

        </Stack>
    )
}

export default Homepage
