const express = require('express');
const path = require('path')
const fs = require('fs')
const app = express();

// Cofiguration
const port = 80;
const dir = 'files';
const tokens = '12345'
const domain = 'example.com'

const formidable = require('formidable')

// Express
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, dir)))

app.get('/', (req, res) => {
    res.render('upload')
})

// Routes
app.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();
    try {
        form.parse(req, (err, fields, files) => {
            const token = fields.token
            const oldPath = files.somefile.filepath
            const newPath = `./${dir}/${files.somefile.originalFilename}`
    
            if(tokens === token) {
                fs.rename(oldPath, newPath, (err) => {
                    if(err) throw err;
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.write(`File has been uploaded successfully!\n\nFile name: ${files.somefile.originalFilename}\nPath: ${newPath}\n`)
                    res.end()
                })
            } else {
                res.write('Provided token is not part of token list, try again')
                res.end()
            }
        })
    } catch(e) {
        res.write(`Try again`)
    }
})

app.post('/sharex', (req, res) => {
    const form = new formidable.IncomingForm();
    try {
        form.parse(req, (err, fields, files) => {
            const token = fields.token
            const oldPath = files.somefile.filepath
            const newPath = `./${dir}/${files.somefile.originalFilename}`

            if(tokens === token) {
                fs.rename(oldPath, newPath, (err) => {
                    if(err) throw err;
                    res.writeHead(200, {'Content-Type': 'text/json'})
                    res.write(`https://${domain}/${files.somefile.originalFilename}`)
                    res.end()
                })
            } else {
                res.write('Provided token is not part of token list, try again')
                res.end()
            }
        })
    } catch(e) {
        res.write(`Try again`)
    }
})

app.listen(port, () => console.log(`Uploader working on port ${port}`))