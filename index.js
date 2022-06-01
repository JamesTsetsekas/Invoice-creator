let servicesArr = []
let renderServicesArr = [] 

//button consts
const washCarBtn = document.getElementById("wash-car")
const mowLawnBtn = document.getElementById("mow-lawn")
const pullWeedsBtn = document.getElementById("pull-weeds")
const sendInvoiceBtn = document.getElementById("send-invoice-btn")

//html consts
const priceEl = document.getElementById("price")
const servicesHtml = document.getElementById("ordered-services")

renderServices()

function renderServices() {
    // console.log(service, price)
    renderServicesArr = ""
    for (let i = 0; i < servicesArr.length; i++) {
        renderServicesArr += `
        <div class="services-rendered">
            <span class="service-name" onclick="remove${i}()">${servicesArr[i].service}</span>
            <span class="remove-service" onclick="remove${i}()">Remove</span>
            <span class="service-price">\<span class="dollar-sign">$</span>${servicesArr[i].price}</span>
        </div>`
    }
    
    servicesHtml.innerHTML = renderServicesArr
    
    priceEl.innerHTML =  `
        <span id="total-calc">\$${calcTotal()}</span>`
}


//event listeners

washCarBtn.addEventListener("click", function(){
        if (servicesArr.findIndex(item => item.service === "Wash Car") < 0) {
        washService = {service: "Wash Car", price: 10}
        servicesArr.push(washService)
   
        renderServices()
    }
})

mowLawnBtn.addEventListener("click", function(){
        if (servicesArr.findIndex(item => item.service === "Mow Lawn") < 0) {
        mowService = {service: "Mow Lawn", price: 20}
        servicesArr.push(mowService)
       
        renderServices()
    }
})

pullWeedsBtn.addEventListener("click", function(){
        if (servicesArr.findIndex(item => item.service === "Pull Weeds") < 0) {
        weedService = {service: "Pull Weeds", price: 30}
        servicesArr.push(weedService)
        
        renderServices()
    }
})

sendInvoiceBtn.addEventListener("click", function(){
    servicesArr = []
    servicesHtml.innerHTML = ""
    priceEl.innerHTML =  `
        <span id="total">$0</span>`
})

function remove0() {
    servicesArr.splice(0, 1)
    renderServicesArr = []
    servicesHtml.innerHTML = ""
    renderServices()
}

function remove1() {
    servicesArr.splice(1, 1)
    renderServicesArr = []
    servicesHtml.innerHTML = ""
    renderServices()
}

function remove2() {
    servicesArr.splice(2, 1)
    renderServicesArr = []
    servicesHtml.innerHTML = ""
    renderServices()
}


function calcTotal() {
    let totalPrice = 0
    for (let i = 0; i < servicesArr.length; i++) {
        totalPrice += servicesArr[i].price
    }
    return totalPrice
}