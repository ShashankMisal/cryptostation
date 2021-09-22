
import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Grid ,Box, Button} from '@mui/material';
import CryptoCard from './CryptoCard';


import { useGetCryptosQuery } from '../services/cryptoApi';
import SearchBar from './SearchBar';

function Cryptocurrencies({simplified}) {

    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');



    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);
        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    const linkStyle = {
        textDecoration: "none",
        color: "black",
    }
    if (isFetching) return "Loading....";

    return (
        <>
            
            <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12} >
                            {!simplified && (
                                <Box display="flex" justifyContent="center">
                                    <SearchBar setSearchTerm={setSearchTerm} />
                                </Box>
                            )}
                        </Grid>
                {
                    cryptos?.map(currency => (
                        <Grid key={currency.id} item xs={12} sm={6} md={4}>
                                <Link  to={`/crypto/${currency.id}`} style={linkStyle}>
                                    <CryptoCard rank={currency.rank} img={currency.iconUrl} name={currency.name} price={millify(currency.price)} marketCap={millify(currency.marketCap)} dailyChange={currency.change} />
                                </Link>
                        </Grid>
                    ))
                }
                
                {simplified && (
                    <Grid item xs={12} sm={4}>
                        <Box display="flex" width="100%" height="100%" justifyContent="center" alignItems="center" borderRadius="4px">
                            <Link to={`/cryptocurrencies`} style={linkStyle}>
                                <Button variant="contained">Show More</Button>
                            </Link>
                        </Box>
                    </Grid>
                )}

            </Grid>  
        </>
    )
}

export default Cryptocurrencies
