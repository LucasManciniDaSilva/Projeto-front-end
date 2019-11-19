import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
// eslint-disable-next-line import/no-unresolved
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Required Email'),
  password: Yup.string().required('Required Password'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Informe seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Informe sua senha"
        />
        <button type="submit">{loading ? 'Carregando' : 'Acessar'}</button>
        <Link to="/register">Se registre agora</Link>
      </Form>
    </>
  );
}
