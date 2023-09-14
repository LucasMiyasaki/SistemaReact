import { Button, Container, Table, Row } from "react-bootstrap";

export default function TabelaClientes(props) {
    return (
        <Container>
            <Button style={{marginBottom: "10px"}} type="button" onClick={()=>{
                props.exibirFormulario(true);
            }}>Novo Cliente</Button>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>CPF</th>
                            <th>Nome</th>
                            <th>Endereço/Nº</th>
                            <th>Cidade/UF</th>
                            <th>CEP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.lista.map((cliente, index) => (
                                <tr key={index}>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.endereco} / {cliente.numero}</td>
                                    <td>{cliente.cidade} / {cliente.uf}</td>
                                    <td>{cliente.cep}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}