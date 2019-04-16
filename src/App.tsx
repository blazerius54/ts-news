import React, { useState, useEffect } from 'react';
import './App.css';
import {getNews} from './api/news';
import NewsItem from './components/NewsItem';
import { INews } from './models/news';

const App: React.FunctionComponent = () => {
  const [news, setNews] = useState<INews[]>();


  useEffect(() => {
    getNews().then(response => setNews(response.data))
  });

  return (
    <div className='app-wrapper'>
      <h2>Here you see some fake data!!</h2>
      {
        news && news.map(item => <NewsItem key={item.id} item={item}/>)
      }
    </div>
  )
};

export default App;
