let fields = [
  // 9 leere Felder ohne Inhalt erschaffen
  null,
  'circle',
  null,
  'cross',
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
            symbol = generateCircleSVG(); // dann zeichne einen Kreis ( vorher "o" aber durch die funktion wird nun die funktion die einen kreis erzeugt aufgerufen)
            } else if (fields[index] === "cross") {
                symbol = generateCrossSVG(); // vorher "x" aber nun wird direkt die funktion aufgerufen, welche das kreuz zeichnet, welches wir designed haben.
            }
            tableHtml += `<td>${symbol}</td>`; // fügt die einzelnen tableelemente hinzu  
        }
        tableHtml += "</tr>"; // abschluss der table rows 
    }
    tableHtml += "</table>"; // schließt die tabelle

    contentDiv.innerHTML = tableHtml; // bekommt zugriff auf die leere div mit der id "content" und verändert diese zu tableHTML
}

function generateCircleSVG() {
  const color = '#00B0EF';
  const width = 70;
  const height = 70;

  return `<svg width="${width}" height="${height}">
            <circle cx="35" cy="35" r="30" stroke="${color}" stroke-width="5" fill="none">
              <animate attributeName="stroke-dasharray" from="0 188.5" to="188.5 0" dur="0.2s" fill="freeze" />
            </circle>
          </svg>`;
}

function generateCrossSVG() {
  const color = '#FFC000';
  const width = 70;
  const height = 70;

  const svgHtml = `
    <svg width="${width}" height="${height}">
      <line x1="0" y1="0" x2="${width}" y2="${height}"
        stroke="${color}" stroke-width="5">
        <animate attributeName="x2" values="0; ${width}" dur="200ms" />
        <animate attributeName="y2" values="0; ${height}" dur="200ms" />
      </line>
      <line x1="${width}" y1="0" x2="0" y2="${height}"
        stroke="${color}" stroke-width="5">
        <animate attributeName="x2" values="${width}; 0" dur="200ms" />
        <animate attributeName="y2" values="0; ${height}" dur="200ms" />
      </line>
    </svg>
  `;

  return svgHtml;
}