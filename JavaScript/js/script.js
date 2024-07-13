var acctBalance = 5400;
var product1 = 3500;
var product2 = 2800;
var product3 = 5650;
var coupon = 300;

if (acctBalance >= product1)
    {
        console.log("You have successfully purchased a new product1!");
        acctBalance -= product1;
        console.log("Your new account balance is: ₦" + acctBalance);

        if (acctBalance >= product2)
        {
            console.log("You have successfully purchased a new product2!");
            acctBalance -= product2;
            console.log("Account balance: ₦" + acctBalance);
        }
        else
        {
            console.log("Sorry, you don't have sufficient balance to complete your transaction2");
            console.log("Account balance: ₦" + acctBalance);
        }
    }
else
    {
        console.log("Sorry, you don't have sufficient balance to complete your transaction");
        console.log("Account balance: ₦" + acctBalance);
    }


if (acctBalance >= product3 - coupon)
    {
        console.log("You have successfully purchased a new product3 ");
        acctBalance -= product1;
        console.log("Account balance: ₦" + acctBalance);
    }
else
    {
        console.log("Sorry, you don't have sufficient balance to complete your transaction");
    }



val1 = 7;
val2 = "7";

if (val1 == val2)
    {
        console.log("The values are the same");
    }


if (val1 === val2)
    {
        console.log("The values and type are the same");
    }
else
    {
        console.log("The values may be the same, but their types are different");
    }
