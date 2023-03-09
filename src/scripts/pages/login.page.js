import { AuthServices } from "../../services/auth.service";

const login = document.createElement("form");
login.setAttribute("id", "p-login");

const signUpBtn = document.createElement("button");
signUpBtn.setAttribute("type", "button");
signUpBtn.setAttribute("id", "btn-cadastrar");

const events = () => {
  login.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fd = new FormData(login);
    const dados = Object.fromEntries(fd);

    await AuthServices.login(dados);

    console.log(dados);
  });

  signUpBtn.addEventListener("click", () => {
    window.location.replace("#createUser");
  });
};

export const Login = () => {
  login.innerHTML = `
        <h1>CONTACT LIST</h1>
        <p>Login</p>
        <label for="username">Usuário:</label>
        <input id="username" name="email" type="text" />

        <label for="password">Senha:</label>
        <input id="password" name="senha" type="password" />
        <div class="input-label-container">
            <label for="salvar">Salvar:</label>
            <input name="salvar" id="salvar" type="checkbox" value="true" />
        </div>
        <button type="submit" id="btn-entrar">Entrar</button>
    `;

  signUpBtn.innerText = "Cadastrar";
  login.appendChild(signUpBtn);

  events();
  return login;
};
