import React, { lazy, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useErrorBoundary } from "use-error-boundary";
import ErrorComponent from "./components/ErrorComponent";
const StyledSocialCard = lazy(() => import("./components/StyledCards"));
const SassSocialCard = lazy(() => import("./components/SassCard"));
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const App = () => {
  const style = { padding: "10px" };
  const { ErrorBoundary, didCatch, error, reset } = useErrorBoundary();
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
      <ErrorBoundary
        render={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/sassCard">
                <SassSocialCard />
              </Route>
              <Route path="/styledCard">
                <StyledSocialCard />
              </Route>
            </Switch>
          </Suspense>
        )}
        renderError={({ error }) => <ErrorComponent error={error} />}
        reset={() => reset}
      />
    </>
  );
};

export default App;
