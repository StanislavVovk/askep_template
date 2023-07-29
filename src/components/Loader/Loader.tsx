import { Spinner } from 'react-bootstrap';

export const Loader = () => {
  return (
    <div
      className={'justify-content-center align-items-center d-flex flex-column'}
    >
      <Spinner variant={'primary'} animation={'border'} />
      <h1>Wait a while</h1>
    </div>
  );
};
