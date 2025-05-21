import { Card } from 'react-bootstrap';

export default function DashBoardCard({ title, value, subtitle }) {
  return (
    <Card className="text-center shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h2>{value}</h2>
        {subtitle && <p className="text-muted">{subtitle}</p>}
      </Card.Body>
    </Card>
  );
}