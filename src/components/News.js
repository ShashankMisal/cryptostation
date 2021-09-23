import React from 'react'
import { Container, Grid} from '@mui/material';
import NewsCard from './NewsCard'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

function News({simplified}) {
    const { data: cryptoNews , isFetching } = useGetCryptoNewsQuery( simplified ? '6' : '25');
    const {articles} = cryptoNews?cryptoNews:[]

    if (isFetching) return <Loader />

    return (
        <Container>
            <Grid container spacing={2} justifyContent="center" style={{marginTop:"15px",display:"flex",justifyCotent:"center"}}>
            
                {
                    articles?.map((article,index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                                <NewsCard 
                                img={article.media} 
                                title={article.title}
                                summary={article.summary}
                                date={article.published_date}
                                link={article.link}
                                />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default News
