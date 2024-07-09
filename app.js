console.log("Password checker")
const textBox = document.getElementById("textbox");
const hide = document.getElementById("hide");
const bars = document.getElementsByClassName("border");
let msg = document.getElementById("msg");



const resetClasses = ()=>{
    for(let i=0;i<3;i++){
        bars[i].classList = ['border']
       }
}

const changeColors = (type)=>{
    console.log(type)
    resetClasses()
    if(type == ""){

    }else if(type == 'low'){
        bars[0].classList.add('red')
    }else if(type == 'medium'){
        bars[0].classList.add('yellow')
        bars[1].classList.add('yellow')

    }else if(type == 'high') {
        for(let i=0;i<3;i++){
            bars[i].classList.add('green')
           }
    }

}

const passwordCheck = (txt)=>{
    const hasNumber = /[0-9]/.test(txt)
    const hasUpperCase = /[A-Z]/.test(txt)
    const hasLowerCase = /[a-z]/.test(txt)
    const hasSpecialCase = /[!@/#\$%/\^\&\*<>?\,\.\-\_]/.test(txt)

    if(txt.length == 0){
        return ""
    }

    if(txt.length < 5) return "low"
    else if(hasNumber && hasLowerCase && hasSpecialCase && hasUpperCase)
        return "high"
    else if((hasLowerCase && hasUpperCase) || (hasLowerCase && hasNumber) || (hasNumber && hasSpecialCase) || (hasLowerCase && hasSpecialCase) || (hasUpperCase && hasSpecialCase))
        return "medium"


    return 'low'
}




textBox.onkeyup = (e) =>{
    let password = e.target.value;

    let progress = passwordCheck(password)
    changeColors(progress)

        // if(password.length >= 5){
        //     Modarate(password);
        //     Strong(password);
    
        // }else{
        //     for(let i=0;i<3;i++){
        //         bars[i].classList = ['border']
        //        }
        //     bars[0].classList.add('red')
        // }
    
}

function Modarate(password){
    
 if(/[A-Z]/.test(password)){
    if(/[a-z]/.test(password)){
        for(let i=0;i<3;i++){
            bars[i].classList = ['border']
           }
        bars[0].classList.add('yellow')
        bars[1].classList.add('yellow')
        
    }
 }else{
    for(let i=0;i<3;i++){
        bars[i].classList = ['border']
       }
    bars[0].classList.add('red')
 }
}

function Strong(password){

 if(/[A-Z]/.test(password) && (/[a-z]/.test(password)) && (/[0-9]/.test(password)) && /[!@/#\$%/\^\&\*<>?\,\.\-\_]/.test(password)){
    for(let i=0;i<3;i++){
        bars[i].classList = ['border']
       }
   for(let i=0;i<3;i++){
    
    bars[i].classList.add('green')
    
   }
}
}




console.log(/[!@/#\$%/\^\&\*<>?\,\.\-\_]/.test("hgghh345"))
// length 8
// one uppercase
// one lowercase
// number
// special charactor
