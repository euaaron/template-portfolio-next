import styled from "styled-components";

export const TopBarStyle = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  position: fixed;
  backdrop-filter: blur(2rem);
  display: flex;
  align-items: center;

  div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0 2rem;

    a {
      padding: .5rem 1rem;
      border: 1px solid var(--color-background-lighter);
      border-radius: .5rem;
    }
  }

`;