import React from "react";
import './styles/header.css'; // Caminho relativo à raiz do projeto
import { Navbar, Container, Button, Form, FormControl } from 'react-bootstrap';
import { FaBell, FaCog, FaSearch, FaMoon } from 'react-icons/fa';

export default function Header() {
    return (
        <Navbar bg="white" className="shadow-sm mb-4" expand="lg">
            <Container fluid className="justify-content-between">
                <Navbar.Brand className="fw-bold">Dashboard</Navbar.Brand>

                <div className="d-flex align-items-center gap-3">
                    <Button variant="outline-secondary" size="sm">
                        <FaCog />
                    </Button>

                    <Button variant="outline-secondary" size="sm">
                        <FaMoon />
                    </Button>

                    <Button variant="outline-secondary" size="sm">
                        <FaBell />
                    </Button>

                    <Form className="d-flex" style={{ maxWidth: '200px' }}>
                        <FormControl type="search" placeholder="Buscar..." className="me-2" size="sm" />
                        <Button variant="primary" size="sm"><FaSearch /></Button>
                    </Form>

                    <Button variant="primary">Novo Processo</Button>
                </div>
            </Container>
        </Navbar>
    );
}