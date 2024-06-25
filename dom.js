const btn = document.querySelector("#btn")
const form = document.querySelector(".contact-form")


const btn2= document.querySelector("#btn2")

btn2.addEventListener("click",(e)=>{
    e.preventDefault();
const inputfield= document.querySelector("#inputfield").value;

if(inputfield==="e-commerce" || (inputfield ==="E-commerce")){
    window.location.href="https://shalindra-coder.github.io/html-css-bootstrap-use-e-commerce-website-create/"
}else if(inputfield ==='calculator' || inputfield ==='calcu'){
    window.location.href="https://shalindra-coder.github.io/Calculator_Use_html_css_javascript/"
}else if(inputfield==='color changes plate' || inputfield==='color plate'){
    window.location.href="https://shalindra-coder.github.io/color_plate/"
}else if(inputfield==='goa page' || inputfield==='goapage'){
    window.location.href = 'https://shalindra-coder.github.io/Gua-page-use-html-css/'
}else if(inputfield==='digital-clock'|| inputfield==='clock'){
    window.location.href='https://shalindra-coder.github.io/digital_clock_javascript/'
}else if(inputfield==='google'){
    window.location.href = "https://www.google.com"
}else if(inputfield==='youtube'){
    window.location.href="https://www.youtube.com/@Shelu_intertainment"
}else if(inputfield==='facebook'){
    window.location.href="https://www.facebook.com/shalindra.aporiya.9?mibextid=ZbWKwL"
}else if(inputfield==='github'){
    window.location.href="https://www.github.com"
}else if(inputfield==="linkedin"){
    window.location.href='https://www.linkedin.com'
}


})


btn.addEventListener('click', function(e){
    const userid = document.querySelector("#UserId").value;
    const contact = document.querySelector("#Contact").value;
    const Email = document.querySelector("#Email").value;

    const password = document.querySelector("#Password").value;
    const confirmpassword = document.querySelector("#ConfirmPassword").value;
    const message= document.querySelector(".message")

    e.preventDefault()
    let count=0;


    if( userid != ""){
        count++;
    }

    if((contact !="")&& Number(contact) && contact.length===10){
        count++

    }else{
        message.style.color="red"
        message.innerText="Your Contact number is not valid 10 digit number"

    }
    if(Email != ""){
        count++
    }
    if((password !="")&&(password.length===8)){
        count++
    }
    if(confirmpassword == password){
        count++
    }else{
        message.style.color="red"
        message.innerText="Your password is not matched"
    }

    if(count == 5){
        form.innerHTML="form submitted"
        message.innerHTML="done"
    }

});
 