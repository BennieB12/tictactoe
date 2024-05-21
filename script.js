let fields = [
  // 9 leere Felder ohne Inhalt erschaffen
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

function init() {
  // render funktikon wird geladen soibald der html vollständig geladen wurde
  render();
}

function render() {
  const contentDiv = document.getElementById("content"); //bekommt zugriff auf die leere div mit der id "content"

  let tableHtml = "<table>"; // wwir erzeugen eine leere Tabelle
  for (let i = 0; i < 3; i++) {
     // damit wird die jeweilige Zeile erzeugt ( 0,1 oder 2)
        tableHtml += "<tr>"; // durch for-scheliefe werden 3 tablöe rows generiert
        for (let j = 0; j < 3; j++) {
            // generiert das jeweilige feld
            const index = i * 3 + j; // die jeweilige Zeile * 3 + den wert des feldes ( 0,1 oder2) um den Wert index zu erhalten
            let symbol = ""; // leeres symbol weird eingefügt
            if (fields[index] === "circle") {
            // wenn das feld des arrays field den wert index hat (0-8) und dieser Wert ein Kreis ist
            symbol = "o"; // dann zeichne einen Kreis
            } else if (fields[index] === "cross") {
                symbol = "x";
            }
            tableHtml += `<td>${symbol}</td>`; // fügt die einzelnen tableelemente hinzu  
        }
        tableHtml += "</tr>"; // abschluss der table rows 
    }
    tableHtml += "</table>"; // schließt die tabelle

    contentDiv.innerHTML = tableHtml; // bekommt zugriff auf die leere div mit der id "content" und verändert diese zu tableHTML
}
