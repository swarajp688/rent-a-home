import styled from "styled-components";
const FilterWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 50px 0;
  .filter-form {
    display: flex;
    align-items: center;
    height: auto;
    flex-wrap: wrap;
    width:auto;
    padding: 20px;
    justify-content:space-between ;
    .filter-div {
      height: 100%;
      width: 180px;
      display: flex;
      flex-direction: column;
    margin:0 10px ;
      label {
        font-size: 1.2rem;
        font-weight: bold;
        color: #222438;
        margin-bottom: 10px;
      }
      input,
      select {
        height: 30px;

        border: 2px solid #6f65e8;
        outline: none;
        border-radius: 5px;
        padding: 5px;
      }
      select {
        height: 45px;
      }
    }
   
    .btn-div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      height: 100%;
      width: 250px;
      padding-top: 20px;
      button {
        width: 60%;
        height: 40px;
        border: none;
        background-color: #6f65e8;
        color: #fff;
        font-size: 1rem;
        border-radius: 5px;
      }
    }
  }
 
@media only screen and (max-width: 600px) {
  .filter-div{
    width:150px ;
  }
}
`;
export default FilterWrapper;
