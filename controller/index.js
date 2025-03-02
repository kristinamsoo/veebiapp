const {loeMatkadeAndmed, lisaOsaleja, loeUudisedAndmed} = require("../data")

const naitaMatkad = (req, res) => {
    const matkad = loeMatkadeAndmed()
    console.log(matkad)
    res.render("matkad", {matkad: matkad})
 }

 const registreeriOsaleja =(req, res) => {
   lisaOsaleja(req.query.matk, req.query.email)
   res.redirect("/matkad")
 }

const naitaUudised = (req, res) => {
   const uudised = loeUudisedAndmed()
   console.log(uudised)
   res.render("uudised", {uudised: uudised})

}

 module.exports = {
    naitaMatkad,
    naitaUudised,
    registreeriOsaleja
 }

