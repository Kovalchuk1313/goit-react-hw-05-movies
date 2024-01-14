import styled from 'styled-components';

export const ListReview = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemReview = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 300px;
  overflow-y: auto;
`;
