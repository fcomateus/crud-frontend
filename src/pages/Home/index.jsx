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
            id: 1,
            name:"João da Silva",
            age:"32",
            dt_nasc:"20/06/1991",
            cep:"999999999",
            street:"Rua das Flores",
            number:"00"
        },
        {
            id: 2,
            name:"Joaquina Pereira",
            age:"20",
            cep:"111111111",
            dt_nasc:"15/10/2002",
            street:"Rua das Folhas",
            number:"01"
        },
    ];

    function handleClickButtonEdit(id_person) {
        console.log(id_person);
        
        //navigate("/edit");
    }

    function handleClickButtonCreate() {
        navigate("/create");
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
                    onClick={handleClickButtonCreate}
                />
            </Search>
            
            <Content>

                {
                    mock.map( (person, index) => {
                        return(
                            <Info
                                key={person.id}
                            >
                                <section>
                                    <p>Nome: {person.name}</p>
                                    <p>Idade: {person.age}</p>
                                    <p>Data de nascimento: {person.dt_nasc}</p>
                                </section>

                                <section>
                                    <button
                                        onClick={() => {handleClickButtonEdit(person.id)}}
                                    >
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