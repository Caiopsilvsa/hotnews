import { HeaderDiv } from "../Header/styled"
import headerImg from "../assets/hot.png"

export function Header(){
   return(
   <HeaderDiv>
       <h2> 
           HotNews Brasil
       </h2>

       <img src ={headerImg} alt="logo">

       </img>
        
    </HeaderDiv>
   ) 
}