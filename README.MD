* `npm init` starter et nytt node prosjekt med package json
* webpack - pakker javascript applikasjoner
* webpack-hot-reloading - react redux (for hot reloading)
* loadere - loadere brukes av webpack laster css filer, f.eks. css-loader
* generatorer fra angular og react setter opp package.json
* eslint - syntax sjekking og kodestandard, type sonar.
* babel - transpiling? og loader
* polyfill? emularer kode for bakoverkompatiblitet til gamle browsere

package.json:
* ^ Vil ha siste minor versjon av node-ass


 - https://github.com/rudfoss/jsIntroCourse


webpack config:
-  devtool: 'source-map', ?

babelrc:
- velg babel preset
- env: kan f.eks. target transpilering til ie10

eslint:
- extends: ferdig regler
- soureType: "module" ?
- "env": ikke klag på diverste miljøene/rammeverk vi kjører på
- kan ha flere eslint filer for å få feil hvis man skrive node kode et sted det ikke skal være med
- rules: 0  ignorer, 2 gi feil,  1 gi warning
- putter det som script eslint i package.json for å kjøre det gjennom npm
- esw - linter mens man kjører




html:
- data- attributter ignoreres av browser
- pseudoelement for å style i siste versjon

Ressurser:
- mdn - referanse på js, html og css


Eventer:

- Eventer har faser: targetfase (når den når target), bubble fase (ned så opp) og capture fase (nedover)

