import { RoutesEnum, useAppDispatch } from 'common/common'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { logout } from 'store/auth/actions/actions'

export const NavBar = () => {
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    await dispatch(logout())
  }

  return (
    <Navbar bg={'dark'} sticky={'top'} variant={'dark'}>
      <Container fluid>
        <Navbar.Collapse>
          <Navbar.Brand className={'fw-bold fs-3'} href={RoutesEnum.TEMPLATE_HUB}>
            Template Hub
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className={'fw-bold'} href={RoutesEnum.TEMPLATE_HUB}>
              To hub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Button
          onClick={handleLogout}>
            logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  )
}
