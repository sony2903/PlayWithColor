const warna = document.querySelectorAll("input[type='range']");

warna.forEach(function(slider){
    slider.addEventListener("input",function(){
        const r = document.querySelector("input[name='merah']").value;
        const g = document.querySelector("input[name='hijau']").value;
        const b = document.querySelector("input[name='biru']").value;
        console.log(r,g,b);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
})

//reset
const tResetWarna = document.getElementById('resetWarna')
tResetWarna.onclick = function(){
    document.body.style.backgroundColor = `rgb(255,255,255)`;
    // alert('Warna direset')
}
//acak
const tAcakWarna = document.getElementById('ubahWarna')
tAcakWarna.onclick = function(){
    randomR = Math.floor(Math.random() * 255)
    randomG = Math.floor(Math.random() * 255)
    randomB = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    // alert('Warna diacak')
}

//on off kursor mengubah warna background
const tWarnaKursor = document.getElementById('warnaKursor')
tWarnaKursor.onclick = function(){
    tWarnaKursor.classList.toggle('on')
    tWarnaKursor.innerHTML = 'Nyalakan Lampu Disco : On'
    if (document.getElementsByClassName('on').length != 0) {
        //warna mengikuti cursor
        alert('Gerakkan Mousemu')

        //musik
        var xmusik = document.getElementById("musik")
        function playAudio() { 
          xmusik.play(); 
        }
        //musik dimainkan
        playAudio()

        //tulisan berubah
        // warnaH1 = document.getElementsByTagName('h1')[0]
        // while(document.getElementsByClassName('on').length != 0){
        // warnaH1.style.color = 'white'    
        // warnaH1.style.color = 'black'    
        // }

        tWarnaKursor.innerHTML = 'Nyalakan Lampu Disco : On'
        
          
        document.body.addEventListener('mousemove', function (event) {
            //posisi mouse
            // console.log(event.clientX)
            const xPosisi = Math.round((event.clientX / window.innerWidth) * 255)
            const yPosisi = Math.round((event.clientY / window.innerHeight) * 255)
            // randomB = Math.floor(Math.random() * 255)
            document.body.style.backgroundColor = `rgb(${xPosisi},${yPosisi},100)`;
        })
    
    } else{
        tWarnaKursor.innerHTML = 'Nyalakan Lampu Disco : Off'
        window.location.reload()
    // }
    // tWarnaKursor.onclick = function(){
    // tWarnaKursor.classList.toggle('on')
    // tWarnaKursor.innerHTML = 'Nyalakan Lampu Disco : Off'

    }
}