const btn=document.querySelector('.btn');
const backgrnd=document.querySelector('.container');
const Options=['red', 'green', 'blue', 'yellow', 'black','magenta', 'purple'];
let counter=0;
btn.addEventListener('click', ()=>{
    
    if (counter <= Options.length){
        
        backgrnd.style.backgroundColor=Options[counter];
        counter++;
    }
    else{
        counter=0;
        backgrnd.style.backgroundColor=Options[0];
    }
    
    
});