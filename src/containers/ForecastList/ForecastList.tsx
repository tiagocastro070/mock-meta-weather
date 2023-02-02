import { CardDetails } from "../../components/CardDetails";
import { ICityPayload } from "../../types";
import * as Styles from "./styles";

interface IForecastListProps {
  list?: ICityPayload[];
}

function ForecastList({ list }: IForecastListProps) {
  return (
    <Styles.Container>
      {list?.map((detail) => {
        const date = new Date(detail.date);
        const day = new Intl.DateTimeFormat(navigator.language, {
          weekday: "long",
        }).format(date);
        const image = `https://developer.foreca.com/static/images/symbols/${detail.symbol}.png`;
        const icon = {
          src: image,
          alt: detail.symbolPhrase,
        };
        const averageTemp = Math.ceil((detail.maxTemp + detail.minTemp) / 2);
        const maxTemp = { label: "Max temp", value: `${detail.maxTemp}º` };
        const minTemp = { label: "Min temp", value: `${detail.minTemp}º` };
        const windSpeed = {
          label: "Wind speed",
          value: `${detail.maxWindSpeed} km/h`,
        };
        const precipProb = {
          label: "Precipitation",
          value: `${detail.precipProb}%`,
        };

        return (
          <CardDetails
            key={detail.date}
            name={day}
            icon={icon}
            value={`${averageTemp}º`}
            fields={[maxTemp, minTemp, windSpeed, precipProb]}
          />
        );
      })}
    </Styles.Container>
  );
}

export default ForecastList;
