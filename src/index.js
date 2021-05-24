class CountdownTimer {
  
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.daysEl= document.querySelector(`${this.selector} [data-value="days"]`);
    this.hoursEl= document.querySelector(`${this.selector}  [data-value="hours"]`);
    this.minsEl= document.querySelector(`${this.selector}  [data-value="mins"]`);
    this.secsEl= document.querySelector(`${this.selector}  [data-value="secs"]`);
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
  onTick ({days, hours, mins, secs}) {
      this.daysEl.textContent = `${days}`;
      this.hoursEl.textContent = `${hours}`;
      this.minsEl.textContent = `${mins}`;
      this.secsEl.textContent = `${secs}`;
     }
}
window.addEventListener("load", () => {
  countdownTimer.start();
});
const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2021-05-30T01:13'),
});




