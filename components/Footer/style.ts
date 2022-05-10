import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
  border-top: 1px solid var(--color-background-lighter);

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }

    span {
      height: 1em;
      margin-left: 0.5rem;
    }
  }
`;
