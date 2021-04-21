function teste() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')



    if (fano.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        console.log (fsex[0])
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade == 0 && idade < 10) {
                img.setAttribute("src", "bebemenino.png")
            } else if (idade < 21) {
                img.setAttribute("src", "jovemhomem.png")
            } else if (idade < 50) {
                img.setAttribute("src", "adultohomem.png")
            } else {
                img.setAttribute("src", "senhorhomem.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
    
        if (idade == 0 && idade < 10) {
            img.setAttribute("src", "bebemenina.png")
        } else if (idade < 21) {
            img.setAttribute("src", "jovemmulher.png")
        } else if (idade < 50) {
            img.setAttribute("src", "adultamulher.png")
        } else {
            img.setAttribute("src", "senhoramulher.png")
        }
    }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}