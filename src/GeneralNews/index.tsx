import { useEffect, useState } from "react"
import { api } from "../services/api";
import { Container, Content } from "./style";

export function GeneralNews(){
     
    const [news,setNews]=useState<NewsList[]>([]);
        
    interface NewsList{
   
        id:number;
        title:String,
        urlToImage:String,
        description:String,
        url:String

    }
    useEffect(()=>{
       api.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=94a89130e7d64940a970dfa99e7201db")
      .then(resp=>{setNews(resp.data.articles)});  
        console.log(news);
      
 
    },[]);


    return(
       <Container >
            
              {news.map(news =>{
                  return(
                     <Content key={news.id}>
                        <a href ={`${news.url}`} target="_blank" rel="noreferrer"> 
                          <h1>  {news.title} </h1> 
                          <img src={`${news.urlToImage}`} alt="img" />  
                        </a>
                               
                        <h3>
                              {news.description}
                        </h3>
                
                        </Content> 
                        
                  );
               })}
       </Container>
    )
}