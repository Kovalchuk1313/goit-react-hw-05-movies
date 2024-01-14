import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionMain = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GoBackLink = styled(Link)`
  color: red;
  font-weight: 700;
  padding: 6px;
  border: 1px solid red;
  width: 100px;
  &.active {
    color: orange;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

export const AddList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  text-decoration: underline;
`;
