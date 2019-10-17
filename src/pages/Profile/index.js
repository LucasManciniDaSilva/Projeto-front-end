import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Your Fullname" />
        <Input name="email" type="email" placeholder="Your email" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="your current password"
        />
        <Input type="password" name="newpassword" placeholder="New Password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />

        <button type="submit">Update Profile</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do Beautapp
      </button>
    </Container>
  );
}
