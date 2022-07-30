import styled from "styled-components";
const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 50px;
`;
export default ResultWrapper;
