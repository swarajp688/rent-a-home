import styled from "styled-components";
const CardWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  margin-right: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
  }
  .card-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    p {
      width: 90%;
      margin: 2px 0px;
      clear: both;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
    }
    .border {
      border-bottom: 1px solid #ccc;
    }
  }
  .card-details {
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    flex-wrap: wrap;
    padding-left: 20px;
    margin-top: 10px;
    p {
      width: 33%;
      min-width: 94px;
      font-size: 0.8rem;
    }
    .size {
      font-size: 1.2rem;
      position: relative;
      top: 5px;
    }
  }
  .color {
    color: #6f65e8;
  }
  .bold {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .property-name {
    font-size: 1.2rem;
    color: #15133c;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
  }
  .property-adress {
    color: #100720;
  }
`;
export default CardWrapper;
