import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from "../service/country-service";
import { useEffect, useState } from 'react';



export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
  try {
    const data = await getCountries()
    setCountries(data)
  } catch (error) {
    setError(error.message)
  }
    }
    fetchData()

  }, [])
  console.log(countries);
  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
