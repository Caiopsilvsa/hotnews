import { useEffect, useState } from "react"
import { api } from "../services/api";
import { Container, Content } from "./style";

export function News(){
     
    const [news,setNews]=useState<NewsList[]>([]);
        
    interface NewsList{
   
        id:number;
        title:String,
        urlToImage:String,
        description:String,
        url:String

    }
    useEffect(()=>{
     function call(){
      api.get("https://newsapi.org/v2/top-headlines?country=BR&apiKey=94a89130e7d64940a970dfa99e7201db")
      .then(resp=>{setNews(resp.data.articles)});  
      console.log(news);
      
     }
     call();
       
    },[]);//eslint-disable-line react-hooks/exhaustive-deps



    return(
       <Container >
            
              {news.map(news =>{
                  return(
                     <Content key={ Math.random().toString(36).substr(2, 9) }>
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