import Navbar  from "./Components/Navbar";
import NewsCard from "./Components/NewsCard";
import NotFound from "./Components/NotFound";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Loader from "./Components/Loader";
const App = () => {
  const [articles, setArticles] = useState([
    {
        "title": "You need to sync your iPhone photos with Google and not just Apple Photos",
        "description": "iPhone users should synchronize their photo library with Google Photos as well as Apple for better search and sharing",
        "content": "Thanks to backup services like iCloud , I never have to worry about losing precious memories. In the past, if I had to rush into my burning house to save anything, my photo albums would be rescued immediately after everything with a heartbeat. Today ... [8850 chars]",
        "url": "https://www.techradar.com/how-to/you-need-to-sync-your-iphone-photos-with-google-and-not-just-apple-photos",
        "image": "https://cdn.mos.cms.futurecdn.net/sgPSTjKbNwZLVznG4rU6rJ-1200-80.jpg",
        "publishedAt": "2023-04-15T04:00:00Z",
        "source": {
            "name": "TechRadar",
            "url": "https://www.techradar.com"
        }
    },
    {
        "title": "Pixel 8 phones appear in new renders along with protective cases",
        "description": "The Google Pixel 8 and Pixel 8 pro have appeared in a new set of renders along with their protective cases.",
        "content": "The Google Pixel 8 may be a little smaller than the Pixel 7, but it would look a lot like its predecessor. Leaked renders have already revealed that, and we now have further confirmation via a fresh leak. TechGoing recently shared an image of the pho... [2179 chars]",
        "url": "https://www.androidheadlines.com/2023/04/pixel-8-phones-appear-in-new-renders-along-with-protective-cases.html",
        "image": "https://www.androidheadlines.com/wp-content/uploads/2023/03/Google-Pixel-8-CAD-render-2.jpg",
        "publishedAt": "2023-04-14T22:33:57Z",
        "source": {
            "name": "Android Headlines",
            "url": "https://www.androidheadlines.com"
        }
    },
    {
        "title": "Walmart challenges 4K Fire Stick and Chromecast with $20 Google TV box",
        "description": "Walmart's gearing up to launch a new, upgraded Onn Google TV streaming device at a shockingly low price.",
        "content": "There are already some great options for 4K streaming devices out there, like the Chromecast with Google TV 4K and Amazon Fire TV Stick 4K. Now it seems Walmart is gearing up to launch its latest Google TV streaming box at the cheapest price point by... [2338 chars]",
        "url": "https://www.tomsguide.com/news/walmart-challenges-4k-fire-stick-and-chromecast-with-dollar20-google-tv-box",
        "image": "https://cdn.mos.cms.futurecdn.net/XEy9BLnTEjzUeWi9VmBBMW-1200-80.jpg",
        "publishedAt": "2023-04-14T21:02:08Z",
        "source": {
            "name": "Tom's Guide",
            "url": "https://www.tomsguide.com"
        }
    }
]);
const [loader, setloader]= useState(true);
let category = 'general';
let country = 'in';
const fetchNews = async (category, country) => {
  setloader(true)
  const apikey = "8a2384396bddc748e70569b0755ed4be";
    const url = `https://gnews.io/api/v4/search?q=${category}&lang=${country}&country=in&max=10&apikey=${apikey}&max=9`;
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
      setloader(false)
    } catch (error) {
      console.log(error);
      setloader(false)
    }
  };
  useEffect(() => {
    fetchNews(category, country='in');
    // console.log(articles[0])
  }, []);
  return <>
  {loader ? <Loader/>:
    <div>
      <Navbar fetchNews={fetchNews}/>
      
     <div className="bg-gray-800">
      <div className="relative overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1488628176578-4ffd5fdbc900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmxkJTIwbWFwJTIwMTkyMCoyMTAwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="hero background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="relative z-10 px-4 py-12 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl">
            Get the Latest News
          </h1>
          <p className="mt-3 text-base text-gray-300 md:text-lg">
            Stay up-to-date with the latest news from around the world.
          </p>
          <div className="mt-10">
            <a
              href="#headline"
              className="inline-block bg-white py-3 px-6 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-300"

            >
              Explore News
            </a>
          </div>
        </div>
      </div>
          <div className=" bg-white pt-3 ">
            <h1 className="text-4xl font-bold text-center py-3" id="headline">Top headlines</h1>
          </div>
    </div>
      <div className="flex flex-wrap justify-around lg:px-8 my-4 mx-2">
        {articles.map((article, index) => (
        <NewsCard key={index} article={article}  />
      ))}
      </div>
    </div>
   }
  </>;
}

export default App;
