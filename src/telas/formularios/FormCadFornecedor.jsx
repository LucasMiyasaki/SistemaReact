import { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adicionarForn, atualizarForn } from '../../redux/fornReducer';

export default function FormCadFornecedor(props) {
    const fornVazio = {
        cod: '',
        nome: '',
        cidade: ''
    }
    const estadoInicialForn = props.fornEdit;

    const [forn, setForn] = useState(estadoInicialForn);
    const [formValido, setFormValido] = useState(false);

    const { status, mensagem, listaFornecedores } = useSelector((state) => state.fornecedor);
    const dispatch = useDispatch();

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setForn({ ...forn, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.edicao) {
                dispatch(adicionarForn(forn));
                window.alert('Fornecedor cadastrado com sucesso!');
            }
            else {
                dispatch(atualizarForn(forn));

                props.setEdicao(false);
                props.setFornEdit(fornVazio);
                window.alert('Fornecedor alterado com sucesso');
            }

            setForn(fornVazio);
            setFormValido(false);
        }
        else
            setFormValido(true);

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValido} onSubmit={manipularSubmissao}>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Código do fornecedor:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Informe o código do fornecedor"
                                    id="cod"
                                    name="cod"
                                    onChange={manipularMudancas}
                                    value={forn.cod}
                                    disabled={props.edicao ? true : false}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o código do fornecedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Nome:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Informe o nome"
                                    id="nome"
                                    name="nome"
                                    onChange={manipularMudancas}
                                    value={forn.nome}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome do fornecedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel label="Cidade:" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Informe a cidade"
                                    id="cidade"
                                    name="cidade"
                                    onChange={manipularMudancas}
                                    value={forn.cidade}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade do fornecedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={props.edicao ? "warning" : "primary"}>{props.edicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                            props.exibirFormulario(false);
                            props.setEdicao(false);
                            props.setFornEdit(fornVazio);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container >
    );
}