const matk1 = {
    nimetus: "Sügismatk Kõrvemaal",
    pildiUrl: "/assets/maed1.jpg",
    kirjeldus: "Lähme ja oleme kolm päeva looduses",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee"]
 }
 
 
 const matk2 = {
    nimetus: "Süstamatk Hiiumaal",
    pildiUrl: "/assets/maed2.jpg",
    kirjeldus: "Lähme ja oleme kolm päeva vee peal",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee", "uudo@ryhkija.ee"]
 }
   
 const matkad = [
    matk1,
    matk2,
    {
        nimetus: "Mägimatk Otepääl",
        pildiUrl: "/assets/maed1.jpg",
        kirjeldus: "Lähme ja oleme kolm päeva mägedes",
        osalejad: ["uudo@ryhkija.ee"]
    }
    
 ]
 const uudis1 = {
   nimetus: " Rootsi suusakoondislased pidid MM-i eelsest treeningust loobuma",
   pildiUrl: "/assets/sport1.jpg",
   kirjeldus: " Kehvad rajatingimused sundisid Rootsi murdmaasuusatajaid teisipäeval Trondheimi maailmameistrivõistlusteks ettevalmistava treeningu võistluspaigast eemale kolima.",
}

const uudis2 = {
   nimetus: " Aivar Pohlak kandideerib UEFA täitevkomiteesse",
   pildiUrl: "/assets/sport2.jpg",
   kirjeldus: " Eesti Jalgpalli Liidu (EJL) president Aivar Pohlak kandideerib erinevate Euroopa alaliitude juhte koondavasse UEFA täitevkomiteesse",
}

const uudised = [
   uudis1,
   uudis2,
   {
       nimetus: "Tauson jõudis esimest korda kõrgeima kategooria WTA turniiril poolfinaali",
       pildiUrl: "/assets/sport3.jpg", 
       kirjeldus: "22-aastane taanlanna Clara Tauson jõudis Dubais jätkuval kõrgeima kategooria WTA tenniseturniiril poolfinaali.",
   }
   
]

 function loeMatkadeAndmed() {
   return matkad
 }

 function loeUudisedAndmed() {
   return uudised
 }

 function lisaOsaleja(matkaIndeks, osalejaEmail) {
   const matk = matkad[matkaIndeks]
   if (!matk) {
      throw Error("Otsitavat matka ei ole")
   }

   if (!osalejaEmail) {
      throw Error("osaleja email peab olema määratud")
   } 
   
   if (matk.osalejad.findIndex( el => el === osalejaEmail) !== -1) {
      throw Error("Osaleja on juba registreerunud")
   }

   matk.osalejad.push(osalejaEmail)

 }
 module.exports = {
   loeMatkadeAndmed,
   loeUudisedAndmed,
   lisaOsaleja
 }