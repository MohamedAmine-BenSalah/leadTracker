let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');

let deleteBtn = document.getElementById('delete-btn');

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

deleteBtn.addEventListener('dblclick',()=> {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
    // render the empty array;
})

let tabBtn = document.getElementById('save-btn');
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderLeads(myLeads)
    })
})

inputBtn.addEventListener('click',()=> {
    let inputLead = inputEl.value;
    
    myLeads.push(inputLead);
    inputEl.value = ""; 
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderLeads(myLeads);  
    
})

function renderLeads (input)  {
    
    let listItems = "";
    for (let i=0;i<input.length;i++) {
    listItems += `
    <li>
        <a target='_blank' href='${input[i]}'>
            ${input[i]}
            </a>
            </li>
            `
          

    }
    //manipulating the DOM is expensive so it's better to do it out side of the for loop
    ulEl.innerHTML = listItems 
 
    
    
}

