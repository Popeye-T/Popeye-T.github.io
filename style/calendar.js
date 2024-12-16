function generateCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();  // 获取当前月份（0-11）
    const currentDay = now.getDate(); // 获取当前日期
    const firstDay = new Date(year, month, 1); // 获取当前月的第一天
    const lastDay = new Date(year, month + 1, 0); // 获取当前月的最后一天

    // 获取该月的总天数
    const totalDays = lastDay.getDate();

    // 获取第一天是星期几
    const startDay = firstDay.getDay();

    let calendarHtml = `<h2>${year}年${month + 1}月${currentDay}日</h2>`;
    calendarHtml += '<table><tr>';
    calendarHtml += '<th>周日</th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th>周六</th>';
    calendarHtml += '</tr><tr>';

    // 在第一行添加空白（如果月初不是从周日开始）
    for (let i = 0; i < startDay; i++) {
        calendarHtml += '<td></td>';
    }

    // 填充该月的日期
    for (let day = 1; day <= totalDays; day++) {
        if ((startDay + day - 1) % 7 === 0 && day !== 1) {
            calendarHtml += '</tr><tr>';
        }

        // 检查是否是当前日期，并添加特殊样式
        const isToday = day === currentDay;
        const dayClass = isToday ? 'today' : '';
        calendarHtml += `<td class="${dayClass}">${day}</td>`;
    }

    calendarHtml += '</tr></table>';
    document.getElementById('calendar').innerHTML = calendarHtml;
}

// 页面加载时生成日历
window.onload = generateCalendar;
