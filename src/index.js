class CountdownTimer {
  constructor(selector, targetDate, onTick) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.onTick = onTick;
  }
  start() {
    if(this.isActive) {
      return;
    }
   const startTime = Date.now();
   this.isActive = true;

   this.intervalId = setInterval(() => {
     const currentTime = Date.now();
     const deltaTime = currentTime - startTime;
     const {days, hours, mins, secs} = this.getTimeComponents(deltaTime);
     this.onTick(`${days}:${hours}:${mins}:${secs}`);
      //console.log(`${days}:${hours}:${mins}:${secs}:`);
   }, 1000);
  };
   pad(value) {
    return String(value).padStart(2,'0');
  };
  
   getTimeComponents(time) {
  
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
      return {days, hours, mins, secs};
    }
}


  const countdownTimer = new CountdownTimer({
      onTick: updateClockFace
  });
  
  console.log(countdownTimer);

 function updateClockFace ({days, hours, mins, secs}) {
    /* refs.clockFace.textContents */  return `${days}:${hours}:${mins}:${secs}:`;
 }
 