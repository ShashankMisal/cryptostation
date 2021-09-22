import React from 'react'
import { Grid} from '@mui/material';
import NewsCard from './NewsCard'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

function News({simplified}) {
    const { data: cryptoNews , isFetching } = useGetCryptoNewsQuery( simplified ? '6' : '25');

    console.log(cryptoNews)

    const {articles} = cryptoNews?cryptoNews:[]

    if(isFetching) return "Loading..."

    return (
        <>
            <Grid container justifyContent="center" spacing={2} style={{marginTop:"15px"}}>
            
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
        </>
    )
}

export default News
