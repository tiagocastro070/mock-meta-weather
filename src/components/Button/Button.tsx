import * as Styles from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ type, children, ...attrs }: IButtonProps) {
  return (
    <Styles.ButtonContainer type={type} {...attrs}>
      {children}
    </Styles.ButtonContainer>
  );
}

export default Button;
