import styled from "styled-components";
const NavbarWrapper = styled.div`
width:100% ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    .navbar__logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        .logo{
            color:#7468FC ;
            font-size:30px ;
        }
        h4 {
            font-size: 1.5rem;
            font-weight: bold;
            color: #2E2A50;
            margin-left: 10px;
        }
    }
  }
`;
export default NavbarWrapper;