import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adicionar, atualizar} from '../../redux/clienteReducer';

export default function FormCadCliente(props) {
    const clienteVazio = {
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: 'SP',
        cep: ''
    }
    const estadoInicialCliente = props.clienteEdit;

    const [cliente, setCliente] = useState(estadoInicialCliente);
    const [formValido, setFormValido] = useState(false);

    const {status, mensagem, listaClientes} = useSelector((state) => state.cliente);
    const dispatch = useDispatch();

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCliente({...cliente,[componente.name]:componente.value});
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if(form.checkValidity()) {
            //todos os campos preenchidos
            //mandar os dados para o backend
            if(!props.edicao) {
                //props.setLista([...props.lista,client]);

                dispatch(adicionar(cliente));
                window.alert('Cliente cadastrado com sucesso!');
            }
            else {
                //props.setLista([...props.lista.filter((item) => item.cpf !== client.cpf),client]);

                dispatch(atualizar(cliente));

                props.setEdicao(false);
                props.setClienteEdit(clienteVazio);
                window.alert('Cliente alterado com sucesso!');
            }

            setCliente(clienteVazio);
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
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="CPF:"
                                className="mb-3"
                            >

                                <Form.Control 
                                    type="text" 
                                    placeholder="000.000.000-00" 
                                    id="cpf" 
                                    name="cpf"
                                    onChange={manipularMudancas}
                                    value = {cliente.cpf}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cpf!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome Completo:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nome completo" 
                                    id="nome" 
                                    name="nome" 
                                    onChange={manipularMudancas}
                                    value = {cliente.nome}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Avenida/Rua/Alameda/Viela ..." 
                                    id="endereco" 
                                    name="endereco"
                                    onChange={manipularMudancas}
                                    value={cliente.endereco}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                label="Número"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Nº" 
                                    id="numero" 
                                    name="numero" 
                                    onChange={manipularMudancas}
                                    value={cliente.numero}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Bairro:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Bairro/Vila..." 
                                    id="bairro" 
                                    name="bairro" 
                                    onChange={manipularMudancas}
                                    value={cliente.bairro}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                label="Cidade"
                                className="mb-3"
                            >
                                <Form.Control 
                                type="text" 
                                placeholder="Cidade" 
                                id="cidade" 
                                name="cidade"
                                onChange={manipularMudancas}
                                value={cliente.cidade}
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel label="UF:">
                            <Form.Select 
                                aria-label="Unidades Federativas brasileiras"
                                id='uf'
                                name='uf'
                                onChange={manipularMudancas}
                                value={cliente.uf}
                                required>
                                <option defaultValue="SP">São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="00000-000" 
                                    id="cep" 
                                    name="cep" 
                                    onChange={manipularMudancas}
                                    value={cliente.cep}
                                    required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{props.edicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.exibirFormulario(false);
                            props.setEdicao(false);
                            props.setClienteEdit(clienteVazio);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}