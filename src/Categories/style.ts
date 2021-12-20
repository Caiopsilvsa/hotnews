import styled from "styled-components";

export const CategoryList = styled.ul`
    position: static;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px; 
    margin-top:60px;
    list-style-type:none;
    font-size:20px;
    font-weight: 500;   

    li{
        margin-left:30px;
        font-family:"serif";
        padding: .5em 0;
       
    }

    a{
        text-decoration:none;
        color:black;
    }

    a:hover, a:active {
        color: red;
}

    

`

