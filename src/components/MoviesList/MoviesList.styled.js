import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  width: 154px;
  max-height: 400px;
  cursor: pointer;
  overflow: hidden;
`;

export const WrapperCard = styled.div`
  min-height: 169px;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
