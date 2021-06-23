const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
    createNotification()
})

function createNotification() {   

    const info = document.querySelector('.info')
    info.innerHTML = 'Hi I am Front-end Developer'

    let notif = document.createElement('div')
    notif.classList.add('create')

    notif.innerText = 'This is my Task'

    container.appendChild(notif)

    setTimeout(() => {
        notif.remove()
        
    }, 3000);
    
}

