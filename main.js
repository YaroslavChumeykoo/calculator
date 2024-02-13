const prov = ['%', '^', 'x', '−', '+', '/',]
let rez = ''


const button_1 = document.getElementById('1')
const button_2 = document.getElementById('2')
const button_3 = document.getElementById('3')
const button_4 = document.getElementById('4')
const button_5 = document.getElementById('5')
const button_6 = document.getElementById('6')
const button_7 = document.getElementById('7')
const button_8 = document.getElementById('8')
const button_9 = document.getElementById('9')
const button_0 = document.getElementById('zero')
const button_percent = document.getElementById('percent')
const button_power = document.getElementById('power')
const button_ymnoj = document.getElementById('ymnoj')
const button_minus = document.getElementById('minus')
const button_plus = document.getElementById('plus')
const button_delen = document.getElementById('delen')
const button_tochka = document.getElementById('tochka')
const button_clear = document.getElementById('clear')
const button_cancel = document.getElementById('cancel')
const button_ravno = document.getElementById('ravno')
help = 0
help_tochka = 0
function napol(el){

    if(el == '.')
        help_tochka += 1
    if(prov.includes(el)) {
        help++
        help_tochka = 0
    }
    if(help_tochka > 1 && el == '.')
        display(rez)
    else if(help > 1 && prov.includes(el))
        display(rez)
    else if(prov.includes(el) && rez === ''){
        help = 0
        console.log(rez)
        console.log('zzz')
        display(rez)
    }
    else{
        rez += el
        display(rez)
    }
}

function display(){
    document.getElementById('rez').value = rez
}

function cancel_full(){
    rez = ''
    help = 0
    help_tochka = 0
    display(rez)
}
function cancel(){
    if(prov.includes(rez[rez.length - 1])){
        rez = rez.slice(0, - 1)
        display(rez)
        help = 0
    }
    else if (rez[rez.length - 1] == '.'){
        rez = rez.slice(0, - 1)
        display(rez)
        help_tochka = 0
    }
    else{
        rez = rez.slice(0, - 1)
        display(rez)
    }
 }

function ravno(){
    let a = ''
    let b = ''
    let oper = ''
    rez_arr = rez.split('')

    for(let i = 0; i < rez_arr.length; i++)
        if(prov.includes(rez_arr[i]) == false)
            a += rez_arr[i]
        else{ 
            oper = rez_arr[i]
        break
        }
    b = rez_arr.join('')
    b = b.slice(a.length + 1, rez_arr.length)
    schet(a, b, oper)
}

button_1.addEventListener('click', () => napol(button_1.innerHTML))
button_2.addEventListener('click', () => napol(button_2.innerHTML))
button_3.addEventListener('click', () => napol(button_3.innerHTML))
button_4.addEventListener('click', () => napol(button_4.innerHTML))
button_5.addEventListener('click', () => napol(button_5.innerHTML))
button_6.addEventListener('click', () => napol(button_6.innerHTML))
button_7.addEventListener('click', () => napol(button_7.innerHTML))
button_8.addEventListener('click', () => napol(button_8.innerHTML))
button_9.addEventListener('click', () => napol(button_9.innerHTML))
button_0.addEventListener('click', () => napol(button_0.innerHTML))
button_percent.addEventListener('click', () => napol(button_percent.innerHTML))
button_power.addEventListener('click', () => napol(button_power.innerHTML))
button_ymnoj.addEventListener('click', () => napol(button_ymnoj.innerHTML))
button_minus.addEventListener('click', () => napol(button_minus.innerHTML))
button_plus.addEventListener('click', () => napol(button_plus.innerHTML))
button_delen.addEventListener('click', () => napol(button_delen.innerHTML))
button_tochka.addEventListener('click', () => napol(button_tochka.innerHTML))
button_clear.addEventListener('click', cancel_full)
button_cancel.addEventListener('click', cancel)
button_ravno.addEventListener('click', () => ravno(rez))





function schet(a, b, oper){
    a = Number(a)
    b = Number(b)
    if(oper == 'x')
        sum = a * b
    else if (oper == '+')
        sum = a + b
     else if (oper == '−')
        sum = a - b
    else if (oper == '/')
        sum = a / b
    else if (oper == '%')
        sum = a % b
    else if (oper == '^')
        sum = a ** b
    else sum = ''
    help = 0
    console.log(sum)
    rez = sum
    console.log(rez)
    display(rez)
}


