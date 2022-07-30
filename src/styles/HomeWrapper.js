import styled from "styled-components";
const HomeWrapper = styled.div`
     
    width: 100%;
    padding:70px 15% 0 10% ;
    box-sizing:border-box ;
    background-color:#F8F7FC ;
    height:100% ;
    display:flex ;
    flex-direction:column ;
    .home__header{
        display:flex ;
        align-items:center ;
        justify-content:space-between ;
        .home__subtitle{
            font-size:1.5rem ;
            font-weight:bold ;
            color: #222438;
        }
    }
    .home__search {
        display:flex ;
        align-items:center ;
        justify-content:center ;
        width:15%;
        .search-input{
            width:100%;
            height:40px;
            border:1px solid #ccc;
            outline:none ;
            padding:0 10px ;
            border-radius:5px ;
        }
    }
`;
export default HomeWrapper;