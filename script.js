function signin(){
    window.location='./index.html'
}

function signup(){
    window.location='./register.html'
}

function register(){
    user={
        email:remail.value,
        uname:uname.value,
        pass:rpass.value,
        income:0,
        
        expense:0,
        balance:0

    }

    if(user.email==''||user.uname==''||user.pass==''){
        alert("Please Fill missing fields")
    }
    else{
        if(user.email in localStorage){
            alert("Already exist")
        }
        else{
            localStorage.setItem(user.email,JSON.stringify(user))
            window.location='./index.html'
            alert("User Registered successfully")

        }
    }
}

function login(){
    logindetails={
        email:lemail.value,
        pass:lpass.value,
    }
    if(logindetails.email=="" || logindetails.pass==""){
        alert("Please fill all the fields");
    }
    else if(logindetails.email in localStorage){
        let key=logindetails.email;
        let keyvalues=JSON.parse(localStorage.getItem(key));
        let username=keyvalues.uname
        if(logindetails.pass==keyvalues.pass){
            window.location="./home.html";
            alert("Logged Succesfully");
            localStorage.setItem('username',username);
           
        }
        else{
            alert("Incorrect password");
        }
    }
    else{
        alert("Email not found");
    }


}

username=localStorage.getItem('username')
console.log(username)
head1.innerHTML=`Welcome ${username}`

function addIncome() {
    const income = parseFloat(document.getElementById('income').value);
    const email = document.getElementById('iemail').value;

    if (email === '' || income=='' || income <= 0) {
        alert("Please fill in a valid email and amount");
        return;
    }

    let incomeData = localStorage.getItem(email);
    const totalincome = document.getElementById('totalincome');
    const balance = document.getElementById('balance');
    

    if (incomeData) {
        let parseIncome = JSON.parse(incomeData);
        
        parseIncome.income+=income;
        parseIncome.balance=parseIncome.income-parseIncome.expense
        
        totalincome.innerHTML = parseIncome.income;
        balance.innerHTML = parseIncome.balance;
        username=parseIncome.uname;



        localStorage.setItem(email, JSON.stringify(parseIncome));

        
        htmldata=``
        htmldata=`
        <tr>
                    <td class="border border-3 border-light" style="padding:10px 25px;text-align:center;">${username}</td>
                    <td class="border border-3 border-light" style="padding:10px 25px;text-align:center;">+${income}</td>

                </tr>
        `
        incomeresult=document.getElementById('incomeresult')

        incomeresult.innerHTML+=htmldata
        alert("Your amount has been added successfully");
        
    } 
}


function addExpense(){
    const exp=parseFloat(document.getElementById('exp').value);
    const email= document.getElementById('e-email').value;
    if (email === '' || income=='' || income <= 0) {
        alert("Please fill in a valid email and amount");
        return;
    }
    let expData = localStorage.getItem(email);
    const totalexp = document.getElementById('totalexp');
    const balance = document.getElementById('balance');


    if (expData) {
        let parseExp = JSON.parse(expData);
        
        parseExp.expense +=exp;
        parseExp.balance =parseExp.income-parseExp.expense;
        username=parseExp.uname;
        
        totalexp.innerHTML = parseExp.expense;
        balance.innerHTML = parseExp.balance;


        localStorage.setItem(email, JSON.stringify(parseExp));


        htmldata=``
        htmldata=`
        <tr>
                    <td class="border border-3 border-light" style="padding:10px 25px;text-align:center;text-transform: capitalize;">${username}</td>
                    <td class="border border-3 border-light" style="padding:10px 25px;text-align:center;">-${exp}</td>

                </tr>
        `

        expresult=document.getElementById('expresult')
        expresult.innerHTML+=htmldata
        alert("Your amount has been added successfully");

        
    } 
}

// $(document).ready(function() {
//     let piechart;
  
//     $("#addincome").$("#addexp").on("click", function() {
     
//         const email = document.getElementById('iemail').value;
//         let data = localStorage.getItem(email);
//         let parsedata = JSON.parse(data);
//         income=parsedata.income
//         expense=parsedata.expense
    
    
      
  
//       // reset previous chart if it exists
//       if (piechart) {
//         piechart.destroy();
//       }
  
//       // Chart.js code for pie chart
//       var ctx = document.getElementById("chartdiv").getContext("2d");
//       piechart = new Chart(ctx, {
//         type: "pie",
//         data: {
//             labels: ["Income", "Expense"],
//             datasets: [
//               {
//                 label: "Income and Expense",
//                 data: [income, expense],
//                 backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
//                 borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//                 borderWidth: 1
  
//             }
//           ]
//         },
//         options: {}
//       });
//     });
//   });


  




