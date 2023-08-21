import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import NewsAllData from '../NewsAllData/NewsAllData';

const NewsData = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get('https://api-creator-server.vercel.app/news-data')
        .then(function(res){
            setNewsData(res.data)
        })
    }, [])
    console.log(newsData)

    return (
        <div className='news__data__main py-8 lg:py-20'>
            <h1 className='text-5xl font-bold mb-10'>All News</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    newsData.map(data => <NewsAllData key={data._id} data={data}></NewsAllData>)
                }
            </div>
        </div>
    );
}

export default NewsData;