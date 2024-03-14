import { FormEvent, useEffect, useRef } from 'react';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { redirectToRoute } from '../../../store/action.ts';
import { loginAction } from '../../../store/api-actions';
import { getAuthorizationStatus } from '../../../store/user-process/user-process.selectors';
import LoginInputEmail from '../login-input-email/login-input-email';
import LoginInputPassword from '../login-input-password/login-input-password';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [authorizationStatus, dispatch]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  return (
    <form
      className="login__form form"
      onSubmit={handleSubmit}
      action="#"
      method="post"
    >
      <LoginInputEmail loginRef={loginRef} />
      <LoginInputPassword passwordRef={passwordRef} />
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
