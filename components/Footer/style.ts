import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid var(--color-background-lighter);
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
`;