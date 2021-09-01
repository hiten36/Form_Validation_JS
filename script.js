let b1=document.getElementById('fname');
let b2=document.getElementById('lname');
let b3=document.getElementById('email');
let b4=document.getElementById('pass');
flag1=false;
flag2=false;
flag3=false;
flag4=false;
b1.addEventListener('blur',(e)=>{
    let val=b1.value;
    let re=/^([a-zA-Z]){3,20}$/
    if(!re.test(val))
    {
        e.target.nextElementSibling.style.display='block';
        e.target.parentNode.nextElementSibling.style.display='block';
        flag1=false;
    }
    else{
        e.target.nextElementSibling.style.display='none';
        e.target.parentNode.nextElementSibling.style.display='none';
        flag1=true;
    }
})
b2.addEventListener('blur',(e)=>{
    let val=b2.value;
    let re=/^([a-zA-Z]){3,20}$/
    if(!re.test(val))
    {
        e.target.nextElementSibling.style.display='block';
        e.target.parentNode.nextElementSibling.style.display='block';
        flag2=false;
    }
    else{
        e.target.nextElementSibling.style.display='none';
        e.target.parentNode.nextElementSibling.style.display='none';
        flag2=true;
    }
})
b3.addEventListener('blur',(e)=>{
    let val=b3.value;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(val))
    {
        e.target.nextElementSibling.style.display='block';
        e.target.parentNode.nextElementSibling.style.display='block';
        flag3=false;
    }
    else{
        e.target.nextElementSibling.style.display='none';
        e.target.parentNode.nextElementSibling.style.display='none';
        flag3=true;
    }
})
b4.addEventListener('blur',(e)=>{
    let val=b4.value;
    if(val=='')
    {
        e.target.nextElementSibling.style.display='block';
        e.target.parentNode.nextElementSibling.style.display='block';
        flag4=false;
    }
    else{
        e.target.nextElementSibling.style.display='none';
        e.target.parentNode.nextElementSibling.style.display='none';
        flag4=true;
    }
})
document.getElementById('sub').addEventListener('click',()=>{
    if(flag1 && flag2 && flag3 && flag4)
    {
        console.log("success");
    }
    let val1=b4.value;
    if(val1=='')
    {
        b4.nextElementSibling.style.display='block';
        b4.parentNode.nextElementSibling.style.display='block';
        flag4=false;
    }
    let val2=b3.value;
    const re1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re1.test(val2))
    {
        b3.nextElementSibling.style.display='block';
        b3.parentNode.nextElementSibling.style.display='block';
        flag3=false;
    }
    let val3=b2.value;
    let re2=/^([a-zA-Z]){3,20}$/
    if(!re2.test(val3))
    {
        b2.nextElementSibling.style.display='block';
        b2.parentNode.nextElementSibling.style.display='block';
        flag2=false;
    }
    let val4=b1.value;
    let re3=/^([a-zA-Z]){3,20}$/
    if(!re3.test(val4))
    {
        b1.nextElementSibling.style.display='block';
        b1.parentNode.nextElementSibling.style.display='block';
        flag1=false;
    }
    else{
        console.log("error");
    }
})