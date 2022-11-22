const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const button = document.querySelector('button')


form.addEventListener('input', (e)=>{
    e.preventDefault();
    let count = 0
    const capcha = 'qwerty'
    let q = ''
    input.forEach(el =>{
        if (el.type === 'text' && el.value === '') {
            button.setAttribute('disabled', true)
            count++
        }
        if (count === 0) {
            q += el.value
            if (q === capcha) {
                button.removeAttribute('disabled', true)
            }  
        }
    })
})
