import { Container } from './styles'

export function Input({...rest}) {
    return(
        <Container>
            <input
                type="text" 
                {...rest}
            />
        </Container>
    )
}