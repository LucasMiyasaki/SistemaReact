import { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap";

export default function FormCadProduto(props) {
    const estadoInicialProduto = {
        nome:'',
        marca:'',
        codigo:'',
        validade:'',
        fabricacao:'',
        preco:'',
        descricao:''
    }

    const [produto, setProduto] = useState(estadoInicialProduto);
    const [formValido, setFormValido] = useState(false);

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setProduto({...produto,[componente.name]:componente.value});
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if(form.checkValidity()) {
            let prod = {
                nome: document.getElementById("nome").value,
                marca: document.getElementById("marca").value,
                codigo: document.getElementById("codigo").value,
                validade: document.getElementById("validade").value,
                fabricacao: document.getElementById("fabricacao").value,
                preco: document.getElementById("preco").value,
                descricao: document.getElementById("descricao").value
            }

            props.setLista([...props.lista,prod]);
            setProduto(estadoInicialProduto);
            setFormValido(false);
        }
        else
            setFormValido(true);

        e.stopPropagation();
        e.preventDefault();
    }

    return(
        <Container>
            <Form noValidate validated={formValido} onSubmit={manipularSubmissao}>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Nome do produto:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Informe o nome do produto"
                                    id="nome"
                                    name="nome"
                                    onChange={manipularMudancas}
                                    value={produto.nome}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Marca:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Informe a marca"
                                    id="marca"
                                    name="marca"
                                    onChange={manipularMudancas}
                                    value={produto.marca}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a marca do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Código:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Informe a marca"
                                    id="codigo"
                                    name="codigo"
                                    onChange={manipularMudancas}
                                    value={produto.codigo}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o código do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Validade:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="dd/mm/aaaa"
                                    id="validade"
                                    name="validade"
                                    onChange={manipularMudancas}
                                    value={produto.validade}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a data de validade do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Fabricação:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="dd/mm/aaaa"
                                    id="fabricacao"
                                    name="fabricacao"
                                    onChange={manipularMudancas}
                                    value={produto.fabricacao}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a data de fabricação do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Preço:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Informe o preço"
                                    id="preco"
                                    name="preco"
                                    onChange={manipularMudancas}
                                    value={produto.preco}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preço do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label="Descrição:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    id="descricao"
                                    name="descricao"
                                    onChange={manipularMudancas}
                                    value={produto.descricao}
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.estado(false)
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}