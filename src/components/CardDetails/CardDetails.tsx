import * as Styles from "./styles";
import Field, { IFieldProps } from "../Field/Field";

interface ICardDetailsProps {
  name: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement>;
  value: string;
  fields: IFieldProps[];
}

function CardDetails({ name, icon, value, fields }: ICardDetailsProps) {
  const renderFields = () => {
    return fields.map((field) => (
      <Field key={field.label} label={field.label} value={field.value} />
    ));
  };

  return (
    <Styles.Card>
      <Styles.CardTitle>{name}</Styles.CardTitle>
      <Styles.CardImage {...icon} width={75} height={75} />
      <Styles.CardTemperature>
        {value} <span className="sr-only">degrees</span>
      </Styles.CardTemperature>
      <Styles.CardFieldsContainer>{renderFields()}</Styles.CardFieldsContainer>
    </Styles.Card>
  );
}

export default CardDetails;
