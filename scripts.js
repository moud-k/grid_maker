let table = document.querySelector("table");
let row_count = 0;
let column_count = 0;

let addRow = function()
{
    let new_row = document.createElement("tr");
    if(row_count == 0)
    {
        let new_cell = document.createElement("td");
        new_cell.onclick = function()
        {
            colorCell(new_cell);
        }
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
            new_cell.onclick = function()
            {
                colorCell(new_cell);
            }
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
        new_cell.onclick = function()
        {
            colorCell(new_cell);
        }
        new_row.appendChild(new_cell);
        table.appendChild(new_row);
        row_count++;
        column_count++;
    }
    else
    {
        let table_rows = document.getElementsByTagName("tr");
        for(let row of table_rows)
        {
            let new_cell = document.createElement("td");
            new_cell.onclick = function()
            {
                colorCell(new_cell);
            }
            row.appendChild(new_cell);
        }
        column_count++;
    }
}

let removeRow = function()
{
    if(row_count == 1)
    {
        let row = document.querySelector("tr");
        row.remove();
        row_count = 0;
        column_count = 0;
    }
    else if(row_count > 1)
    {
        let table_rows = document.getElementsByTagName("tr");
        let row = table_rows[table_rows.length - 1];
        row.remove();
        row_count--;
    }
}

let removeColumn = function()
{
    if(column_count == 1)
    {
        let table_rows = document.getElementsByTagName("tr");
        while(table_rows.length > 0)
        {
            table_rows[table_rows.length - 1].remove();
        }
        column_count = 0;
        row_count = 0;
    }
    else if(column_count > 1)
    {
        let table_rows = document.getElementsByTagName("tr");
        for(let row of table_rows)
        {
            let cells_in_row = row.getElementsByTagName("td");
            cells_in_row[cells_in_row.length - 1].remove();
        }
        column_count--;
    }
}

let getColor = function()
{
    let dropdown = document.getElementsByTagName("select")[0];
    let color = dropdown.options[dropdown.selectedIndex].value;
    if(color != "SELECT COLOR")
    {
        return color;
    }
    else
    {
        return -1;
    }
}

let colorCell = function(cell)
{
    let color = getColor();
    if(color != -1)
    {
        cell.style.backgroundColor = color;
    }
}

let colorAllUncoloredCells = function()
{
    let color = getColor();
    if(color != -1)
    {
        let table_cells = document.getElementsByTagName("td");
        for(let cell of table_cells)
        {
            let computedStyle = window.getComputedStyle(cell);
            let backgroundColor = computedStyle.backgroundColor;
            if(window.getComputedStyle(cell).backgroundColor == "white" || window.getComputedStyle(cell).backgroundColor == "rgb(255, 255, 255)")
            {
                cell.style.backgroundColor = color;
            }
        }
    }
}

let colorAllCells = function()
{
    let color = getColor();
    if(color != 1)
    {
        let table_cells = document.getElementsByTagName("td");
        for(let cell of table_cells)
        {
            cell.style.backgroundColor = color;
        }
    }
}

let clearAllCells = function()
{
    let table_cells = document.getElementsByTagName("td");
    for(let cell of table_cells)
    {
        cell.style.backgroundColor = "white";
    }
}

let changeBackground = function()
{
    let select = document.getElementsByTagName("select")[0];
    if(getColor() == -1)
    {
        select.style.backgroundColor = "buttonface";
    }
    else
    {
        select.style.backgroundColor = getColor();
    }
}