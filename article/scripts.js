// 定义笔记板块数据
const notesData = [
    { title: "ZYNQ折腾记录", url: "/article_html/zynq.html", image: "" },
    { title: "petalinux摸索", url: "/article/petalinux/index.html", image: "" },
    { title: "ARM-Linux驱动开发", url: "/article/arm_linux/index.html", image: "" },
    { title: "日常技能库", url: "/article/personal_skill/index.html", image: "" }
];

// 获取网页中的第一个图片作为封面
async function fetchImage(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const firstImg = doc.querySelector("img");
        return firstImg ? firstImg.src : "https://via.placeholder.com/150"; // 无图时显示占位图
    } catch (error) {
        console.error(`Error fetching image from ${url}:`, error);
        return "https://via.placeholder.com/150";
    }
}

// 动态生成笔记板块
async function generateNotes() {
    const container = document.getElementById("notes");
    for (const note of notesData) {
        // 获取图片地址
        note.image = await fetchImage(note.url);

        // 创建 HTML 结构
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.innerHTML = `
            <a href="${note.url}" target="_blank">
                <img src="${note.image}" alt="${note.title}">
                <div class="note-title">${note.title}</div>
            </a>
        `;
        container.appendChild(noteElement);
    }
}

// 加载笔记板块
generateNotes();
