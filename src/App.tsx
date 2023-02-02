import { useEffect, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { CitiesList } from "./containers/CitiesList";
import { ForecastList } from "./containers/ForecastList";
import { Loading } from "./components/Loading";
import api from "./services/api";
import { CITIES_LIST } from "./services/cities-list";
import { useLocalStorage } from "./helpers";
import { IState } from "./types";
import { stateReducer, TYPES } from "./reducer";

const INITIAL_STATE: IState = {
  loading: true,
  activeCity: null,
  cities: {},
};

function App() {
  const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);

  // Saving user's city preference on local storage
  const [city, setCity] = useLocalStorage("city", CITIES_LIST[0]);

  const fetchCityForecast = async (id: number, city: string) => {
    // In case the city has been fetched before, just get the city instead of
    // making a new request and wait for the result.
    if (state.cities[city]) {
      dispatch({ type: TYPES.GET_CITY, payload: city });
      setCity({ id, name: city });
      return;
    }

    dispatch({ type: TYPES.TOGGLE_LOADING });

    // If the user tries to fetch a city for the first time, we store it in state
    // in order to reuse that data later on.
    api
      .get(`/daily/${id}`, {
        params: {
          tempunit: "C",
          windunit: "KMH",
          periods: "5",
          dataset: "full",
        },
      })
      .then((res) => {
        dispatch({
          type: TYPES.STORE_CITY,
          payload: { id, city, data: res.data.forecast },
        });
        setCity({ id, name: city });
      })
      .catch((error) => {
        dispatch({ type: TYPES.TOGGLE_LOADING });
        console.error(`Error while fetching forecast: ${error}`);
      });
  };

  useEffect(() => {
    const { id, name } = city;

    // Make the first api call automatically on component mounting
    fetchCityForecast(id, name);
  }, []);

  const activeCityData = state.cities[state.activeCity as string];

  return (
    <ThemeProvider theme={theme}>
      <div aria-busy={state.loading} className="app">
        <CitiesList
          activeCity={state.activeCity as string}
          fetchCityForecast={fetchCityForecast}
        />
        <div className="content">
          {state.loading || !state.activeCity ? (
            <Loading />
          ) : (
            <ForecastList list={activeCityData} />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
