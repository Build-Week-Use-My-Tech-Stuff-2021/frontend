import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'


export default function RequestReceived() {
  const history = useHistory();

const routeToHome = () => {
  history.push("/");
};
  return (
    <StyledRequestReceivedForm>
      <h1>Thank you!</h1>
      <h3>
        Your request is being processed. Please check your email for more
        information.
      </h3>
      <button className="Processing page button" onClick={routeToHome}>
        Home
      </button>
    </StyledRequestReceivedForm>
  );
}

const StyledRequestReceivedForm = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  /* font-weight: ${(pr) => pr.theme.fontWeight}; */
  font-style: ${(pr) => pr.theme.fontStyle};
  font-size: ${(pr) => pr.theme.fontSize};
  padding: ${(pr) => pr.theme.padding};
  //border: ${(pr) => pr.theme.border};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  //background-color: ${(pr) => pr.theme.backgroundColor};
  button {
    color: darkslategray;
  }
`;