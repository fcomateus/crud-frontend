import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Container, Section, InputWrapper, Form } from './styles'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export function Edit() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [dt_nasc, setDataNascimento] = useState("");
    const [idade, setIdade] = useState(0);
    const [cep, setCEP] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");


    function mostraEstados(){
        console.log(nome);
        console.log(cep);
    }

    // function handleBirthDate(e){
    //     setDataNascimento(e.target.value);
    //     console.log(dt_nasc);

    //     const dt_nascimento = new Date(dt_nasc);
    //     const dt_atual = new Date();
    //     const diferenca = dt_atual.getTime() - dt_nascimento.getTime();

    //     const age = Math.floor(diferenca/(1000 * 60 * 60 * 24 * 365.25));

    //     setIdade(age);
    // }

    useEffect(() => {
        //carregar dados do usuário selecionado


    }, [])

    return (
        <>
            <Header/>
            
            <Container>
                
                <h1>Edição de dados</h1> 

                <Form>

                    <Section
                        className="personal"
                    >
                        <h3>Dados pessoais:</h3>

                        <InputWrapper>
                            <label htmlFor="nome">Nome</label>
                            <Input
                                id="nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="dt_nasc">Data de nascimento</label>
                            <Input
                                type="date"
                                id="dt_nasc"
                                value={dt_nasc}
                                // onChange={e => handleBirthDate(e)}
                                onChange={e => setDataNascimento(e.target.value)}
                                />

                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="idade">Idade</label>
                            <Input
                                id="idade"
                                value={idade}
                                type="number"
                                min="0"
                                // disabled
                                onChange={e => setIdade(e.target.value)}
                                />
                        </InputWrapper>
                    </Section> 

                    <Section
                        className="address">
                        <h3>Endereço:</h3>

                        <InputWrapper>
                            <label htmlFor="cep">CEP</label>
                            <Input
                                id="cep"
                                value={cep}
                                onChange={e => setCEP(e.target.value)}
                                />
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="rua">Rua</label>
                            <Input
                                id="rua"
                                value={rua}
                                onChange={e => setRua(e.target.value)}
                                />

                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="numero">Número</label>
                            <Input
                                id="numero"
                                value={numero}
                                onChange={e => setNumero(e.target.value)}
                                />
                        </InputWrapper>
                    </Section>  

                    <Button
                        title="Salvar"
                        className="submit"
                        onClick={mostraEstados}
                    />

                </Form>

            </Container>      
        </>
    )
}