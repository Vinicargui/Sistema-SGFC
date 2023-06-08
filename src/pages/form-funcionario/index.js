import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, FormGroup, Label, Input } from "reactstrap";
import Loading from "../loading";
import Mensagem from "../../componentes/messagem";
import "./style.css";

function FormFuncionario() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [removeLoad, setLoad] = useState(false);
  const [removeMsg, setMsg] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("conectando");

    const funcionario = {
      nome,
      cargo,
      telefone,
      bairro,
      rua,
      numero,
    };

    try {
      await axios.post("http://localhost:3002/funcionario", funcionario);

      setLoad(true);
      setMsg(true);
      setTimeout(setLoad, 1000);
      if (setLoad == true) {
        setLoad = removeLoad;
      }

      setTimeout(setMsg, 1000);
      if (setMsg == true) {
        setMsg = removeMsg;
      }

      setNome("");
      setBairro("");
      setCargo("");
      setNumero("");
      setRua("");
      setTelefone("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formContainer">
        {removeLoad && <Loading />}
        {removeMsg && <Mensagem />}
        <h1>Cadastrar novo funcionario</h1>
        <FormGroup className="campos">
          <Label for="nomeFuncionario">Nome</Label>
          <Input
            required
            value={nome}
            type="text"
            name="nome"
            id="nomeFuncionario"
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />
        </FormGroup>
        <FormGroup className="campos">
          <Label for="cargoFuncionario">Cargo</Label>
          <Input
            required
            value={cargo}
            type="text"
            name="cargo"
            onChange={(e) => setCargo(e.target.value)}
            id="cargoFuncionario"
            placeholder="Digite o cargo"
          />
        </FormGroup>
        <FormGroup className="campo-telefone">
          <Label for="telefoneFuncionario">telefone</Label>
          <Input
            required
            value={telefone}
            type="tel"
            name="telefone"
            onChange={(e) => setTelefone(e.target.value)}
            id="telefoneFuncionario"
          ></Input>
        </FormGroup>
        <div className="endereço">
          <Label for="cargoFuncionario">Bairro</Label>
          <Input
            required
            value={bairro}
            type="text"
            name="telefone"
            onChange={(e) => setBairro(e.target.value)}
            id="cargoFuncionario"
            placeholder="Digite o bairro"
          />

          <Label for="cargoFuncionario">Rua</Label>
          <Input
            required
            value={rua}
            type="text"
            name="rua"
            onChange={(e) => setRua(e.target.value)}
            id="cargoFuncionario"
            placeholder="Digite o nome da rua"
          />
          <Label for="cargoFuncionario">Numero</Label>
          <Input
            required
            value={numero}
            type="text"
            name="numero"
            onChange={(e) => setNumero(e.target.value)}
            id="cargoFuncionario"
            placeholder="Digite o numero da casa"
          />
        </div>

        <div className="btn1">
          <Button color="primary" size="lg" type="submit" block>
            Cadastrar
          </Button>
        </div>
        <div className="btn1">
          <Button color="primary" size="lg" block>
            Cancelar
          </Button>
        </div>
      </div>
    </form>
  );
}

export default FormFuncionario;
