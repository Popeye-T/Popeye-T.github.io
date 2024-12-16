// 加载指定的 Markdown 文件并显示内容
async function loadMarkdown(fileName) {
    try {
        // Fetch the content of the markdown file
        const response = await fetch('/article_html/' + fileName);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        // Get the markdown text
        const markdownText = await response.text();

        // Convert markdown to HTML using marked.js
        const htmlContent = marked.parse(markdownText);

        // Render the HTML content into the output div
        document.getElementById('output').innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading Markdown:', error);
        document.getElementById('output').innerHTML = '<p style="color:red;">Failed to load Markdown file.</p>';
    }
}
