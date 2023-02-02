import { Button } from "../../components/Button";
import { capitalize } from "../../helpers";
import { CITIES_LIST } from "../../services/cities-list";
import * as Styles from "./styles";

interface ICitiesListProps {
  activeCity: string;
  fetchCityForecast: (id: number, city: string) => Promise<void>;
}

function CitiesList({ activeCity, fetchCityForecast }: ICitiesListProps) {
  const handleClickCity = (event: React.MouseEvent<HTMLButtonElement>) => {
    const cityID = +(event.currentTarget.getAttribute("data-city-id") ?? 0);
    const cityName = event.currentTarget.getAttribute(
      "data-city-name"
    ) as string;

    // Only change state if the clicked city is not the active city
    if (cityName !== activeCity) {
      // Call parent function in order to update parent state.
      fetchCityForecast(cityID, cityName);
    }
  };

  return (
    <Styles.List>
      {CITIES_LIST.map(({ id, name }) => (
        <li key={name.replace(/\s/g, "-")}>
          <Button
            data-city-id={id}
            data-city-name={name}
            aria-pressed={activeCity === name ? true : false}
            className={activeCity === name ? "is-active" : undefined}
            onClick={handleClickCity}
          >
            {capitalize(name)}
          </Button>
        </li>
      ))}
    </Styles.List>
  );
}

export default CitiesList;
