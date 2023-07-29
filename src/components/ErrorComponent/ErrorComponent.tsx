import type { FC } from 'react';
import { Container } from 'react-bootstrap';

export const ErrorComponent: FC = () => {
  return (
    <Container className={'justify-content-center align-items-center'}>
      <h1 className={'fw-bold'}>Whoops something went wrong</h1>
    </Container>
  );
};
