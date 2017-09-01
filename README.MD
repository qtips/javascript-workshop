Dette er kode fra workshop https://github.com/rudfoss/jsIntroCourse - se brancher for løsninger.

For å kjøre: 

```
npm install
npm start
```

Filstruktur:
```
- api    -> server side kode
- shared -> util js kode delt mellom serverside og klient
- src    -> klient kode
|_____components -> model+controller elementer for LoginBox, Todo item og TodoList
|_____services   -> kode for å kalle backend - mapping til klienttyper er i components
|_____style      -> styling for de ulike komponentene
- App.js -> setter opp hovedsiden, kaller backend og mappere, holder toppnivå tilstanden
- www    -> inneholder statisk del. 
diverse configfiler
- .babelrc
- .eslintrc.json
- package.json
- webpack.config.js

```


Nedenfor følger notater fra workshop:


* `npm init` starter et nytt node prosjekt med package json
* **webpack** 
  * pakker javascript applikasjoner til `bundle.js` med evt. transformasjoner med loadere, f.eks. babel. 
  * Webpack har egen config
  * webpack-hot-reloading - kan også bruke react redux for bedre hot reloading
  * webpack-dev-server i package.json - sørger for å oppdatere js innehold i browser mens man koder
  * loadere - loadere brukes av webpack - laster css filer, f.eks. css-loader
* `npm install <avhengighet>` 
  * installerer ulike avhengigheter tilsvarende maven dependencies og putter det i `package.json` som tilsvarer pom.xml.
  * generatorer fra angular og react setter opp package.json med standard avhengigheter og config
  * `--save-dev` sørger for å installere avhengighet som dev-avhengighet dvs, som ikke pakkes (av webpack?) for produksjon, men brukes under utvikling
* **eslint** - syntax sjekking og kodestandard, type sonar mens man utvikler. Se package.json for hvordan den kjøres. 
  * har egen config fil: `.eslinrc.json`
* **babel** 
  * en transpiler for å konvertere kode + webpack loader
  * **babel-polyfill** - emularer kode for bakoverkompatiblitet til gamle browsere - vi må ha med som dependency for å støtte async og await
    * eneste avhengighet som brukes av klientkode og er derfor definert i webpack-config
  * har egen configfil: `.babelrc`
* **knockout** for MVC binding fra f.eks. html til modell. Tilbyr også observables for å automatisk lytte og sende beskjed til lyttere når modellen endrer seg. 
* **concurrently** - kjører flere npm kommandoer parallelt, se start skriptet i package.json


**node - serverside** 
* **express** -> node server
* **helmet** - express plugin for å skjule headere fra server
* **nsp** - sjekker node dependecies for å sikkerhetssvakheter
* **body-parser** - parse basert på response type
* **cors** - for å tillate cross-origin
  * cross-origin sjekkes av browser. Server blir kalt, men server blokkerer svaret til klient hvis server ikke returnerer spesifikk header.

`package.json`
* versjon syntax: ^ Vil ha siste minor versjon av node-ass
* har egen seksjon for script som man kan kjøre med `npm run <scriptnavn>` 

**webpack config fil:**
*  devtool: 'source-map' - webpack lager en bundle.js som samler all js kode i en fil. source-map gjør at browser debugger skjønner hvilke kildefiler som koden tilhører slik at man kan lage breakpoints på riktig sted.  
* her setter man opp loadere configurerer dem. 
* kan også sette opp plugins som gjør operasjoner utover loadere

**babel config fil:** 
* velg babel preset config 
  * env: default babel config for å støtte veldig mye forskjellig... 
  * alternativt kan f.eks. target transpilering til ie10 bare. 

**eslint config fil:**
* extends: ferdig regler fra hjemmesida
* soureType: "module" ?
* "env": ikke klag på diverste miljøene/rammeverk vi kjører på
* kan ha flere eslint filer for å få feil hvis man skrive node kode et sted det ikke skal være med
* tall betydning: 0  ignorer, 2 gi feil,  1 gi warning
* putter det som script eslint i package.json for å kjøre det gjennom npm
* esw - eslint-watch - linter mens man kjører

**html:**
- data- attributter i tags ignoreres av browser
- [pseudoelement](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) for å style sheets er noe nytt som kom i siste versjon av css

**Ressurser:**
- mdn - referanse på js, html og css

**Eventer:**
- Eventer har faser: targetfase (når den når target), bubble fase (ned så opp) og capture fase (nedover)

