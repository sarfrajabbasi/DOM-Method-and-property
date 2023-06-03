
class TableCSVExporter{
constructor(table,includeHeaders = true ){
    this.table = table;
    // array of the all the table row  elements
    this.rows = Array.from(table.querySelectorAll('tr'));
    console.log(this);
    // so if you dont want to add header then
      if(!includeHeaders && this.rows[0].querySelectorAll('th').length){
        // extract header
        this.rows.shift()
      }
      console.log(this._findLongestRowLength());

}
    convertToCSV(){
        // we are looping through the rows
        const lines = [];
        const numCols = this._findLongestRowLength();
         for(let row of this.rows){
            let line = "";
            for(let i=0;i< numCols;i++){
                if(row.children[i] !== undefined){
                    line += TableCSVExporter.parseCell(row.children[i]);
                }

                line += (i !== (numCols-1) ? ",":"");

            }
             lines.push(line)
         }
         return lines.join('\n');
    }

    _findLongestRowLength(){
        // this one run reduce on the  rows array;
        // longest row and for each row(arg.),if each row child element count is greater then current row length then we are going to set the new length to be row.childElementCount,otherWise l;
        return this.rows.reduce((l,row)=>
            row.childElementCount > l ? row.childElementCount : l,0)

    }

    static parseCell(tableCell){

        // it gonna implement all of the csv rule for file
         
        let parseValue = tableCell.textContent

        // replace all double quotes with two double quotes:---
        parseValue = parseValue.replace(/"/g,'""');

        // if they content comma,new line or duble quotes enclose in double quotes.

        parseValue = /[",\n]/.test(parseValue)? `"${parseValue}"`:parseValue;
        return parseValue;

    }
}