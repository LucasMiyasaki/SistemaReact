import Rodape from "./Rodape";
import Menu from "./Menu";
import { Container } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Container>
                <Menu />
                <div style={{marginTop: "30px"}}>
                    {
                        // filhos da página
                    }
                    {props.children}
                </div>
                <Rodape conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00"/>
            </Container>
        </>
    )
}

