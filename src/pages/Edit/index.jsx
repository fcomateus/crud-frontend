import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Container, Section, InputWrapper, Form } from './styles'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';


export function Edit() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [dt_nasc, setDataNascimento] = useState("");
    const [idade, setIdade] = useState("");
    const [cep, setCEP] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");

    const params = useParams();

    async function handleSave(){
        if([nome, dt_nasc, idade, cep, rua, numero, bairro].includes("")) {
            return alert("Há campos não preenchidos!");
        } 

        const dados = {
            nome,
            dt_nasc,
            idade,
            cep,
            rua,
            numero,
            bairro
        }

        try {
            api.put(`/pessoas/${params.id}`, dados);
            alert("Dados salvos!")
        } catch (error) {
            alert("Não foi possível salvar edição");
        }

        navigate(-1);
    }

    function handleChangeBirthDate(e){
        setDataNascimento(e.target.value);

        const dtNascimentoInput = new Date(e.target.value);
        const dtAtual = new Date();
        const diferenca = dtAtual.getTime() - dtNascimentoInput.getTime();

        const idadeCalculada = Math.floor(diferenca/(1000 * 60 * 60 * 24 * 365.25));
        setIdade(idadeCalculada);
    }

    const [dataAtual, setDataAtual] = useState("");

    useEffect(() => {
        //carregar dados do usuário selecionado
        async function fetchPessoas() {
            try {
                const response = await api.get(`/pessoas/${params.id}`);
                setNome(response.data.nome);
                setIdade(response.data.idade);

                //tratando data vinda do banco de dados
                let data = response.data.dt_nasc;
                data = new Date(data);

                const ano = data.getFullYear();
                const mes = data.getMonth()+1;
                const dia = data.getDate();

                const mesFormatado = mes < 10 ? `0${mes}`: mes;
                const diaFormatado = dia < 10 ? `0${dia}`: dia;

                const dataTratada = `${ano}-${mesFormatado}-${diaFormatado}`;
                setDataNascimento(dataTratada)


                setCEP(response.data.cep);
                setRua(response.data.rua);
                setNumero(response.data.numero);
                setBairro(response.data.bairro);
            } catch(error) {
                alert("Não foi possível trazer os dados do usuário");
            }

        }
        fetchPessoas();

        //colocando limite máximo de seleção de data
        const data = new Date();

        const ano = data.getFullYear();
        const mes = data.getMonth()+1;
        const dia = data.getDate();

                        
        const mesFormatado = mes < 10 ? `0${mes}`: mes;
        const diaFormatado = dia < 10 ? `0${dia}`: dia;

        const dataTratada = `${ano}-${mesFormatado}-${diaFormatado}`

        setDataAtual(dataTratada);

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
                                min="1900-01-01"
                                max={dataAtual}
                                onChange={e => handleChangeBirthDate(e)}
                                />

                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="idade">Idade</label>
                            <Input
                                id="idade"
                                value={idade}
                                type="number"
                                min="0"
                                disabled
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
                                maxLength="8"
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
                                maxLength="6"
                                onChange={e => setNumero(e.target.value)}
                                />
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="bairro">Bairro</label>
                            <Input
                                id="bairro"
                                value={bairro}
                                onChange={e => setBairro(e.target.value)}
                                />
                        </InputWrapper>
                        
                    </Section>  

                    <Button
                        title="Salvar"
                        className="submit"
                        onClick={handleSave}
                    />

                </Form>

            </Container>      
        </>
    )
}