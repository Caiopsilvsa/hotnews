import { CategoryList } from "./style";

export function Categories (){
    return(
 
        <CategoryList>

            <li>
               <a href="/" >
               Destaques
               </a>
               
            </li>
            
            <li>
               <a href="/hotnewsbr/sports" >
                Esportes
               </a> 
               
            </li>

            <li>
               <a href="/hotnewsbr/saude" >
                  Saúde
               </a>
            </li>

            <li>
              <a href="/hotnewsbr/mundo" >
                 Mundo
               </a>
            </li>
           

        </CategoryList>

    )
}