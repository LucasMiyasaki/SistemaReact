import { Button, Container, Row, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
    return(
        <Container>
            <Button style={{marginBottom: "10px"}} type="button" onClick={()=>{
                props.estado(true);
            }}>Novo Produto</Button>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Código</th>
                            <th>Validade</th>
                            <th>Fabricação</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.lista.map((prod, index) => (
                                <tr key={index}>
                                    <td>{prod.nome}</td>
                                    <td>{prod.marca}</td>
                                    <td>{prod.codigo}</td>
                                    <td>{prod.validade}</td>
                                    <td>{prod.fabricacao}</td>
                                    <td>R$ {prod.preco}</td>
                                    <td>{prod.descricao}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}