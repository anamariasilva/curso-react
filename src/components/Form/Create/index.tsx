import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 60vh;
  margin: 5% auto;
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    label {
      display: flex;
      flex-direction: column;
    }
    input {
      line-height: 50px;
      border: solid 1px #888;
      background: none;
      border-radius: 10px;
    }
    button {
      line-height: 50px;
    }
  }
`;

/* <div>
            <form>
                <label htmlFor="name">Name
                <input type="text" required  name="name" placeholder="Digite o nome"/>
                </label>
                <br/>
                <label htmlFor="email">E-mail
                <input type="email" required name="email" placeholder="Digite o e-mail"/>
                </label>
                <br/>
                <label htmlFor="password">Senha
                <input type="password" required  name="password" placeholder="Digite a senha"/>
                </label>
                <br/>
                <button type="submit">Cadastrar</button>
            </form>
        </div> */
