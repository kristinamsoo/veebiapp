console.log("Tere maailm")

function tervitus1(nimi) {
    return 'Tere'+nimi
}

const tervitus2 = (nimi) => {
    return 'Teist korda tervitame,' +nimi
}

const tervitus3 = nimi => 'Kolmas tervitus,' +nimi

//console.log(tervitus1('Kati'))
//console.log(tervitus1('Mati'))

function naitaTervitust(nimi, tervitusFunktsioon) {
    console.log(tervitusFunktsioon(nimi))
}

naitaTervitust('Mõmmi', tervitus1)
naitaTervitust('Mõmmi', tervitus2)
naitaTervitust('Mõmmi', tervitus3)
naitaTervitust('Mõmmi', nimi=> 'Neljas tervitus' + nimi)

