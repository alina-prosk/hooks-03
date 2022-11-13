import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams()
  const [state, setState] = useState({flag: ""})
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const location = useLocation()
  const backLinkRef = location.state?.from ?? "/"
  useEffect(() => {
    setIsLoading(true)
    console.log(isLoading);
      const getCountry = async () => {
        try {
          
        const data = await fetchCountry(countryId)
        setState(data)
      } catch (error) {
        setError(error)
        }
      finally {
        setIsLoading(false)
        }
    }
      getCountry()
  }, [countryId])
  
  const { flag, capital, country, countryIds, languages, population } = state

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <button><Link to={backLinkRef}>Go back</Link></button>
        <CountryInfo flag={flag} capital={capital} country={country} id={countryIds} languages={languages} population={population} />
      </Container>
    </Section>
  );
};
