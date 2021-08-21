// update memory
function memoryUpdate(isMemory) {

    let totalMemoryCost = document.getElementById('memory-count');
    if (isMemory == '8gb') {
        totalMemoryCost.innerText = 0;
    } else if (isMemory == '16gb') {
        totalMemoryCost.innerText = 180;

    }
    return totalMemoryCost;
}


// update storage
function storageUpdate(isStorage) {

    let storageTotalCost = document.getElementById('storage-count');

    if (isStorage == '256gb') {
        storageTotalCost.innerText = 0;
    }

    if (isStorage == '512gb') {
        storageTotalCost.innerText = 100;
    }

    if (isStorage == '1tb') {
        storageTotalCost.innerText = 180;
    }
    return storageTotalCost;



}



// delivery
function deliveryUpdate(isDelivery) {

    let deliveryTotalCost = document.getElementById('delivery-count');


    if (isDelivery == 'delivery-free') {
        deliveryTotalCost.innerText = 0;
    }
    if (isDelivery == 'delivery-with') {
        deliveryTotalCost.innerText = 20;
    }
    return deliveryTotalCost;


}
// calculate everything
function calculate(memory, storage, delivery) {
    let memoryCostText = memoryUpdate(memory).innerText;
    const memoryCost = parseInt(memoryCostText);


    // storage count
    let storageCostText = storageUpdate(storage).innerText;
    const storageCost = parseInt(storageCostText);

    // delivery
    let deliveryCostText = deliveryUpdate(delivery).innerText;
    const deliveryCost = parseInt(deliveryCostText);
    // balance

    let currentBalance = document.getElementById('sub-total').innerText;
    let totalBalance = document.getElementById('total-price');
    totalBalance.innerText = memoryCost + storageCost + deliveryCost + parseInt(currentBalance);


    // promo code
    document.getElementById('button-promo').addEventListener('click', function() {
        const promoField = document.getElementById('my-promo');
        const promoCode = promoField.value;

        if (promoCode == 'stevekaku') {

            const total = totalBalance.innerText;
            const myTotal = total / 20;
            const totalPrice = document.getElementById('my-total').innerText;
            totalPrice = myTotal;


        }
        // document.getElementById('my-total').innerText = total;

        promoField.value = '';


    })


}
// update memory cost

document.getElementById('memory-8gb').addEventListener('click', function() {



    memoryUpdate('8gb');
    calculate('8gb');
});

document.getElementById('memory-16gb').addEventListener('click', function() {


    memoryUpdate('16gb');
    calculate('16gb');
});
// sttoage update

document.getElementById('default').addEventListener('click', function() {



    storageUpdate('256gb');
    calculate('256gb');
});


document.getElementById('storage-512gb').addEventListener('click', function() {



    storageUpdate('512gb');
    calculate('512gb');
});

document.getElementById('storage-1tb').addEventListener('click', function() {



    storageUpdate('1tb');
    calculate('1tb');
});



// update delivery

document.getElementById('delivery-free').addEventListener('click', function() {



    deliveryUpdate('delivery-free');
    calculate('delivery-free');
});

document.getElementById('delivery-with').addEventListener('click', function() {



    deliveryUpdate('delivery-with');
    calculate('delivery-with');
});