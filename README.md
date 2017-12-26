# Csv-converter
---
This csv converter will read a csv file that contains a `name` field (can have other fields) and write a new csv file with only the `first name`, `last name `, and `email` fields. It will generate `first name` and `last name` fields if the source file only contains a `name` field.

### Prerequisites
   * Node
        If you don't have node, you can download it by going to nodejs.org

### Instructions
1. Clone the repo or download as zip.
    `git clone git@github.com:developertenzin/csv-converter.git`
2. Unzip the folder if you downloaded a zipped version.
2. Open the command line to that folder and run `npm install`.
    * Open a program called `terminal`. If you're on Windows, go download `git bash` [here](https://git-scm.com/download/win).
    * Type `cd ~/downloads/csv-converter`.
    * Open the folder by typing `open .` or use your mouse to find the folder and open it.
3. Add your csv file in the `source` folder.
4. Rename your source file to `data.csv`.
5. Open command line and run `node app.js` and your new csv file will be in the `destination` folder.
    Example: `new-1514256427621.csv`
**Note**: Each new csv file generated will be suffixed with current UTC time in milliseconds so that it doesn't overwrite destination files.

###Example

BEFORE:

User id | Name                         | Email           | Phone      | Gender | Country |
------- | ---------------------------- | -------------   | ---------- | ------ | ------- |
2312345 | Tom Cruise                   | tomcruise@gmail | 8072939909 | Male   | US      |
2222334 | Jenny                        | jenny69@yahoo   | 8053932863 | Female | UK      |
9898374 | John Michael Hildalgo Junior | jmhj@gmail      | 9052227865 | Male   | Mexico  |

AFTER:

First Name | Last Name                | Email
---------- | ------------------------ | -------------
Tom        |  Cruise                  | tomcruise@gmail
Jenny      |                          | jenny69@yahoo
John       |  Michael Hildalgo Junior | jmhj@gmail

Enjoy! 🔥 🙌🏻 😎