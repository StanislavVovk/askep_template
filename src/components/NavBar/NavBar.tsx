import { Container, Nav, Navbar } from 'react-bootstrap';
import { RoutesEnum } from '../../common/common';

export const NavBar = () => {
  return (
    <Navbar variant={'dark'} bg={'dark'} sticky={'top'}>
      <Container>
        <Navbar.Brand className={'fw-bold fs-3'} href={RoutesEnum.TEMPLATE_HUB}>
          Template Generator
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className={'fw-bold'} href={RoutesEnum.TEMPLATE_HUB}>
            To Hub
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
