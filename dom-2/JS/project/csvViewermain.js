import TableCsv from './JS/project/csvViewer.js';

const tableRoot = document.querySelector('csvRoot');


const tableCsv = new TableCsv(tableRoot);
tableCsv.update([
    [4500,"dom",35],
    [800,"dom",67],
    [4500,"dom",56],
],["ID","Name","Age"])


const csvFileInput = document.querySelector("#csvFileInput");

csvFileInput.addEventListener("change", (e) => {
  Papa.parse(csvFileInput.files[0], {
    delimiter: ",",
    skipEmptyLines: true,
    complete: (results) => {
      tableCsv.update(results.data.slice(1), results.data[0]);
    }
  });
});
