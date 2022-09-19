import { Formulario } from "./styles";


export function Form() {
    return (
        <Formulario>
            <form action="">
                <div id="form">
                    <div id="input-div">
                        <input type="text" placeholder="Nome" name="name" className="input-class" />
                        <input type="text" placeholder="E-mail" name="email" className="input-class" />
                        <input type="tel" placeholder="Telefone" name="phone" className="input-class" />
                    </div>
                    <div id="textarea-div">
                        <textarea name="" id="textarea" cols="60" rows="6" placeholder="Mensagem"></textarea>
                    </div>
                    <div id="checkbox-div">
                        <input type="checkbox" name="terms_condition" id="checkbox" />
                        <label for="terms_condition" id="label">
                            Eu aceito todos os&nbsp;
                            <a href="#" target="_blank">termos e condições</a>
                            .
                        </label>
                    </div>
                    <div id="button-div">
                        <button id="form-button">Enviar Mensagem</button>
                    </div>
                </div>
            </form>
        </Formulario>
    )
}
