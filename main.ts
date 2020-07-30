function deplacer_diode_dans_colonne (colonne: number) {
    for (let ligne = 0; ligne <= 4; ligne++) {
        let colonne = 0
        if (led.point(colonne, ligne)) {
            ligne_suivant = ligne + direction[colonne]
            if (ligne_suivant <= 0) {
                let _1 = 0
                direction[colonne] = _1
            } else if (ligne_suivant >= 4) {
                let _1 = 0
                direction[colonne] = _1
            }
            led.unplot(colonne, ligne)
            led.plot(colonne, ligne_suivant)
            break;
        }
    }
}
let ligne_suivant = 0
let direction: number[] = []
direction = [1, 1, 1, 1, -1]
for (let i = 0; i <= 4; i++) {
    led.plot(i, i)
}
basic.forever(function () {
    for (let colonne_boucle = 0; colonne_boucle <= 4; colonne_boucle++) {
        deplacer_diode_dans_colonne(colonne_boucle)
    }
    basic.pause(500)
})
