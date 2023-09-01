import styled from 'styled-components';

export const ActorList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ActorCardWrapper = styled.li`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 150px;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    transform: scale(1.1);
  }
`;

export const ActorImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ActorName = styled.h4`
  margin: 10px 0;
`;

export const ActorRole = styled.p`
  color: #888;
`;
