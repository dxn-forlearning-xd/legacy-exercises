document.getElementById("convertBtn").addEventListener("click",function(){
    let dollars = parseFloat(document.getElementById("amount").value);

    if(isNaN(dollars)||dollars<=0){
        alert("Please enter a valid amount.");
        return;
    }

    let cents = Math.round(dollars*100);
    let quarters = Math.floor(cents/25);
    cents %= 25;
    let dimes = Math.floor(cents/10);
    cents %= 10;
    let nickls = Math.floor(cents/5);
    cents %= 5;

    let pennies = cents;

    document.getElementById("result").innerHTML = 
    `<p>${quarters} quarters</p>
    <p>${dimes} dimes</p>
    <p>${nickls} nickls</p>
    <p>${pennies} pennies</p>
    `
})
