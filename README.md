<p align="center"><img src="/logo.svg"></p>

## Before you start...
This code is nodejs version of source that my friend **GDLev**. 

He is open source creator such as I, you can discover his work by clicking there: [Click!](https://github.com/GDLev)

All my codes can be used for free in non commercial usage. If you want to support me just click **star** button and don't delete author info from code

## Setup
Before we start to cofigurating uploader make sure that you have registered domain & vm to host uploader.
* Free options
  * Domain: [freenom](https://www.freenom.com)
  * VM: [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/?source=CloudFree_CTA1_Default&intcmp=CloudFree_CTA1_Default)

### Required things:
```sh
NodeJS 16.x.x + | https://nodejs.org/
Express         | npm i express
ejs             | npm i ejs
formidable v2   | npm i formidable
```
### Config:
```js
// Cofiguration
const port = 80;
const dir = 'files';
const tokens = '12345'
const domain = 'example.com'
```
Find this code in `app.js`. 
* **port** - web app server port
* **dir** - folder where you want to store uploaded files
* **tokens** - special token to make sure that only you have access to uploader
* **domain** - name of domain you will be using for uploader

Configure this how you want 🙂
### Sharex custom uploader:
Open sharex main window, goto: `Destinations -> Custom uploader settings`, click `New`. Nez copy those settings:

<img width="750px" src="https://kame.tk/ULQXe.png">

Then change `Image uploader` $ `File uploader` to your new custom uploader

### Web uploader
Goto: `<YOUR_DOMAIN>/`, choose file & provide valid token, click `Upload` and have fun!

Access uploaded file by typing `<YOUR_DOMAIN>/<FILE_NAME>`
