function mandaMsg(elemento){
    let texto = elemento.firstElementChild.innerText;
    let numero = prompt("Qual é o numero que deseja compartilhar a mensagem?");
    let link = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;
    
    window.open(link);
}

