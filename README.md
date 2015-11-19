# marc-editor
A Javascript based MARC editor

## Note to developers

After clone the github repository

```
npm install --global webpack webpack-dev-server babel
npm install
```

Then to start the app
```
webpack-dev-server
```

Now open http://localhost:8080 

It only works for one MARC record and support a textual format from [MarcEdit] and MARC.

You can try to use this record to test it: 

```
=LDR  00798njm a22002417a 4500
=001  5637241
=003  DLC
=005  19920826084036.0
=007  sdubumennmplu
=008  910926s1957\\\\nyuuun\\\\\\\\\\\\\\eng\\
=010  \\$a   91758335
=028  00$a1259$bAtlantic
=040  \\$aDLC$cDLC
=050  00$aAtlantic 1259
=245  04$aThe Great Ray Charles$h[sound recording].
=260  \\$aNew York, N.Y. :$bAtlantic,$c[1957?]
=300  \\$a1 sound disc :$banalog, 33 1/3 rpm ;$c12 in.
=511  0\$aRay Charles, piano & celeste.
=505  0\$aThe Ray -- My melancholy baby -- Black coffee -- There's no you -- Doodlin' -- Sweet sixteen bars -- I surrender dear -- Undecided.
=500  \\$aBrief record.
=650  \0$aJazz$y1951-1960.
=650  \0$aPiano with jazz ensemble.
=700  1\$aCharles, Ray,$d1930-$4prf
```


[MarcEdit]: http://marcedit.reeset.net/
