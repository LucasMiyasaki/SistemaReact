import Rodape from "./Rodape";
import Menu from "./Menu";
import { Container } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Menu />
            <Container>
                <div style={{ marginTop: "30px" }}>
                    {
                        // filhos da página
                    }
                    {props.children}
                </div>
            </Container>
            <Rodape conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00" />
        </>
    )
}

