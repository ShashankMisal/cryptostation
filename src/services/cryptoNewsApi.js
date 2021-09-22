import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    "x-rapidapi-host": "free-news.p.rapidapi.com",
    "x-rapidapi-key": "727843ab79msh1c3a4850232eda6p1c9bcbjsna188350a0a32"
};

const baseUrl = 'https://free-news.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/v1/search?q=cryptocurrency&lang=en&page_size=${count}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;