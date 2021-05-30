const box = document.querySelectorAll('.boxs')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes(){
    const num = window.innerHeight/5*4

    box.forEach(boxs => {

        const boxTop = boxs.getBoundingClientRect().top

        if(boxTop<num){
            boxs.classList.add('show')
        }else{
            boxs.classList.remove('show')
        }
    })
}