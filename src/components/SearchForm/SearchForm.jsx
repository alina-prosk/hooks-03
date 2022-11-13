import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const heandleChange = e => {
    setSearchQuery(e.target.value);
  };

  const heandelSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <SearchFormStyled onSubmit={heandelSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        defaultValue={'DEFAULT'}
        aria-label="select"
        name="region"
        required
        onChange={heandleChange}
      >
        <option value="DEFAULT" disabled>
          Choose a salutation ...
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
      1``
    </SearchFormStyled>
  );
};
