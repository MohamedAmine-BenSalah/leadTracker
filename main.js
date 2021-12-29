let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');


inputBtn.addEventListener('click',()=> {
    let inputLead = inputEl.value;
    myLeads.push(inputLead);
    for (let i=0;i<myLeads.length;i++) {
        ulEl.innerHTML +=  "<li>" +  myLeads[i] + "</li> "
    }
    
    console.log(myLeads);
})
