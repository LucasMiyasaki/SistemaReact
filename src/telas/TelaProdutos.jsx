import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { useState } from "react";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";

export default function TelaProdutos(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaProdutos, setListaProdutos] = useState([])

    return(
        <Container>
            <Pagina>
                {
                    exibirFormulario ?
                    <FormCadProduto
                        lista={listaProdutos}
                        setLista={setListaProdutos}
                        estado={setExibirFormulario}/>
                    : <TabelaProdutos
                        lista={listaProdutos}
                        estado={setExibirFormulario}/>
                }
            </Pagina>
        </Container>
    );
}