import styled from 'styled-components';

export const CharacterContainer = styled.div`
  background: #060c0c;
  border-radius: 5px;
  color: white;
  width: 50rem;
  margin: auto;
  padding: 1.5rem;
`;

export const CharacterCard = styled.div`
  border: 1px solid #3c531c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gold;

  p,
  h2 {
    margin: 1rem;
  }

  p {
    background: #585a5a;
    border-radius: 7px;
    padding: 0.5rem;
    font-size: 1.2rem;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
