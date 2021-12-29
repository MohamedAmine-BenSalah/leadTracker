let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');


inputBtn.addEventListener('click',()=> {
    let inputLead = inputEl.value;
    
    myLeads.push(inputLead);
    inputEl.value = ""; 
    renderLeads();  
})
let renderLeads = () => {
    
    let listItems = "";
    for (let i=0;i<myLeads.length;i++) {
    listItems +=  "<li>" +  myLeads[i] + "</li> "
    }
    
    //manipulating the DOM is expensive so it's better to do it out side of the for loop
    ulEl.innerHTML = listItems
    // console.log(myLeads);    
}