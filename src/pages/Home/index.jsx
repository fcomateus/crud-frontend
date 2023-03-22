import{ useNavigate } from 'react-router-dom';

import { Container, Search, Content } from './styles';
import { FiEdit } from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Info } from '../../components/Info';

export function Home() {
    const navigate = useNavigate();
   
    const teste = "Texto";

    const mock = [
        {
            name:"João da Silva",
            age:"32",
            cep:"999999999",
            street:"Rua das Flores",
            number:"00"
        },
        {
            name:"Joaquina Pereira",
            age:"20",
            cep:"111111111",
            street:"Rua das Folhas",
            number:"01"
        },
    ];

    function handleClick() {
        navigate("/edit");
    }

    return(
        <Container>
            <h1>InfoMarket - CRUD</h1>

            <Search>        
                <Input
                    placeholder="Pesquise por nome"
                ></Input>

                <Button
                    title="Pesquisar"
                />

                <Button
                    title="Criar"
                />
            </Search>
            
            <Content>
                <Info>
                    <section>
                        <p>Nome: João da Silva</p>
                        <p>Idade: 32 anos</p>
                    </section>

                    <section>
                        <button>
                            <FiEdit/>
                        </button>
                        <p>Endereço:</p>
                        <p>CEP: 999999-999</p>
                        <p>Rua: Rua das Flores</p>
                        <p>Número: {teste}</p>
                    </section>
                </Info>

                {
                    mock.map( (person, index) => {
                        return(
                            <Info
                                key={index}
                            >
                                <section>
                                    <p>Nome: {person.name}</p>
                                    <p>Idade: {person.age}</p>
                                </section>

                                <section>
                                    <button>
                                        <FiEdit/>
                                    </button>
                                    <p>Endereço:</p>
                                    <p>CEP:{person.cep}</p>
                                    <p>Rua: {person.street}</p>
                                    <p>Número: {person.number}</p>

                                </section>
                            </Info>
                        )
                    })
                }
            </Content>

            {/* <button onClick={handleClick}>Ir para edição</button> */}
        </Container>
    )   
}