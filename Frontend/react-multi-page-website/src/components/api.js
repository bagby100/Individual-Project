import { NEWS_API_KEY } from "./config";

export const getNBAArticles = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=NBAPlayoffs&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
    
  }

  

