import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from '../service/country-service';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const onHeandelSubmit = query => {
    setQuery(query);
  };

  useEffect(() => {
    const getRegion = async () => {
      try {
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getRegion();
  }, [query]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHeandelSubmit} />
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
