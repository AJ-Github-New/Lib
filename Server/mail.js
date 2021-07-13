const mailer = require("nodemailer");
const {generator} = require("generate-password");
//const {useState}=require("react");
const { pass }=require("./Password_template");
const { Hello } = require("./hello_template");
const { Thanks } = require("./thanks_template");
//const [pass, setPassword] = useState('');


var chars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz","0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"];
var Pwd = [5,3,2].map(function(len, i) { return Array(len).fill(chars[i]).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('') }).concat().join('').split('').sort(function(){return 0.5-Math.random()}).join('');
const getEmailData = (to,name,template)=>{
    let data = null;

    switch (template) {
        

        case "Password":
            data={
                from : "Aboli Jangam <jangam.aboli717@gmail.com>",
                to,
                subject:`Please use the password ${Pwd} for first time login`,
                html:pass()
                 
            }    

        
            break;
        
    }
    return data;


}   

const sendEmail = (to,name,type)=>{
    const smtpTransport = mailer.createTransport({

        service:"Gmail",
        auth :{
            user:"jangam.aboli717@gmail.com",
            pass:"80@D9wq#@717#"
        }
    })

    const mail = getEmailData(to,name,type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })

    return Pwd;
}
module.exports={sendEmail}