import CustomSidebar from '../components/CustomSidebar';
import DashboardCard from '../components/DashBoardCard';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="d-flex">
      <CustomSidebar/>
      <div className="flex-grow-1 p-4">
        <h3>Bem-vindo!</h3>
        <p className="text-muted">Acompanhe os últimos andamentos e mantenha seus processos organizados</p>

        <Row className="my-4">
          <Col md={3}><DashboardCard title="Processos Ativos" value="142" subtitle="↑ 12% desde o mês passado" /></Col>
          <Col md={3}><DashboardCard title="Prazos Hoje" value="8" subtitle="↑ 3 urgentes" /></Col>
          <Col md={3}><DashboardCard title="Clientes Ativos" value="67" subtitle="↑ 5 novos este mês" /></Col>
          <Col md={3}><DashboardCard title="Andamentos" value="24" subtitle="Atualizados nas últimas 24h" /></Col>
        </Row>

      </div>
    </div>
  );
}

export default App;