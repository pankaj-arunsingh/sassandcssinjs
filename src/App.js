import StyledSocialCard from "./components/StyledCards";
import SassSocialCard from "./components/SassCard";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
function App() {
  const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const style = { padding: "10px" };
  return (
    <>
      <LinkContainer>
        <Link to="/styledCard" style={style}>
          CSS in JS example card
        </Link>
        <Link to="/sassCard" style={style}>
          Sass example card
        </Link>
      </LinkContainer>

      <Route path="/sassCard">
        <SassSocialCard />
      </Route>
      <Route path="/styledCard">
        <StyledSocialCard />
      </Route>
    </>
  );
}

export default App;
