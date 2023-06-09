# bun-drop
 
### Project Setup

`npm install`

### Running the App

`npm run dev`

### Starting the json-server

`npm run json-server`

# Analys
Jag har valt att använda mig av Vite, då implementationen kändes lättare. Jag skapade Figma designer för både desktop och mobile varianter. Implementationen för de första komponenterna samt sidorna efterliknar designen i stort sätt, dock mobilvarianten av sidorna cart, sign in, register samt confirmation skiljer sig lite, då jag insåg att det var enklare att inte implementera nya/annorlunda komponenter och manipulerade istället de existerande, framför allt p.g.a. tidsbegränsning.

Jag delade upp min filstruktur i components, som i sin tur är indelade i kategorier av pages, individuella komponentmappar, samt forms och context. Jag skapade mina komponenter framför allt utifrån återanvändbarhet, samt för att ha en klarare filstruktur. Detta leder till att det är enklare att bygga vidare eller ändra på individuella delar av webbsidan. 

Jag bestämde mig även för att använda mig av contexts, nämligen CartContext och UserContext. Då jag behövde hålla koll på, samt eventuellt redigera state av användare samt cart, tyckte jag att detta var den enklaste lösningen. Tillsammans med utnyttjandet av localstorage, har jag lycktas skapa en simulation av login funktionalitet med hjlp av state. Min cart utnyttjar också localstorage. Jag har däremot varit försiktig med informationen som sparas om användaren i localstorage, p.g.a. säkerhetsskäl, dock förstår jag att det vanligtvis skulle ske via t.ex. tokens.

I början av arbetet använde jag mig mycket av inline styling på mina element, men insåg snabbt att detta hade varit väldigt rörigt. Jag har implementerat de flesta komponenterna med ett motsvarande css-modul. Tack vare detta, blir det även enklare att ändra på specifika komponenternas styling.

Planen var även att skapa en ikon för favorite/unfavorite funktionaliteten, men tiden räckte tyvärr inte till. Idéen var även att Navbar skulle vara sticky, så att denna hängde med när användaren scrollade, men detta ledde till lite oönskat beteende för mobil-menyn. Detta är definitivt saker som hade kunnats finslipas, och är någonting jag kommer att förbättra i framtiden. 

Länk till Figma: https://www.figma.com/file/VsaqN1DwID1b6oTHHZRpMK/Bun-Drop?type=design&node-id=0%3A1&t=mctLkSmkJxTZuwDE-1
