import styled from "styled-components";

export const AboutContainer = styled.div`
  flex: 1;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    width: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div {
    flex: 1;
    display: flex;
    max-height: 80vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

  > a {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;


  &:hover,
  &:focus,
  &:active {
  color: #0070f3;
  border-color: #0070f3;
  }

  & h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  }

  & p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
  }
  }

  @media (max-width: 600px) {
  > a {
  width: 100%;
  flex-direction: column;
  }
  }
  }
`;