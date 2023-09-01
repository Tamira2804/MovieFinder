import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const ReviewAuthor = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ReviewContent = styled.p`
  font-size: 16px;
`;
