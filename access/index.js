let $ = document.querySelector.bind(document); 
let $$ = document.querySelectorAll.bind(document);
let CountPlay = 0; 
let OverRule = $('.overdisplay');
let number = 0; 
let numBox = $$(".boxNum");
let Music = $('.music');
let moneyWrapper = $(".money"); 
let playBtn = $('.playBtn');
let count = 0; 
let money = 0; 
let Numarr = []; 

const app = {
    
// display money
    disPlay: function(){
  moneyWrapper.innerHTML = `Số tiền trong tài khoản của bạn là: ${money}$`;
    },

// Tạo số
    generateRandomNumber : function (){
        let RandomValue = Math.random(); 

        if (CountPlay == 30){
            RandomValue = 0.8; 
            if (RandomValue == 0.8){
                return 7; 
            }
            CountPlay = 0; 
        }

        if (RandomValue <= 1 ){
            return 7; 
        }
        else {
            return Math.floor(Math.random() * 10); 
        }


      
        
    }, 


    updateNumber : function() {
       
    },


    handle: function(){ 
playBtn.onclick = function(){
    numBox[0].innerHTML = ""; 
    numBox[1].innerHTML = ""; 
    numBox[2].innerHTML = ""; 
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
        Music.play();
        CountPlay++; 

        if (number == 777){
            money = money + 100000;
            app.disPlay();

        }

      
            
     },1000)
            
     },1000)
        
    },1000)

   



}
    },


    start:function(){
        this.disPlay(); 
        this.handle();
      
    window.onload = function(){
        setTimeout(()=> {
            OverRule.style.display = 'flex'; 

            setTimeout (()=> {
                OverRule.style.display = 'none';
              }, 7000)
          }, 1000);

         
    
    }
      
        
        
    }

}

app.start();








