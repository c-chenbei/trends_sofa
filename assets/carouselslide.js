    //倒计时
const element = document.getElementById("hander_countdowns");
const targetDateStr = element.getAttribute("data-count-time");
  const targetDateParts = targetDateStr.split("/");
  const year = parseInt(targetDateParts[0]);
  const month = parseInt(targetDateParts[1]) - 1; // 月份从 0 开始
  const day = parseInt(targetDateParts[2]);
  const hours = parseInt(targetDateParts[3]);
  const minutes = parseInt(targetDateParts[4]);
  const targetDate = new Date(year, month, day, hours, minutes).getTime();
  
  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    if (timeRemaining <= 0) {
        window.clearTimeout(timers);
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        document.getElementById("countdowns_days").textContent = formatTimeValue(days);
        document.getElementById("countdowns_hours").textContent = formatTimeValue(hours);
        document.getElementById("countdowns_minutes").textContent = formatTimeValue(minutes);
        document.getElementById("countdowns_seconds").textContent = formatTimeValue(seconds);
    }
  }
  
  function formatTimeValue(value) {
    return value < 10 ? "0" + value : value;
  }
  
  // 更新倒计时每秒钟
  const timers = setInterval(updateCountdown, 1000);
  
  // 初始化倒计时
  updateCountdown();

    // // 设置目标日期和时间
    // const targetDates = new Date();
    // targetDate.setDate(targetDate.getDate() + 0); // 天数
    // targetDate.setHours(targetDate.getHours() + 4); // 小时数
    // targetDate.setMinutes(targetDate.getMinutes() + 8); // 分钟数
    // targetDate.setSeconds(targetDate.getSeconds() + 19); // 秒数

    // // 更新倒计时
    // function updateCountdown() {
    //     const currentDate = new Date();
    //     const timeDifference = targetDate - currentDate;

    //     if (timeDifference <= 0) {
    //         document.getElementById('countdowns').innerHTML = '倒计时结束';
    //     } else {
    //         const days = String(Math.floor(timeDifference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    //         const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    //         const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    //         const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');

    //         const countdownString = `<span style="font-weight: 600;">${days}</span> days
    //         <span style="font-weight: 600;">${hours}</span> hrs
    //         <span style="font-weight: 600;">${minutes}</span> min
    //         <span style="font-weight: 600;">${seconds}</span>sec`;
    //         document.getElementById('countdowns').innerHTML = countdownString;
    //     }
    // }

    // // 每秒更新倒计时
    // setInterval(updateCountdown, 1000);

    // // 页面加载时初始化倒计时
    // updateCountdown();