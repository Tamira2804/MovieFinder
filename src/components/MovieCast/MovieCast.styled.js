import styled from 'styled-components';

export const ActorList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ActorCardWrapper = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
`;

export const ActorImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ActorName = styled.h3`
  margin: 10px 0;
`;

export const ActorRole = styled.p`
  color: #888;
`;
