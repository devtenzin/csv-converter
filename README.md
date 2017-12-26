# Csv-converter
---
This csv converter will read a csv file that contains a ```Name``` field (can have other fields) and write a new csv file with only the ```First Name```, ```Last Name ```, and ```email``` fields. It will generate ```First Name``` and ```Last Name``` fields if the source file only contains a ```Name``` field.

### Prerequisites
   * Node

### Instructions
1. Clone the repo or download as zip.
    ```git clone git@github.com:developertenzin/csv-converter.git```
2. Open the command line to that folder and run ```npm install```.
3. Add your csv file in the ```source``` folder.
4. Rename your source file to ```data.csv```.
5. Open command line and run ```node app.js``` and your new csv file will be in the ```destination``` folder.
    Example: ```new-1514256427621.csv```
**Note**: Each new csv file generated will be suffixed with current UTC time in milliseconds so that it doesn't overwrite destination files.

Enjoy! 🔥 🙌🏻 😎