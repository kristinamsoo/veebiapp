const express = require('express')

const path = require("path")


const {naitaMatkad, naitaUudised, registreeriOsaleja} = require("./controller")

const app = express();
app.use(express.json())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/assets', express.static('public'))

app.get('/tervitus', (req, res) => {
   console.log(req.query)
   res.send (`
            Tervitused ${req.query.nimi}
         </body>
      </html>
      `)

})

app.get('/harjutus1', (req, res) => {
   console.log(req.query)
   res.send (`
      <html>
         <head> 
         <body>
            <h1>Tervitused.</h1>
            <br>
            <p style=color:blue; >Minu koer ${req.query.nimi} on maailma kõige sõbralikum koer.</p> 
            </body>
      </html>
      `)
   })
 
   app.get('/matkad', naitaMatkad)
   app.get('/uudised', naitaUudised)
   app.get('/registreeru', registreeriOsaleja)
app.listen(3200)
