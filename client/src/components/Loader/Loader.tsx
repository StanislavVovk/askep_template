import { Spinner } from 'react-bootstrap'

export const Loader = () => {
  return (
    <div
      className={
        'justify-content-center align-items-center d-flex flex-column'
      }>
      <Spinner animation={'border'} variant={'primary'} />
      <h1>Wait a while</h1>
    </div>
  )
}
