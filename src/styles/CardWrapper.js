import styled from "styled-components";
const CardWrapper = styled.div`
    width:100%;
    height:400px ;
    background-color:#fff ;
    margin-right:30px;
    .card-image{
        width:100%;
        height:200px;
        object-fit: cover;
        border-radius:5px 5px 0px 0px;
    }
    .card-info{
        width:100%;
        display:flex ;
        flex-direction:column ;
        padding-left:20px ;
        
        p{
            width:90% ;
            margin:2px 0px;
        }
        .border{
            border-bottom:1px solid #ccc;
        }
    }

    .color{
        color:#6f65e8;

    }
    .bold{
        font-weight:bold;
        font-size:1.5rem ;
    }
`;
export default CardWrapper;
