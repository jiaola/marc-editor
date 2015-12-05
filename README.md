# marc-editor
A Javascript based MARC editor

## Features

- Editing modes: MarcEdit text (mrk) format; MARC format
- Highlight field, subfield codes and indicators.

## Note to developers

After clone the github repository

```
$ npm install --global webpack webpack-dev-server babel
$ npm install
```

Then to start the app
```
$ webpack-dev-server
```

Now open http://localhost:8080

### Deploy to firebase

Install firebase

```
$ npm install -g firebase-tools
```

Then run

```
firebase deploy
```

It works for editing multiple MARC records and support a text format from [MarcEdit] and MARC.

You can paste the examples from these files to the corresponding panel to test.

- [MarcEdit text format](https://raw.githubusercontent.com/jiaola/marc4js/master/test/data/collection.mrk)
- [MARC format](https://raw.githubusercontent.com/jiaola/marc4js/master/test/data/PGA_2records.mrc)

[MarcEdit]: http://marcedit.reeset.net/
