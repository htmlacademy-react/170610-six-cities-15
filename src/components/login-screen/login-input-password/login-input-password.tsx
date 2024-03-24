type LoginInputPasswordProps = {
  passwordRef: React.RefObject<HTMLInputElement>;
};

function LoginInputPassword({
  passwordRef,
}: LoginInputPasswordProps): JSX.Element {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">Password</label>
      <input
        className="login__input form__input"
        type="password"
        pattern="(?=.*\d)(?=.*[a-zA-Z]).{2,}"
        title="Contains one letter and one digit"
        name="password"
        placeholder="Password"
        ref={passwordRef}
        required
        data-testid="passwordElement"
      />
    </div>
  );
}

export default LoginInputPassword;
