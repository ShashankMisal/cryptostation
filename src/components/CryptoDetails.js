import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Grid, Box, Container, Typography, InputLabel, MenuItem,FormControl,Select,Stack,Divider, Avatar} from '@mui/material';
import LineChart from './LineChart';
import Loader from './Loader';

import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AnchorIcon from '@mui/icons-material/Anchor';
import ApiIcon from '@mui/icons-material/Api';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PanToolIcon from '@mui/icons-material/PanTool';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import KeyboardCapslockIcon from '@mui/icons-material/KeyboardCapslock';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';




function CryptoDetails() {
    
    const { coinId } = useParams();
    const [timeperiod, setTimeperiod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
    const cryptoDetails = data?.data?.coin;
    
    const handleChange = (event) => {
        setTimeperiod(event.target.value);
    };
    
    if (isFetching) return <Loader/>;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    
    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails.price)}`, icon: <MonetizationOnOutlinedIcon /> },
        { title: 'Rank', value: cryptoDetails.rank, icon: <TimelineIcon /> },
        { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <MonetizationOnOutlinedIcon /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <KeyboardCapslockIcon /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <AltRouteIcon /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <AnchorIcon /> },
        { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <ApiIcon /> },
        { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckCircleOutlineIcon /> : <PanToolIcon />, icon: <DoNotDisturbOnTotalSilenceIcon /> },
        { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <MultipleStopIcon /> },
        { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <BlurCircularIcon /> },
    ];


    return (
        <Container>
            
            <Box p={3}>

                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center">
                            <Avatar src={cryptoDetails.iconUrl} />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4" color="primary" style={{ fontWeight: 750 }}>
                            {data?.data?.coin.name} ({data?.data?.coin.slug}) Price
                        </Typography>
                       
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="body1" style={{ fontWeight: 750 }}   >
                        {cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply
                    </Typography></Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                </Grid>

            </Box>
            <FormControl style={{width:"200px"}}>
                <InputLabel id="select-label">Time Period</InputLabel>
                <Select
                    labelId="select-label"
                    id="demo-simple-select"
                    value={timeperiod}
                     defaultValue="7d"
                    label="Time Period"
                    onChange={handleChange}
                >
                    {
                        time.map((date,index)=><MenuItem key={index} value={date}>{date}</MenuItem>)
                    }
                </Select>
            </FormControl>


            <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />
            
            <Grid container justifyContent="center" spacing={5} style={{padding:"28px"}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Stack direction="column">
                        <Typography variant="h5" align="left" color="primary" style={{fontWeight:"750"}}>
                            {cryptoDetails.name} Value Statistics
                        </Typography>
                        <Typography variant="body1" paragraph align="left">
                            An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.
                        </Typography>
                        {stats.map(({ icon, title, value },index) => (
                            <div key={index}>
                            <Box display="flex" justifyContent="flex-start" alignItems="center" p={1.5}>
                                <Box display="flex" flex="1">
                                    <Typography variant="body1" align="left" component="span" style={{paddingRight:"10px"}}>
                                       {icon}
                                    </Typography>
                                    <Typography variant="body1" align="left" component="span">
                                       {title}
                                    </Typography>
                                </Box>
                                    <Typography variant="body1" align="left" style={{ fontWeight: 700 }}>
                                   {value}
                                </Typography>
                            </Box>
                            <Divider/>
                            </div>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Stack direction="column">
                        <Typography variant="h5" align="left" color="primary" style={{ fontWeight: "750" }}>
                            Other Stats Info
                        </Typography>
                        <Typography variant="body1" paragraph align="left">
                            An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.
                        </Typography>
                        {genericStats.map(({ icon, title, value},index) => (
                            <div key={index}>
                                <Box display="flex" justifyContent="flex-start" alignItems="center" p={1.5}>
                                    <Box display="flex" flex="1">
                                        <Typography variant="body1" align="left" component="span" style={{paddingRight:"10px"}}>
                                            {icon}
                                        </Typography>
                                        <Typography variant="body1" align="left" component="span">
                                            {title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" align="left" style={{fontWeight:700}}>
                                        {value}
                                    </Typography>
                                </Box>
                                <Divider />
                            </div>
                        ))}
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <Stack direction="column">
                        <Typography variant="h5" align="left" color="primary" style={{ fontWeight: "750" }}>
                            What is {cryptoDetails.name}?
                        </Typography>
                        {HTMLReactParser(cryptoDetails.description)}
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <Stack direction="column">
                        <Typography variant="h5" align="left" color="primary" style={{ fontWeight: "750" }}>
                            {cryptoDetails.name} Links
                        </Typography>
                        {cryptoDetails?.links?.map((link,index) => (
                            <div key= { index }>
                                <Box  display="flex" justifyContent="flex-start" alignItems="center" p={1.5}>
                                    <Box display="flex" flex="1">
                                        <Typography variant="body1" align="left" component="span">
                                            {link.type}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" align="left">
                                        <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                                    </Typography>
                                </Box>
                                <Divider />
                            </div>
                        ))}
                    </Stack>
                </Grid>
            </Grid>


        </Container>
    )
}

export default CryptoDetails
