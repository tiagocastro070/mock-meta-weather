import * as Styles from "./styles";

export interface IFieldProps {
  label: string;
  value: string;
}

function Field({ label, value }: IFieldProps) {
  return (
    <Styles.FieldContainer>
      <span>{label}:</span> {value}
    </Styles.FieldContainer>
  );
}

export default Field;
