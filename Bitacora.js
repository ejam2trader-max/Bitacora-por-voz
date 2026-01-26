function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // Obtener datos enviados desde la PWA
  var data = JSON.parse(e.postData.contents);
  
  // Agrega la fila: Fecha, Resultado, Nota de Voz
  sheet.appendRow([new Date(), data.resultado, data.nota]);
  
  return ContentService.createTextOutput("Recibido");
}