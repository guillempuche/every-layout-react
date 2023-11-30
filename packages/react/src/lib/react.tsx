import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactProps {}

const StyledReact = styled.div`
  color: pink;
`;

export function React(props: ReactProps) {
  return (
    <StyledReact>
      <h1>Welcome to React!</h1>
    </StyledReact>
  );
}

export default React;
