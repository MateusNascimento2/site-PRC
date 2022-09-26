import './styles.css';
import logoImg from '../../assets/logo-prc2.svg';
import { CSSTransition } from 'react-transition-group';
import { BsX } from "react-icons/bs";
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



export function Modal(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

    

    console.log(selectedFile)


    async function handleNewContact(event) {
        event.preventDefault();
        if (!name || !email || !telephone || !selectedFile){
            return toast.error('Please fill email, subject, telephone, selectedFile');
        }
        try {
            let form = new FormData();
            form.append("Nome", name);
            form.append("Email", email);
            form.append("Telefone", telephone);
            form.append("curriculo", selectedFile)
            
            setLoading(true);
            toast.success('Successfully created!');
            const resp = await axios.post(`/api/sendMail`, form)
            console.log('aqui')
            setLoading(false);
            
        } catch (err){
            setLoading(false);
            toast.error(
                err.response && err.response.data.message ? err.response.data.message : err.message
            )

        }

    }

    

    return (
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className='modal' onClick={props.onClose}  onSubmit={handleNewContact}>
                <ToastContainer position='top-right' limit={1}/>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <img src={logoImg} alt="" className='logo-title' />
                        <button onClick={props.onClose} className="button"><BsX /></button>
                    </div>
                    <div className="modal-body">
                        <h5>VENHA TRABALHAR COM A GENTE!</h5>
                        <p>
                            Deseja realizar seus sonhos e objetivos? Convido você a conhecer nossa empresa. PRC Invest, é uma empresa
                            que vai te ajudar a transformar sua carreira profissional, aqui você encontra um ambiente confortável e seguro.
                        </p>
                        <p>
                            Estamos com algumas vagas em aberto para o cargo de <b>Representante Comercial</b>, caso tenha interesse pode deixar seu currículo aqui!
                        </p>
                        <form id='form' method='POST' action='/api/sendMail'  enctype="multipart/form-data">
                            <div className='input-container'>
                                <input type="text" value={name} placeholder="Nome" name="name" className="input-class" onChange={event => setName(event.target.value)} />
                                <input type="text" value={email} placeholder="E-mail" name="email" className="input-class" onChange={event => setEmail(event.target.value)} />
                                <input type="tel" value={telephone} placeholder="Telefone" name="phone" className="input-class" onChange={event => setTelephone(event.target.value)} />
                                <label for="curriculo">Currículo&#40;.pdf, .docx&#41;</label>
                                <Form.Control type="file" name='curriculo' accept='.docx, .pdf' className='file-input'  onChange={event => setSelectedFile(event.target.files[0])} />
                            </div>
                            <div className="modal-footer">
                                <button type='submit'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}