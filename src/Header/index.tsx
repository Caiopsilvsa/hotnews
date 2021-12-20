import { Categories } from "../Categories";
import { HeaderDiv } from "../Header/styled"
import headerImg from "../hot.png";
import { Container } from "../News/style";

interface HeaderProps{
   category:String
}

export function Header({category}:HeaderProps){
   return(
 <>
  <Container>
     <HeaderDiv>
          <h2> 
           {category}
          </h2>

         <img src ={headerImg} alt="logo">

          </img>
        
      </HeaderDiv>

    

      <Categories />

    
    
    </Container>
   </>
   ) 

}