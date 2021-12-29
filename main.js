let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');


inputBtn.addEventListener('click',()=> {
    let inputLead = inputEl.value;
    myLeads.push(inputLead);
    console.log(myLeads);
})

