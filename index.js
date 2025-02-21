const express = require('express')


const app = express()


app.get('/tervitus', (req, res) => {
   console.log(req.query)
   res.send(`
      <htm>
         <head>
         </head>
         <body>
            <h1>Tervitused.</h1> <br> <p style=color:blue;">Minu koer ${req.query.nimi} on maailma kõige sõbralikum koer.</p>
         </body>
      </html>


      `)
})


app.listen(3200)
