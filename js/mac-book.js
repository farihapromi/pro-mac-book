// memory handler

document.getElementById('memory-8gb').addEventListener('click', function() {

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    const memoryTotal8GB = document.getElementById('memory-count');
    memoryTotal8GB.innerText = 0;
    const memoryTotal8GBAmount = parseFloat(memoryTotal8GB.innerText);

})


document.getElementById('memory-16gb').addEventListener('click', function() {
    const memoryTotal16GB = document.getElementById('memory-count');

    memoryTotal16GB.innerText = 180;

    const memoryTotal16GBAmount = parseFloat(memoryTotal16GB.innerText);

})






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

}