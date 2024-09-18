const socket= new WebSocket('ws://localhost:3000')


function sendMessage(event){
    event.preventDefault()//to submit the form without reloading the page
    const input=document.querySelector('input')
    if(input.value){//to send the input to server if the input is not empty
        socket.send(input.value)
        input.value=""// setting it null after sending the input
        input.focus() //putting focus back on the input after sending it
    }
}

document.querySelector('form').addEventListener('submit',sendMessage)

socket.addEventListener("message",({data})=>{
    const li=document.createElement('li')
    li.textContent=data
    document.querySelector('ul').appendChild(li)
})