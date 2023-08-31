import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

// export const Icon = styled(HiSearch)`
//   width: 20px;
//   height: 20px;
//   position: absolute;
//   right: 6px;
// `;

export const Icon = styled(HiSearch)`
  font-size: 18px;
`;

export const Button = styled.button`
  position: absolute;
  right: 6px;
  background-color: transparent;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;
