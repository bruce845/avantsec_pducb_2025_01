import { Nav } from 'react-bootstrap';
import { FaBalanceScale } from 'react-icons/fa';

export default function CustomSidebar() {
  return (
    <div className="bg-light p-3" style={{ width: '250px', height: '100vh' }}>
      <div className="d-flex align-items-center mb-4">
        <FaBalanceScale size={24} className="me-2" />
        <h4 className="m-0">StyxJUD</h4>
      </div>
      <Nav className="flex-column">
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Processos</Nav.Link>
        <Nav.Link href="#">Clientes</Nav.Link>
        <Nav.Link href="#">Financeiro</Nav.Link>
        <Nav.Link href="#">Relatórios</Nav.Link>
      </Nav>
    </div>
  );
}