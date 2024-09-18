let form= document.querySelector("form")
let nameinput=document.querySelector(`input[type="text"]`)
let emailinput=document.querySelector(`input[type="email"]`)
let classinput=document.querySelector("#class")
let dobinput=document.querySelector("#dob")
let parentinput=document.querySelector("#parent")
let addressinput=document.querySelector("#address")
let phoneinput=document.querySelector("#phone")
let thankyou=document.querySelector(".thankyou")
  let isvalid=false

  let invalid=(ele)=>{
    isvalid=false
    ele.nextElementSibling.classList.remove("hidden")
 ele.classList.add("invalid")
  }

let validate=()=>{
    isvalid =true
  if(!nameinput.value){
   invalid(nameinput)
  }
  if(!emailinput.value){
    invalid(emailinput)
   }
   if(!classinput.value){
    invalid(classinput)
   }
   if(!dobinput.value){
    invalid(dobinput)
   }
   if(!parentinput.value){
    invalid(parentinput)
   }
   if(!addressinput.value){
    invalid(addressinput)
   }
   if(!phoneinput.value){
    invalid(phoneinput)
   }

}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(isvalid){
        form.remove()
        thankyou.classList.remove("hidden")       
    }
  validate()
})