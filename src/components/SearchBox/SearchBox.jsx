import React, { useState } from 'react';
import { Wrapper, Input, Icon, Button } from './SearchBox.styled';

const SearchBox = ({ value, onSubmit }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleKeyUp = event => {
    if (event.key === 'Enter') {
      onSubmit(inputValue);
    }
  };

  const handleSearchClick = () => {
    onSubmit(inputValue);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
      <Button onClick={handleSearchClick}>
        <Icon />
      </Button>
    </Wrapper>
  );
};

export default SearchBox;
