const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const paginations = document.querySelectorAll('.pagination')

let currentActive = 1

next.addEventListener('click', ()=>{
    currentActive++
    
    if(currentActive > paginations.length){
        currentActive = paginations.length
    }

    update()
})

prev.addEventListener('click', ()=>{
    currentActive--
    
    if(currentActive < 1){
        currentActive = 1
    }

    update()
})

function update (){
    paginations.forEach((pagination, idx)=>{
        if(idx < currentActive){
            pagination.classList.add('active')
        }else{
            pagination.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    
    progress.style.width = ((actives.length-1)/ (paginations.length-1) * 100 + '%')

    if(currentActive === 1){
        prev.disabled = true
    } else if (currentActive === paginations.length){
        next.disabled = true
    }else {
        prev.disabled = false
        next.disabled= false
    }
}