# Journal Projektarbeit Datenbanken und Webtechnologie

## 03.11.2024 09:00

- Habe versucht, in der Feusi Ubuntu VM die Umgebung aufzusetzen. Immer wieder crashes, habe danach auf meinem eigenen PC WSL, Docker und Visual Studio Code installiert.

## 03.11.2024 09:21

- Projekt von Ismail geklont und Ordner in VSCode geöffnet. Nach `docker-compose up -d` gesehen, dass die RestAPI immer wieder neu startet. Geprüft, ob in der `docker-compose.yml` der richtige Port angegeben ist.
  - `DB_PORT=3306` # ← Wert geändert von `3309:3306` auf `3306`. Beide sind nun "Running"

## 03.11.2024 09:30

- API hat anscheinend noch immer Probleme, auf die DB zuzugreifen. Versucht, per ChatGPT rauszufinden, was los ist. ChatGPT schickt mich ins Nirvana. Erinnere mich, dass wir auch per Browser überprüfen können, ob die API auf die DB zugreifen kann. [http://localhost:3000/customers/1](http://localhost:3000/customers/1) funktioniert. Schicke dies ChatGPT und siehe da, AI ist einverstanden. Nun geht es daran, das React-Frontend einzurichten.

## 03.11.2024 09:36

- `cd my-app` und dir bestätigen, dass ich mich nun im Ordner des React-Frontends befinde. `npm install`, um Dependencies zu installieren.
- Hat leider nicht funktioniert. Überprüfung per elevated PowerShell und `node -v` gibt Fehlermeldung aus, npm wird nicht gefunden. Laut GPT ist Node.js nicht installiert?
- Installiere Node.js.

## 03.11.2024 09:53

- Nach einer kurzen Pause und einem Reboot, `docker-compose down` und `docker-compose up -d` fragt mich VSCode, ob ich die recommended Extensions von Huachao Mao und Matheus Teixeira installieren will. Ich erinnere mich, dass die beiden die React-Extension für VSCode geschrieben haben. Sieht so aus, als hätte ich React noch nicht im VSCode installiert, also mache ich das und gehe zurück ins Projekt von Ismail.
- Eine Überprüfung von [http://localhost:3000/customers/1](http://localhost:3000/customers/1) zeigt, dass alles noch immer funktioniert, erhalte Customername zurück.
- Ich überprüfe, ob die Node.js-Installation funktioniert hat mit elevated PowerShell und `node -v` und `npm -v`.
- Node.js geht, `npm -v` hat noch Probleme und liefert keine Version.
- Ich ändere die Execution Policy im elevated PowerShell per `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` und bestätige mit "Ja".
- Nun erhalte ich bei `npm -v` eine Version zurück, heißt: es geht.

## 03.11.2024 10:00

- Ich gebe `npm install` ein. Ein Haufen Fehlermeldungen, aber ich ignoriere das jetzt einfach mal.
- Ich gebe `npm start` ein und erhalte: ? Something is already running on port 3000.
- Es fragt mich, ob ich die App auf einem anderen Port starten will. Ich gebe einfach mal "Yes" ein.
- Funktioniert, nun zeigt es mir die Seite von Ismail an. Sehr schön! Coffeetime!

## 03.11.2024 10:17

- OK, nun geht es ans Anpassen und Funktionen hinzufügen. Ich fange an mit dem Hinzufügen von Funktionen. Eine Suchfunktion wäre ganz schön. Mal schauen, wie das geht. Ich frage unsere AI-Overlords.
- Ok, nun durchsuche ich `App.js`, ob bereits eine Suchfunktion vorhanden ist. Ctrl+F nach "search" ergibt keine Resultate, Ctrl+F nach "query" hingegen schon. Ich sehe aber, dass die Anfragen von query nicht für eine Suchfunktion genutzt werden.
- Ich möchte gerne ein Suchfeld haben.
- Ich überprüfe zur Sicherheit nochmal die React-Seite und sehe, dass doch bereits eine Suchfunktion eingebaut ist. Tja. Wie wäre es dann mit einem Dashboard, welches Preisstatistiken zeigt?

## 03.11.2024 10:34

- Eine Recherche zeigt, dass dies umsetzbar ist. Let's do it!
- Unter `w3schools-database-master/rest-api/app.js` habe ich Code hinzugefügt, welcher den Durchschnittspreis aller Produkte ausgibt sowie die meistverkauften Produkte. Zeile markiert mit "Ab hier ist mein eigener Code".

Danach unter `w3schools-database-master/my-app/src/components` eine neue `Dashboard.js` Komponente hinzugefügt. Markiert mit "Eigener Code für Dashboard".

## 03.11.2024 10:47

- AI meint, ich soll Routing importieren und Routing konfigurieren. Ich bin mir nicht sicher, ob Ismail dies bereits getan hat, ich habe irgendwas davon im Code gelesen (also dass er Recherche zu Routing gemacht hat etc.).
- Ich überprüfe `package.json` und tatsächlich, `react-router-dom` ist bereits vorhanden.
- Ich gehe zu `w3schools-database-master/my-app/src/App.js`.

## 03.11.2024 11:14

- Ok, "AI made a mess" und gibt mir nicht mehr sehr hilfreiche Tipps. Ich versuche es trotzdem weiter. Ich exportiere mein gesamtes Projekt als ZIP und füttere die AI damit, um zu sehen, ob GPT mir hier weiterhelfen kann.
- Whoops, ich breche ab. Der gesamte Ordner ist 500 MB groß?!
- Panicmode! Ich CTRL+Z zurück, soweit es geht. Habe noch gesehen, dass die `CategoryList.js` noch vorhanden ist und diesen ebenfalls gelöscht. `docker-compose down` und wieder up, sowie `npm start`, um zu sehen, ob es noch funktioniert.
- Ok, funktioniert. Puh!

## 03.11.2024 11:24

- Vielleicht ist ein Dashboard etwas zu heftig für den Anfang. Sind ja doch recht substantielle Änderungen in der Struktur und ich vertraue AI noch nicht genug und weiß noch nicht genug, um die Änderungen selber gegenzuprüfen.
- Mal sehen, ob ich nicht etwas Einfacheres ändern kann. Zuerst Kaffee.

## 03.11.2024 11:30

- Ok, Kaffee ready, Round 2, let's go.
- Versucht, Änderungen in `App.js` vorzunehmen, simple Design-Änderungen, aber diese wurden nicht übernommen. Auch nicht, wenn ich Tailwind neu initialisiere oder die Files neu generieren lasse. Gegoogelt und gesehen, dass es mit WSL zusammenhängen könnte. [https://stackoverflow.com/questions/69276057/wsl-2-react-not-reloading-with-file-changes](https://stackoverflow.com/questions/69276057/wsl-2-react-not-reloading-with-file-changes)
- Ich nutze WSL2, aber die Files liegen auf meinem Windows-Drive. Der Artikel schlägt vor, dass man die Files auf dem Linux-Drive haben soll. Ich versuche das mal.

## 03.11.2024 14:33

- Ok, hat auch nicht geklappt. Nach mehreren Troubleshooting-Versuchen bin ich zurückgerudert und habe bemerkt, dass Anpassungen in `App.js` nicht zu einer Veränderung des Designs führen, Anpassungen in den einzelnen Pages hingegen schon. Ich passe mal die Tabelleneinzüge an mit Hinzufügen von "text-left", damit die Tabellenheader immer linksbündig sind. Ich mache dies auf allen 3 Pages.
- Habe zudem die Farben der Buttons etwas angepasst bei den classNames.
- Schatten bei den Suchfeldern hinzugefügt, besser sichtbar.
- Weitere Anpassungen gemacht und noch letzte Korrekturen. Sieht nun ok aus. Möchte aber selber noch eine weitere Funktion hinzufügen. Mal schauen, was sich einfach umsetzen lässt.

## 03.11.2024 16:14

- Ok, habe nun bei den `Products.js` eine Exportfunktion zu CSV hinzugefügt. Getestet und funktioniert. That's it. Ich beende mein Projekt und konvertiere dieses Journal zu Markdown.
