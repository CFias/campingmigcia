import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { useAuthValue } from "../../contexts/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/FirebaseConfig";

export default function Subscribe() {
  const { user } = useAuthValue();
  const cod = user.uid;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    if (data !== "") {
      await addDoc(collection(db, "subs"), {
        // Aqui você pode realizar o envio dos dados
        data,
      });
      reset(); // Resetar o formulário após o envio
    }
  };

  return (
    <div className="subscribe-container container">
      <div className="subscribe-content">
        <form onSubmit={handleSubmit(onSubmit)} className="subscribe-items">
          <h2 className="subscribe-token1">Ficha de inscrição</h2>
          <label>
            <p className="subscribe-p">Nome</p>
            <input {...register("nome")} type="text" />
          </label>
          <p className="subscribe-p">Sexo</p>
          <label className="subscribe-box">
            F
            <input {...register("sexo")} type="checkbox" value="F" />
            M
            <input {...register("sexo")} type="checkbox" value="M" />
          </label>
          <label>
            <p className="subscribe-p">Data de nascimento</p>
            <input {...register("data")} type="date" />
          </label>
          <p className="subscribe-p">Primeira vez no acamp EXTRAORDINÁRIOS ?</p>
          <label className="subscribe-box">
            SIM
            <input {...register("primeiraVez")} type="checkbox" value="SIM" />
            NÃO
            <input {...register("primeiraVez")} type="checkbox" value="NÃO" />
          </label>
          <label>
            <p className="subscribe-p">Endereço</p>
            <input {...register("endereco")} type="text" />
          </label>
          <label>
            <p className="subscribe-p">Bairro</p>
            <input {...register("bairro")} type="text" />
          </label>
          <label>
            <p className="subscribe-p">CEP</p>
            <input {...register("cep")} type="number" />
          </label>
          <label>
            <p className="subscribe-p">Cidade</p>
            <input {...register("cidade")} type="text" />
          </label>
          <label>
            <p className="subscribe-p">Telefone</p>
            <input {...register("telefone")} type="tel" />
          </label>
          <label>
            <p className="subscribe-p">Nome do pai</p>
            <input {...register("nomePai")} type="text" />
          </label>
          <label>
            <p className="subscribe-p">Celular</p>
            <input {...register("celularPai")} type="tel" />
          </label>
          <label>
            <p className="subscribe-p">CPF</p>
            <input {...register("cpfPai")} type="number" />
          </label>
          <label>
            <p className="subscribe-p">E-mail</p>
            <input {...register("emailPai")} type="email" />
          </label>
          <label>
            <p className="subscribe-p">Nome do mãe</p>
            <input {...register("nomeMae")} type="text" />
          </label>
          <label>
            <p className="subscribe-p">Celular</p>
            <input {...register("celularMae")} type="tel" />
          </label>
          <label>
            <p className="subscribe-p">CPF</p>
            <input {...register("cpfMae")} type="number" />
          </label>
          <label>
            <p className="subscribe-p">E-mail</p>
            <input {...register("emailMae")} type="email" />
          </label>
          <label>
            <p className="subscribe-p">Responsável pelo pagamento</p>
            <input {...register("nomePagador")} type="text" />
          </label>
          <label>
            <p className="subscribe-p">CPF</p>
            <input {...register("cpfPagador")} type="number" />
          </label>
          <label>
            <p className="subscribe-p">Telefone</p>
            <input {...register("telefonePagador")} type="tel" />
          </label>
          <h2 className="subscribe-token1">Ficha Médica</h2>
          <label>
            <p className="subscribe-p">Nome do Médico da Família</p>
            <input {...register("nomeMedico")} type="text" />
          </label>
          <label>
            <p className="subscribe-p">Telefone consultório</p>
            <input {...register("telefoneConsultorio")} type="tel" />
          </label>
          <label>
            <p className="subscribe-p">Celular médico</p>
            <input {...register("celularMedico")} type="tel" />
          </label>
          <label>
            <p className="subscribe-p">Peso</p>
            <input {...register("peso")} type="text" />
          </label>
          <label>
            <p className="subscribe-p">Altura</p>
            <input {...register("altura")} type="text" />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
