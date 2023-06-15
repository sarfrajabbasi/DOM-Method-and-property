const express = require('express');
const shuffleArray = require('shuffle-array');
const chance = require('chance').Chance();
const suffleAarray = require('shuffle-array');

const app = express();

const data = {
    headers:["Name","Age","Profession","Country"],
    row:new Array(10).fill(undefined).map(()=>{
        return[
            chance.name(),
            chance.age(),
            chance.profession(),
            chance.country({full:true}),
        ];
    })
}

app.get('../data',(req,res)=>{
    res.json({
        headers:data.headers,
        rows:shuffleArray(data.rows),
        lastUpdated:new Date().toISOString()
    });
});

app.listen(3001,()=>console.log('app is running'));



{
/**
 * populate data table with some data.
 * 
 * @param {HTMLDivElement} root 
 */
 async function updateTable(root){
    root.querySelector('.table_refresh__button').classList.add(".table_refresh__button--refreshing");
    const table = root.querySelector('.table_refresh__table');
    const response = await fetch(root.dataset.url);
    const data = await response.json();
    console.log(data);
    // Clear table 

    table.querySelector('thead tr').innerHTML = "";
    table.querySelector('tbody ').innerHTML = "";

    // Populate headers

    for(const header of data.headers){
          table.querySelector('thead tr').insertAdjacentHTML('beforeend',`<th>${header}</th>`)

    }

    // Populate rows

    for(const row of data.rows ){
        table.querySelector('tbody').insertAdjacentHTML('beforeend',`
        <tr>
        ${row.map(col =>`<td>${col}</td>`).join("")}
        </tr>
        `)
    }

    // update 'last updated ' text
    root.querySelector('.table-refresh__label').textContent  = `Last Update : ${new Date(data.lastUpdated).toLocaleString()}`
     
    // stop rotating
    root.querySelector('.table_refresh__button').classList.remove(".table_refresh__button--refreshing");
 }



    for(const root of document.querySelectorAll('.table-refresh[data-url]')){
        const table = document.createElement('table');
        const options = document.createElement('div');

        table.classList.add('table-refersh__table');
        options.classList.add('table-refersh__options');

        table.innerHTML = `
        <thead>
        <tr></tr>
        </thead>
        <tbody>
        <tr>
        <td>Loading</td>
        </tr>
        </tbody>
        `
        options.innerHTML = `
        <span class="table-refresh__label">Last Update : never</span>
        <button class="table_refresh__button--refreshing">
            <i class="material-icons">refresh</i>
        </button>
        `
        root.append(table,options);
        options.querySelector('.table_refresh__button').addEventListener('click',()=>{
            updateTable(root);
        })
        updateTable(root);
    }
}