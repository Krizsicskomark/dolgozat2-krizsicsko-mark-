const doc =
{
    customerBody:document.querySelector('#customerBody')
}

const state =
{
    url:'http://localhost:8000/customeres',
    CustomerList:[]
}

function getCustomer()
{
    fetch(state.url).then(response=>response.json()).then(result => {state.CustomerList=result
        renderCustomer()})
    
}

function renderCustomer()
{
    state.CustomerList.forEach(cs=>{
        var tr = document.createElement('tr')
        tr.innerHTML=`
        <td>${cs.id}</td>
        <td>${cs.name}</td>
        <td>${cs.email}</td>
        <td>${cs.city}</td>`
        
        doc.customerBody.append(tr)
    })
}

getCustomer()