// memory handler

document.getElementById('memory-8gb').addEventListener('click', function() {




    const memoryTotal8GB = document.getElementById('memory-count');
    memoryTotal8GB.innerText = 00;
    const memoryTotal8GBAmount = parseFloat(memoryTotal8GB.innerText);

})


document.getElementById('memory-16gb').addEventListener('click', function() {
    const memoryTotal16GB = document.getElementById('memory-count');

    memoryTotal16GB.innerText = 180;

    const memoryTotal16GBAmount = parseFloat(memoryTotal16GB.innerText);

})

// document.getElementById('memory-16gb').addEventListener('click', function getInputValue(memory) {
//             const memoryTotal16GB = document.getElementById('memory-count');
//             memoryTotal16GB.innerText = 180;

//             const memoryTotal = parseFloat(memoryTotal16GB.innerText);
//             return memoryTotal;

//         }


document.getElementById('storage-512gb').addEventListener('click', function() {
    const memoryTotal16GB = document.getElementById('storage-count');

    memoryTotal16GB.innerText = 100;

    const memoryTotal16GBAmount = parseFloat(memoryTotal16GB.innerText);

})


document.getElementById('storage-1tb').addEventListener('click', function() {
    const memoryTotal16GB = document.getElementById('storage-count');

    memoryTotal16GB.innerText = 180;

    const memoryTotal16GBAmount = parseFloat(memoryTotal16GB.innerText);

})


document.getElementById('delivery-free').addEventListener('click', function() {
    const memoryTotal16GB = document.getElementById('delivery-count');

    memoryTotal16GB.innerText = 0;

    const memoryTotal16GBAmount = parseFloat(memoryTotal16GB.innerText);

})

document.getElementById('delivery-with').addEventListener('click', function() {
    const memoryTotal16GB = document.getElementById('delivery-count');

    memoryTotal16GB.innerText = 20;

    const memoryTotal16GBAmount = parseFloat(memoryTotal16GB.innerText);

})













// function getStorage() {
//     const balanceTotal = document.getElementById('storage-count');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);

//     return previousBalanceTotal;
// }









function calculateTotal() {

    const bestPrice = 1299;
    const memoryTotal = 180;
    const storage512Gb = 100;
    const storage1Tb = 180;
    const delivery = 20;
    const totalPrice = bestPrice + memoryTotal + storage512Gb + delivery;
    const promo = totalPrice / 20;


    // update on html
    document.getElementById('memory-total').innerText = memoryTotal;
    document.getElementById('storage-total').innerText = storageTotal;
    document.getElementById('delivery-total').innerText = delivery;
    document.getElementById('total-price').innerText = totalPrice;

}