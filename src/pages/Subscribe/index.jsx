import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/FirebaseConfig";

export default function Subscribe() {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    if (data !== "") {
      await addDoc(collection(db, "subs"), {
        data,
      });
      reset();
    }
  };

  return (
    <div className="subscribe-container container">
      <div className="subscribe-content">
        <form onSubmit={handleSubmit(onSubmit)} className="subscribe-items">
          <h2 className="subscribe-token1">Ficha de inscrição</h2>
          <label className="subscribe-la" required>
            <p className="subscribe-p">Nome</p>
            <input className="subscribe-i" {...register("nome")} type="text" />
          </label>
          <p className="subscribe-p">Sexo</p>
          <label className="subscribe-la" required>
            <select className="subscribe-i" {...register("sexo")}>
              <option value="m">Masculino</option>
              <option value="f">Feminino</option>
            </select>
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Data de nascimento</p>
            <input
              className="subscribe-i"
              {...register("dataNascimento")}
              type="date"
            />
          </label>
          <label className="subscribe-la" required>
            <p className="subscribe-p">
              Primeira vez no acamp EXTRAORDINÁRIOS ?
            </p>
            <select className="subscribe-i" {...register("primeiraVez")}> 
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Endereço</p>
            <input
              className="subscribe-i"
              {...register("endereco")}
              type="text"
            />
          </label>
          <label className="subscribe-la" required>
            <p className="subscribe-p">Bairro</p>
            <input
              className="subscribe-i"
              {...register("bairro")}
              type="text"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">CEP</p>
            <input className="subscribe-i" {...register("cep")} type="number" />
          </label>
          <label className="subscribe-la" required>
            <p className="subscribe-p">Cidade</p>
            <input
              className="subscribe-i"
              {...register("cidade")}
              type="text"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Telefone</p>
            <input
              className="subscribe-i"
              required
              {...register("telefone")}
              type="tel"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Nome do pai</p>
            <input
              className="subscribe-i"
              {...register("nomePai")}
              type="text"
            />
          </label>
          <label className="subscribe-la" required>
            <p className="subscribe-p">Celular do pai</p>
            <input
              className="subscribe-i"
              {...register("celularPai")}
              type="tel"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">CPF do pai</p>
            <input
              className="subscribe-i"
              {...register("cpfPai")}
              type="number"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">E-mail do pai</p>
            <input
              className="subscribe-i"
              {...register("emailPai")}
              type="email"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Nome da mãe</p>
            <input
              className="subscribe-i"
              {...register("nomeMae")}
              type="text"
            />
          </label>
          <label className="subscribe-la" required>
            <p className="subscribe-p">Celular da mãe</p>
            <input
              className="subscribe-i"
              {...register("celularMae")}
              type="tel"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">CPF da mãe</p>
            <input
              className="subscribe-i"
              {...register("cpfMae")}
              type="number"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">E-mail da mãe</p>
            <input
              className="subscribe-i"
              {...register("emailMae")}
              type="email"
            />
          </label>
          <label>
            <p className="subscribe-p">Responsável pelo pagamento</p>
            <input
              className="subscribe-i"
              {...register("nomePagador")}
              type="text"
            />
          </label>
          <label>
            <p className="subscribe-p">CPF do responsável pelo pagamento</p>
            <input
              className="subscribe-i"
              {...register("cpfPagador")}
              type="number"
            />
          </label>
          <label className="subscribe-la" required>
            <p className="subscribe-p">
              Telefone do responsável pelo pagamento
            </p>
            <input
              className="subscribe-i"
              {...register("telefonePagador")}
              type="tel"
            />
          </label>
          <h2 className="subscribe-token1">Ficha Médica</h2>
          <label className="subscribe-la">
            <p className="subscribe-p">Nome do Médico da Família</p>
            <input
              className="subscribe-i"
              {...register("nomeMedico")}
              type="text"
            />
          </label>
          <label>
            <p className="subscribe-p">Telefone consultório</p>
            <input
              className="subscribe-i"
              {...register("telefoneConsultorio")}
              type="tel"
            />
          </label>
          <label>
            <p className="subscribe-p">Celular médico</p>
            <input
              className="subscribe-i"
              {...register("celularMedico")}
              type="tel"
            />
          </label>
          <label required>
            <p className="subscribe-p">Peso</p>
            <input className="subscribe-i" {...register("peso")} type="text" />
          </label>
          <label required>
            <p className="subscribe-p">Altura</p>
            <input
              className="subscribe-i"
              {...register("altura")}
              type="text"
            />
          </label>
          <h2 className="subscribe-token1">Alergias</h2>
          <label className="subscribe-la">
            <span className="subscribe-ps">
              Sulfa
              <input
                className="subscribe-in"
                {...register("alergiaSulfa")}
                type="checkbox"
              />
            </span>
          </label>
          <label className="subscribe-la">
            <span className="subscribe-ps">
              Iodo
              <input
                className="subscribe-in"
                {...register("alergiaIodo")}
                type="checkbox"
              />
            </span>
          </label>
          <label className="subscribe-la">
            <span className="subscribe-ps">
              Picadas de inseto
              <input
                className="subscribe-in"
                {...register("alergiaPicadasInseto")}
                type="checkbox"
              />
            </span>
          </label>
          <label className="subscribe-la">
            <span className="subscribe-ps">
              Alimentares
              <input
                className="subscribe-in"
                {...register("alergiaAlimentares")}
                type="checkbox"
              />
            </span>
          </label>
          <label className="subscribe-la">
            <span className="subscribe-ps">
              Ácido Acetilsalicílico
              <input
                className="subscribe-in"
                {...register("alergiaAcidoAcetilsalicilico")}
                type="checkbox"
              />
            </span>
          </label>
          <label className="subscribe-la">
            <span className="subscribe-ps">
              Corantes
              <input
                className="subscribe-in"
                {...register("alergiaCorantes")}
                type="checkbox"
              />
            </span>
          </label>
          <label className="subscribe-la" required>
            <p className="subscribe-p">Outras alergias</p>
            <input
              className="subscribe-i"
              placeholder="Rinite, não tenho alergia..."
              {...register("outrasAlergias")}
              type="text"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Usuário de Alopatia ou Homeopatia</p>
            <select className="subscribe-i" {...register("tipoTratamento")}>
              <option value="Alopatia">Alopatia</option>
              <option value="Homeopatia">Homeopatia</option>
              <option value="nao">Não sou</option>
            </select>
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">
              Restrições a alguma atividade esportiva?
            </p>
            <input
              className="subscribe-i"
              {...register("restricoesAtividadeEsportiva")}
              type="text"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">SABE NADAR?</p>
            <select className="subscribe-i" {...register("sabeNadar")}>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
              <option value="Mais ou menos">Mais ou menos</option>
            </select>
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Vacina ANTI-TETÂNICA</p>
            <input
              className="subscribe-i"
              {...register("vacinaAntiTetanica")}
              type="text"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Vacina FEBRE AMARELA</p>
            <input
              className="subscribe-i"
              {...register("vacinaFebreAmarela")}
              type="text"
            />
          </label>
          <label className="subscribe-la">
            <p className="subscribe-p">Observação Importante</p>
            <textarea
              className="subscribe-i"
              {...register("observacaoImportante")}
              rows="4"
            />
          </label>
          <h2 className="subscribe-token1">Sintoma Medicamento Posologia</h2>
          <label className="subscribe-la">
            <p className="subscribe-p">Alergia a insetos</p>
            <input
              className="subscribe-i"
              placeholder="Não tenho"
              {...register("alergiaInsetos")}
              type="text"
            />
          </label>
          {/* <h2 className="subscribe-token1">ACAMPAMENTO EXTRAORDINARIOS CIA</h2>
          <label>
            <p className="subscribe-p">Autorização</p>
            <textarea {...register("autorizacao")} rows="4" />
          </label>
          <label>
            <p className="subscribe-p">Compromisso</p>
            <textarea {...register("compromisso")} rows="4" />
          </label>
          <label>
            <p className="subscribe-p">Assinatura do Pai ou Responsável</p>
            <input {...register("assinaturaResponsavel")} type="text" />
          </label> */}
          <button className="subscribe-btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
