function updateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // 月份从0开始，所以需要加1
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 格式化时间
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var timeString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("current-time").innerText = timeString;
}

// 每秒更新一次时间
setInterval(updateTime, 1000);
