import{ useNavigate } from 'react-router-dom';

export function Edit() {
    const navigate = useNavigate();    

    function handleClick() {
        navigate("/")
    }

    return(
        <div>
            <p>Página de edição</p>
            <button onClick={handleClick}>Voltar para Home</button>
        </div>
    )
}