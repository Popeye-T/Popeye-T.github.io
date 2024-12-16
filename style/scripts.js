// 鼠标烟花效果
document.addEventListener('mousemove', (event) => {
    const sparkCount = 10; // 每次生成粒子数量
    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';

        // 设置粒子初始位置为鼠标中心
        spark.style.left = `${event.pageX}px`;
        spark.style.top = `${event.pageY}px`;

        // 随机粒子颜色
        const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        spark.style.backgroundColor = randomColor;

        // 设置随机粒子运动方向
        spark.style.setProperty('--dx', Math.random() * 2 - 1); // -1 到 1 的水平位移
        spark.style.setProperty('--dy', Math.random() * 2 - 1); // -1 到 1 的垂直位移

        // 添加到页面
        document.body.appendChild(spark);

        // 动画结束后移除
        setTimeout(() => {
            spark.remove();
        }, 1000); // 1秒后清除
    }
});

