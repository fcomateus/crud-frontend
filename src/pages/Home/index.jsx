import{ useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Container, Search, Content } from './styles';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Info } from '../../components/Info';

import { api } from '../../services/api';

export function Home() {
    const [pessoas, setPessoas] = useState([]);
    const [nome, setNome] = useState("");

    const navigate = useNavigate();

    const mock = [
        {
            id: 1,
            nome:"João da Silva",
            idade:"32",
            dt_nasc:"20/06/1991",
            cep:"999999999",
            rua:"Rua das Flores",
            numeror:"00",
            bairro:"Edson Queiroz"
        },
        // {
        //     id: 2,
        //     nome:"Joaquina Pereira",
        //     idade:"20",
        //     dt_nasc:"15/10/2002",
        //     cep:"111111111",
        //     rua:"Rua das Folhas",
        //     numero:"01",
        //     bairro:"Jardim das Oliveiras"
        // },
    ];

    function handleClickButtonEdit(id_pessoa) {
        navigate(`/edit/${id_pessoa}`);
    }

    function handleClickButtonCreate() {
        navigate("/create");
    }

    async function fetchPessoas() {
        const response = await api.get(`/pessoas?nome=${nome}`)
        setPessoas(response.data)
        console.log(response.data);
    }
    
    async function handleClickButtonDelete(id_pessoa) {
        const confirm = window.confirm("Quer deletar esse registro?");

        if(confirm){
            await api.delete(`/pessoas/${id_pessoa}`)
            setNome("");

            fetchPessoas();
        }
    }

    useEffect(() => {
        fetchPessoas();
    }, [nome]);

    return(
        <Container>
            <h1>InfoMarket - CRUD</h1>
            <Search>        
                <Input
                    placeholder="Pesquise por nome"
                    onChange={e => setNome(e.target.value)}
                ></Input>
                
                <Button
                    title="Criar"
                    onClick={handleClickButtonCreate}
                />
            </Search>
            
            <Content>

                {
                    //mock.map
                    pessoas.map( (pessoa, index) => {
                        return(
                            <Info
                                key={pessoa.id}
                            >
                                <section>
                                    <p>Nome: {pessoa.nome}</p>
                                    <p>Idade: {pessoa.idade}</p>
                                    <p>Data de nascimento: {pessoa.dt_nasc}</p>
                                </section>

                                <section>
                                    <button
                                        onClick={() => {handleClickButtonEdit(pessoa.id)}}
                                    >
                                        <FiEdit/>
                                    </button>
                                    <p>Endereço:</p>
                                    <p>CEP:{pessoa.cep}</p>
                                    <p>Rua: {pessoa.rua}</p>
                                    <p>Número: {pessoa.numero}</p>
                                    <p>Bairro: {pessoa.bairro}</p>

                                    <button
                                        onClick={() => {handleClickButtonDelete(pessoa.id)}}
                                    >
                                        <RiDeleteBin6Line/>
                                    </button>

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