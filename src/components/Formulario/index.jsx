import { Formulario } from "./styles";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Form() {
    const [ name, setName ] = useState('');
    const [ email, setEmail] = useState('');
    const [ telephone, setTelephone] = useState('');
    const [ message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleNewMessage(event){
        event.preventDefault()

        if (!name || !email || !telephone || !message){
            return toast.error('Please fill email, subject, telephone, selectedFile')
        }
        try {
            let form = new FormData();
            form.append("Nome", name);
            form.append("Email", email);
            form.append("Telefone", telephone);
            form.append("Mensagem", message);
            form.append("tipoForm", 2);
            
            setLoading(true);
            toast.success('Successfully created!');
            const resp = await axios.post(`/api/sendMail`, form)
            setLoading(false);
            
        } catch (err){
            setLoading(false);
            toast.error(
                err.response && err.response.data.message ? err.response.data.message : err.message
            )

        }

    }
    

    return (
        <Formulario>
            <ToastContainer position='top-right' limit={1}/>
            <form action='/api/sendMail' onSubmit={handleNewMessage} method="POST" enctype="multipart/form-data">
                <div id="form">
                    <div id="input-div">
                        <input type="text" placeholder="Nome" name="name" className="input-class" value={name} onChange={event => setName(event.target.value)}/>
                        <input type="text" placeholder="E-mail" name="email" className="input-class" value={email} onChange={event => setEmail(event.target.value)} />
                        <input type="tel" placeholder="Telefone" name="phone" className="input-class" value={telephone} onChange={event => setTelephone(event.target.value)} />
                    </div>
                    <div id="textarea-div">
                        <textarea name="" id="textarea" cols="60" rows="6" placeholder="Mensagem" value={message} onChange={event => setMessage(event.target.value)}/>
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
