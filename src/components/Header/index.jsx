import { Container } from "./styles";
import { MdOutlineArrowBack } from 'react-icons/md'

import { useNavigate } from "react-router-dom";


export function Header() {

    const navigate = useNavigate();

    function handleClickBack() {
        navigate(-1);
    }

    return(
        <Container>
            <button
                onClick={handleClickBack}
            >
                <MdOutlineArrowBack/>
            </button>
        </Container>
    )
}