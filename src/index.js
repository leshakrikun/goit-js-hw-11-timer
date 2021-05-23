class CountdownTimer {
  constructor({selector, targetDate, onTick}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.intervalId = null;
  }
  start() {
   this.intervalId = setInterval(() => {
     const currentTime = Date.now();
     const deltaTime = this.targetDate - currentTime;
     const time = this.getTimeComponents(deltaTime);
     this.onTick(time);
   }, 1000);
  };
   pad(value) {
    return String(value).padStart(2,'0');
  };
  
   getTimeComponents(time) {
  
    let days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    let hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    let secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    if (secs<0) {
      clearInterval(this.intervalId);
      days = '00'
      hours = '00'
      mins = '00'
      secs = '00'
   }
      return {days, hours, mins, secs};
    }
}

window.addEventListener("load", () => {
  countdownTimer.start();
});

  const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('2021-05-30T01:13'),
    onTick: updateClockFace,
  });

const refs = {
  daysEl: document.querySelector( '#timer-1 [data-value="days"]'),
  hoursEl: document.querySelector('#timer-1 [data-value="hours"]'),
  minsEl: document.querySelector('#timer-1 [data-value="mins"]'),
  secsEl: document.querySelector('#timer-1 [data-value="secs"]'),
}

 function updateClockFace ({days, hours, mins, secs}) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minsEl.textContent = `${mins}`;
  refs.secsEl.textContent = `${secs}`;
 }





