import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RoutesEnum } from 'common/common'

export const NavBar = () => {
  return (
    <Navbar variant={'dark'} bg={'dark'} sticky={'top'}>
      <Container>
        <Link to={RoutesEnum.HOME}>
            Template Hub
        </Link>
        <Nav className="me-auto">
          <Link to={RoutesEnum.HOME}>
          To hub
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
