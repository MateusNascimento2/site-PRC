const express = require('express');
var fileupload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer');


const app = express();
app.use(fileupload());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.post("/api/sendMail", (req, res) => {
    let name = req.body.Nome
    let email = req.body.Email
    let telephone = req.body.Telefone
    let message = req.body.Mensagem
    let type = req.body.tipoForm
    let toEmail = ["mateusnascar2@gmail.com", "mateusnascar@hotmail.com"]
    console.log(name)
    console.log(email)
    console.log(telephone)
    if (type == "1"){
        console.log('estou aqui 1')
        let file = req.files.curriculo
        console.log(file)
        let smtpTransport = nodemailer.createTransport({
            host: 'mail.prcinvest.com.br',
            port:465,
            secure: true,
            auth: {
                user: 'trabalhe.conosco@prcinvest.com.br',
                pass: 'mudar@123',
            }
        })

        let mailOptions = {
            from: email,
            to: toEmail[0],
            subject: `Mensagem de ${name} sobre vaga`,
            html:`<h3>Informações</h3>
                    <ul>
                    <li>Nome: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Telefone: ${telephone}</li>
                    </ul>`,
            attachments: [{
                filename: file.name,
                content: file.data,
            }]
        }

        smtpTransport.sendMail(mailOptions, (error, response) => {
            if (error){
                response.send(error)
            }
            else { 
                response.send('Sucesso')
            }
        })

        smtpTransport.close();

    } else {
        console.log("estou aqui 2")

        let smtpTransport = nodemailer. createTransport({
            host: 'mail.prcinvest.com.br',
            port: 465,
            secure: true,
            auth: {
                user: 'trabalhe.conosco@prcinvest.com.br',
                pass: 'mudar@123',
            }
        })

        let mailOptions = {
            from: email,
            to: toEmail[0],
            subject: `Mensagem de ${name}`,
            html: `<h3>Informações</h3>
                    <ul>
                    <li>Nome: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Telefone: ${telephone}</li>
                    <li>Mensagem: ${message}</li>
                    <ul/>`
        }

        smtpTransport.sendMail(mailOptions, (error, response)=>{
            if(error){
                response.send(error)
            }
            else{
                response.send('Sucesso')
            }
        })

        smtpTransport.close();
        
    }
    
})



const port = 3000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})