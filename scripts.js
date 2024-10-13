let table = document.querySelector("table");
let row_count = 0;
let column_count = 0;

let addRow = function()
{
    let new_row = document.createElement("tr");
    if(row_count == 0)
    {
        let new_cell = document.createElement("td");
        let text = document.createTextNode("he");
        new_cell.appendChild(text);
        new_row.appendChild(new_cell);
        table.appendChild(new_row);
        row_count++;
        column_count++;
    }
    else
    {
        for(let i = 0; i < column_count; i++)
        {
            let new_cell = document.createElement("td");
            let text = document.createTextNode("he");
            new_cell.appendChild(text);
            new_row.appendChild(new_cell);
        }
        table.appendChild(new_row);
        row_count++;
    }
}

let addColumn = function()
{
    if(column_count == 0)
    {
        let new_row = document.createElement("tr");
        let new_cell = document.createElement("td");
        let text = document.createTextNode("he");
        new_cell.appendChild(text);
        new_row.appendChild(new_cell);
        table.appendChild(new_row);
        row_count++;
        column_count++;
    }
    else
    {
        let table_rows = document.getElementsByTagName("tr");
        for(row of table_rows)
        {
            let new_cell = document.createElement("td");
            let text = document.createTextNode("he");
            new_cell.appendChild(text);
            row.appendChild(new_cell);
        }
        column_count++;
    }
}