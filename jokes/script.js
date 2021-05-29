const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click',generatejoke)

generatejoke()

async function generatejoke() {
    const config = {
        headers: {
            Accept:'application/json',
        },
    }
     const res = await fetch('https://icanhazdadjoke.com/',config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}

