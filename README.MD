Dette er kode fra workshop https://github.com/rudfoss/jsIntroCourse - se brancher for løsninger.

For å kjøre: 

```
npm install
npm start
```



Nedenfor følger notater fra workshop:


* `npm init` starter et nytt node prosjekt med package json
* **webpack** 
  * pakker javascript applikasjoner til `bundle.js` med evt. transformasjoner med loadere, f.eks. babel. 
  * Webpack har egen config
  * webpack-hot-reloading - kan også bruke react redux for bedre hot reloading
  * loadere - loadere brukes av webpack - laster css filer, f.eks. css-loader
* `npm install <avhengighet>` 
  * installerer ulike avhengigheter tilsvarende maven dependencies og putter det i `package.json` som tilsvarer pom.xml.
  * generatorer fra angular og react setter opp package.json med standard avhengigheter og config
  * `--save-dev` sørger for å installere avhengighet som dev-avhengighet dvs, som ikke pakkes (av webpack?) for produksjon, men brukes under utvikling
* **eslint** - syntax sjekking og kodestandard, type sonar mens man utvikler. Se package.json for hvordan den kjøres. 
* **babel** 
  * en transpiler for å konvertere kode + webpack loader
  * babel-polyfill - emularer kode for bakoverkompatiblitet til gamle browsere - vi må ha med for å støtte async og await
* **knockout** for MVC binding fra f.eks. html til modell. Tilbyr også observables for å automatisk lytte og sende beskjed til lyttere når modellen endrer seg. 

**node - serverside** 
* **express** -> node server
* **helmet** - express plugin for å skjule headere fra server
* **nsp** - sjekker node dependecies for å sikkerhetssvakheter
* **body-parser** - parse basert på response type

`package.json`
* versjon syntax: ^ Vil ha siste minor versjon av node-ass
* har egen seksjon for script som man kan kjøre med `npm run <scriptnavn>` 

**webpack config:**
-  devtool: 'source-map' - webpack lager en bundle.js som samler all js kode i en fil. source-map gjør at browser debugger skjønner hvilke kildefiler som koden tilhører slik at man kan lage breakpoints på riktig sted.  
- her setter man opp loadere configurerer dem. 
- kan også sette opp plugins som gjør operasjoner utover loadere

**babel:** 
* har egen configfil: `.babelrc`
* velg babel preset config 
  * env: default babel config for å støtte veldig mye forskjellig... 
  * alternativt kan f.eks. target transpilering til ie10 bare. 

**eslint:**
* har egen config fil: `.eslinrc.json`
* extends: ferdig regler fra hjemmesida
* soureType: "module" ?
* "env": ikke klag på diverste miljøene/rammeverk vi kjører på
* kan ha flere eslint filer for å få feil hvis man skrive node kode et sted det ikke skal være med
* tall betydning: 0  ignorer, 2 gi feil,  1 gi warning
* putter det som script eslint i package.json for å kjøre det gjennom npm
* esw - linter mens man kjører

**html:**
- data- attributter i tags ignoreres av browser
- [pseudoelement](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) for å style sheets er noe nytt som kom i siste versjon av css

**Ressurser:**
- mdn - referanse på js, html og css

**Eventer:**
- Eventer har faser: targetfase (når den når target), bubble fase (ned så opp) og capture fase (nedover)

