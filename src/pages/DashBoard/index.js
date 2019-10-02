import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function DashBoard() {
  api.get('appointments');
  return <h1>DashBoard</h1>;
}
