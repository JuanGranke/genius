function audio(){
    var audio = document.getElementById('audio')
    audio.play()
}

function tl(){
    audio()
}

function tr(){
    audio()
}

function bl(){
    audio()
}

function br(){
    audio()
}

function random(){
        alert(Math.floor(Math.random() * 4 + 1))
}

function take(){
    var tl = document.getElementById('top-left')
    var tr = document.getElementById('top-right')
    var bl = document.getElementById('bottom-left')
    var br = document.getElementById('bottom-right')

    const buttons = [tl, tr, bl, br]

    var rand = buttons[Math.floor(random(buttons))]
    buttons.click(rand)

}