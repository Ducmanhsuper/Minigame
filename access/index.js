let $ = document.querySelector.bind(document); 
let $$ = document.querySelectorAll.bind(document);
let number = 0; 
let numBox = $$(".boxNum");
let Mudic = $('.music');
let moneyWrapper = $(".money"); 
let playBtn = $('.playBtn');
let count = 0; 
let money = 100000; 
let Numarr = []; 

const app = {
    
// display money
    disPlay: function(){
  moneyWrapper.innerHTML = `Số tiền trong tài khoản của bạn là: ${money}$`;
    },

// Tạo số
    generateRandomNumber : function (){
        let RandomValue = Math.random(); 
        if (RandomValue <= 0.000001 ){
            return 7; 
        }
        else if (RandomValue > 0.1 && RandomValue <= 0.7 ){
            return 4; 
        }
        else {
            return Math.floor(Math.random() * 10); 
        }
        
    }, 


    updateNumber : function() {
       
    },


    handle: function(){ 
playBtn.onclick = function(){
setTimeout (()=> {
   setInterval( app.updateNumber(), 1000);
   let num1 = app.generateRandomNumber();
   number = num1;   
    numBox[0].innerText = num1; 
    
    setTimeout (()=> {
        let num2 = app.generateRandomNumber(); 
        number = number * 10 + num2; 
        numBox[1].innerText = num2; 
     setTimeout (()=> {
        let num3 = app.generateRandomNumber(); 
        number = number * 10 + num3; 
        

        numBox[2].innerText = num3; 

        if (number == 777){
            money = money + 20000;
            
        }
            
     },1000)
            
     },1000)
        
    },1000)

   



}
    },


    start:function(){
        this.disPlay(); 
        this.handle();
        
        
        
    }

}

app.start();








