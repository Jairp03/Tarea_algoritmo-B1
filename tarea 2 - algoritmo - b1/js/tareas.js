class Tarea {
    div(n){
        let c = 1, acu = 0, r
        while(c < n){
            r = n % c
            if (r == 0){
                acu = acu + c
            }
            c = c + 1
        }
        return acu
    }
    divisores(){
        debugger
        let n, acu = 0
        n = parseInt(document.getElementById("n").value)
        acu = this.div(n)
        document.getElementById("resp").innerHTML = `La suma de sus divisores es ${acu}`
    }
    numper(){
        debugger
        let n, acu = 0
        n = parseInt(document.getElementById("n").value)
        acu = this.div(n)
        if(acu == n){
            document.getElementById("resp").innerHTML = `${n} es un numero perfecto`
        }
        else{
            document.getElementById("resp").innerHTML = `${n} no es un numero perfecto`
        }
    }
    p(n){
        let c, cont = 0
        for (c = 1; c <= n; c++){
            if (n % c == 0){
                cont = cont + 1
            }
        }
        return cont
    }
    primo(){
        debugger
        let n, cont = 0
        n = parseInt(document.getElementById("n").value)
        cont = this.p(n)
        if (cont == 2) {
            document.getElementById("resp").innerHTML = `${n} es un número primo`
        }
        else{
            document.getElementById("resp").innerHTML = `${n} no es un número primo`
        }
    }
    primogemelo(){
        debugger
        let n, cont = 0, contgemelo = 0
        n = parseInt(document.getElementById("n").value)
        cont = this.p(n)
        contgemelo = this.p(n+2)
        if (cont == 2 && contgemelo == 2) {
            document.getElementById("resp").innerHTML = `${n} y ${n+2} son números primos gemelos`
        }
        else{
            document.getElementById("resp").innerHTML = `${n} no tiene un primo gemelo`
        }
    }
    cadena(cad1, cad2){
        let c
        c = cad1 + " " + cad2
        return c
    }
    concatenar(){
        debugger
        let cad1, cad2, co
        cad1 = document.getElementById("frase1").value
        cad2 = document.getElementById("frase2").value
        co = this.cadena(cad1, cad2)
        document.getElementById("resp").innerHTML =`${co}`
    }
    isbuscarCadena(cadena,buscado){
        let posAux = 0, posC = 0, posB = 0, lonC = 0, lonB = 0, enc = false
        lonC = cadena.length
        lonB = buscado.length
        while (posC < lonC && enc == false) {
            if (cadena[posC] == buscado[0]) {
                posAux = posC
                posB = 0
                while (posAux < lonC && posB < lonB && cadena[posAux] == buscado[posB]) {
                    posAux++
                    posB++
                }
                if (posB == lonB) {
                    enc = true
                } else {
                    posC = posC + 1
                }
            }
            else {
                posC = posC + 1
            }
        }
        if (enc == true) {
            return posC
        } else {
            return -1
        }
    }
    buscarCadena(){
        let pos
        let cadena = document.getElementById("cadena").value
        let buscado = document.getElementById("buscado").value
        let resp = document.getElementById("resp")
        //debugger;
        pos = this.isbuscarCadena(cadena,buscado)        
        if (pos >=0) {
            resp.innerHTML = `${buscado} se encontró en la posicion: ${pos} de la cadena`
        } else {
            resp.innerHTML = `${buscado} No se encontró en la cadena`
        }
        
    }
    insertar(cad, sub, pos){
        let i, aux, s
        s = sub.length
        aux = ''
        for (i = 0; i < s; i++) {
            if (sub[i] !== '0') {
                aux += sub[i]
            }
        }
        cad = cad.slice(0, pos) + aux + " " + cad.slice(pos)
        return cad
    }
    insertarsubcadena(){
        debugger
        let cad, sub, pos, c
        cad = document.getElementById("cadena").value
        sub = document.getElementById("subcadena").value
        pos = document.getElementById("posicion").value
        c = this.insertar(cad, sub, pos)
    
        document.getElementById("resp").innerHTML = c
    }
    eliminarpalabra() {
        debugger
        let cadena, buscado, eli, aux = ""
        cadena = document.getElementById("cadena").value
        buscado = document.getElementById("eliminar").value
        eli = this.isbuscarCadena(cadena, buscado)
        if(eli !== -1){
            aux = cadena.replace(buscado, "")
        }
        cadena = aux
        document.getElementById("resp").innerHTML = `${cadena}`
    }
    cadena_arreglo(ar){
        let cad = "", i = 0, a
        a = ar.length
        for (i = 0; i < a; i++){
            cad = cad + ar[i]
            if (i < a - 1){
                cad = cad + ", "
            }
        }
        return cad
    }
    cad_arr(){
        debugger
        let ar, cad = "", i = 0, arr
        ar = document.getElementById("arreglo").value
        ar = ar.split(";")
        arr = this.cadena_arreglo(ar)
        document.getElementById("resp").innerHTML = `Cadena: ${arr}`
    }
    mayor(num){
        let pos, dig, n, max
        n = num.length
        max = parseInt(num[0])
        for (pos = 0; pos < n; pos++){
            dig = parseInt(num[pos])
            if (dig > max){
                max = dig
            }
        }
        return max
    }
    mayordelarreglo(){
        debugger
        let num, m
        num = document.getElementById("num").value
        num = num.split(",")
        m = this.mayor(num)
        document.getElementById("resp").innerHTML = `El número mayor es: ${m}`
    }
    isbuscaArreglo(arreglo,buscado){
        let pos = 0, enc = false
        while (pos < arreglo.length && enc == false) {
            if (arreglo[pos] == buscado) {
                enc = true
            } else {
                pos++
            }
        }
        if (enc == true) {
            return pos
        } else {
            return -1
        }
    }
    buscarArreglo(){
        debugger
        let arreglo = document.getElementById("numeros").value
        arreglo = arreglo.split(";")
        let buscado = document.getElementById("buscado").value
        let resp = document.getElementById("resp")
        let posi = this.isbuscaArreglo(arreglo, buscado)
        if (posi >=0) {
            resp.innerHTML = `${buscado} se encontró en la posicion ${posi} del arreglo`
        } else {
            resp.innerHTML = `${buscado} No se encontró en el arreglo`
        } 
    }
    insertararreglo(){
        debugger
        let ar, inser, pos
        ar = document.getElementById("arreglo").value
        ar = ar.split(";")
        inser = document.getElementById("insertar").value
        pos = document.getElementById("posicion").value
        for(let i = 0; i < ar.length; i++){
            if(i == pos){
                ar.splice(pos,0,inser)
            }
        }
        document.getElementById("resp").innerHTML = `arreglo: [${ar}]`
    }
    eliminararreglo(){
        let arreglo, an, buscado, elim
        arreglo = document.getElementById("arreglo").value
        arreglo = arreglo.split(";")
        buscado = document.getElementById("eliminar").value
        elim = this.isbuscaArreglo(arreglo, buscado)
        if (elim !== -1) {
            arreglo.splice(elim, 1);
        }
        document.getElementById("resp").innerHTML = `arreglo: [${arreglo}]`;
    }
    c_a(cad){
        let ar="", i, c
        c = cad.length
        for (i = 0; i < c; i++){
            ar = ar + cad[i]
            if (i < c - 1){
                ar = ar + "; "
            }
        }
        return ar
    }
    cadena_a_arreglo(){
        debugger
        let cad, x
        cad = document.getElementById("cadena").value
        cad = cad.split(",")
        x = this.c_a(cad)
        document.getElementById("resp").innerHTML = `arreglo: [${x}]`;
    }
    b10(n1, base){
        let n2, n3
        n2 = parseInt(n1,10)
        n3 = n2.toString(base)
        return n3
    }
    bases(){
        debugger
        let n1, x, base
        n1 = parseInt(document.getElementById("numero").value)
        base= parseInt(document.getElementById("base").value)
        x = this.b10(n1, base)
        document.getElementById("resp").innerText = `resultado: ${x}`
    }
    b2(n1, base){
        let n2, n3
        n2 = parseInt(n1,2)
        n3 = n2.toString(base)
        return n3
    }
    base(){
        debugger
        let n1, x, base
        n1 = parseInt(document.getElementById("numero").value)
        base= parseInt(document.getElementById("base").value)
        x = this.b2(n1, base)
        document.getElementById("resp").innerText = `resultado: ${x}`
    }
}
let ejer = new Tarea