let clock = {
  
  hour:document.querySelector('.box__hour'),
  minute:document.querySelector('.box__minute'),
  second:document.querySelector('.box__second'),
  format:['am','pm'],
  timeFormat:document.querySelector('.time-format'),
  
  startClock:function(){
    
    let date = new Date();
    let setSeconds = date.getSeconds();
    let setMinutes = date.getMinutes();
    let setHours = date.getHours();

    setInterval(()=>{
      
      this.second.innerText = setSeconds;
      this.minute.innerText = setMinutes;
      this.hour.innerText = setHours;
      
      setSeconds++;
      
      if(setSeconds >= 60){
        
        setSeconds = 0;
        setMinutes++;
        
      }
      if(setMinutes >= 60){
        
        setMinutes = 0;
        setHours++;
        
      }
      if(setHours >= 24){
        
        setHours = 0;
        
      }
      
    },1000);
    
  },
  
};
clock.startClock();
// To-do
// Need to create AM/PM format, add button for generate random country with time and button that changes between 24 hours to AM/PM
