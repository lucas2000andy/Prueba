//clase Motobomba
class Motobomba {
    constructor(codigo, bombe = []) {
        this.codigo = codigo;
        this.bombe = bombe;
    }
    addBombero(bomberoMan) {
        this.bombe.push(bomberoMan);
    }
}