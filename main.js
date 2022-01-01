let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener('click',()=> {
    let inputLead = inputEl.value;
    
    myLeads.push(inputLead);
    inputEl.value = ""; 
    localStorage.setItem('myleads', JSON.stringify(myLeads))
    renderLeads();  
    
})
function renderLeads ()  {
    
    let listItems = "";
    for (let i=0;i<myLeads.length;i++) {
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
            </li>
            `
          

    }
    //manipulating the DOM is expensive so it's better to do it out side of the for loop
    ulEl.innerHTML = listItems 
 
    
    
}
