import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  
   

`

export const Content = styled.div`
 
   margin-top: 135px;
   display:flex;
   flex-direction: column;
   cursor: pointer;  
   margin-left: 130px;
   

   h1{
       font-size: 40px;
       color: #cc0000;
       padding-bottom: 15px;

       &:hover{
         filter:brightness(1.1);
       }
   }

   h3{
    padding-top: 15px;
    font-weight: 100;
   

   }

   img{
    border-radius:0%; 
    width:  500px;
    height: 300px;
    
    transition: 1s;
    &:hover{
      width: 700px;
    }
  
    
    
   }

   a{
     text-decoration: none;

   }

   

  

`