import qr from "qrcode-terminal"
import chalk from "chalk"

async function handle(erro, result){
    if(erro){
        console.log("Erro on app")
        return
    }  

    
const isSmall =  result.type  == 2  
qr.generate(result.link, {small: isSmall}, (qrcode)=>{
    console.log(chalk.green("QR Code gerado como sucesso"))
    console.log(qrcode)
})
}

export default handle