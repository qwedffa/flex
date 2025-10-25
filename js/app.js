function sum(a,b)
{
    return a.value*1 + b.value*1
}


let btn = document.querySelector('section button')
btn.addEventListener ('click', function (){
let nums = document.querySelectorAll('section input')
let rezult = document.querySelector('section p')
rezult.innerHTML = 'сумма:' + sum(nums[0], nums[1])

})