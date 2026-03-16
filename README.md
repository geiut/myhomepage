# 高彬个人网站

这是一个使用 [Quarto](https://quarto.org/) 构建的个人学术网站，展示了资源利用与植物保护专业研究生的学术成果、研究方向和个人技能。

## 🌟 网站特色

- **学术展示**：全面展示研究方向、学术成果和专业技能
- **响应式设计**：支持桌面、平板和手机等多种设备
- **现代化界面**：采用绿色主题，体现农业科学特色
- **交互功能**：包含联系表单、动画效果和实用工具
- **技术学习**：包含 Quarto 技术学习指南

## 📁 项目结构

```
myhomepage/
├── _quarto.yml          # Quarto 项目配置文件
├── index.qmd           # 网站首页
├── about.qmd           # 关于我页面
├── research.qmd        # 研究方向页面
├── publications.qmd    # 学术成果页面
├── skills.qmd          # 技能专长页面
├── contact.qmd         # 联系方式页面
├── quarto-guide.qmd    # Quarto 技术指南
├── styles.css          # 自定义 CSS 样式
├── script.js           # JavaScript 交互脚本
├── README.md           # 项目说明文档
└── images/             # 图片资源目录（可选）
```

## 🛠️ 技术栈

- **Quarto** - 文档生成和网站构建系统
- **Bootstrap 5** - 前端框架
- **CSS3** - 样式定制
- **JavaScript** - 交互功能
- **Markdown** - 内容编写

## 🚀 快速开始

### 1. 安装 Quarto

首先需要安装 Quarto：

```bash
# 访问 https://quarto.org/docs/get-started/ 获取安装指南
# 或使用包管理器安装
# macOS:
brew install quarto

# Windows:
choco install quarto
```

### 2. 克隆项目

```bash
git clone <repository-url>
cd myhomepage
```

### 3. 预览网站

```bash
# 在浏览器中预览网站
quarto preview

# 渲染网站（生成静态文件）
quarto render
```

### 4. 构建和部署

```bash
# 构建网站
quarto render

# 网站文件将生成在 _site/ 目录中
```

## 📝 内容管理

### 更新个人信息

编辑 `index.qmd` 文件中的个人信息部分：

```markdown
---
title: "高彬 - 个人网站"
subtitle: "华中农业大学资源利用与植物保护专业研究生"
author: "高彬"
date: "`r Sys.Date()`"
---
```

### 添加新的研究项目

在 `research.qmd` 中添加新的研究项目：

```markdown
### 新的研究项目名称

**项目简介：**
项目描述内容...

**研究方法：**
- 方法1
- 方法2
- 方法3
```

### 更新学术成果

在 `publications.qmd` 中更新论文和项目信息：

```markdown
#### 新论文标题
**期刊：** 期刊名称  
**时间：** 发表时间  
**作者：** 作者列表  
**摘要：** 论文摘要内容...
```

### 修改技能信息

在 `skills.qmd` 中更新技能和证书信息：

```markdown
### 新技能类别

```{=html}
<div class="progress mb-3">
  <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
</div>
```

**掌握程度：** 描述掌握程度
```

## 🎨 样式定制

### 主题颜色

在 `styles.css` 中修改 CSS 变量来改变主题颜色：

```css
:root {
  --primary-color: #006400; /* 主色调 - 深绿色 */
  --secondary-color: #228B22; /* 次要色 - 森林绿 */
  --accent-color: #FFD700; /* 强调色 - 金色 */
}
```

### 布局调整

修改 Bootstrap 网格系统类来调整布局：

```html
<!-- 三列布局 -->
<div class="row">
  <div class="col-md-4">内容1</div>
  <div class="col-md-4">内容2</div>
  <div class="col-md-4">内容3</div>
</div>

<!-- 两列布局 -->
<div class="row">
  <div class="col-md-6">内容1</div>
  <div class="col-md-6">内容2</div>
</div>
```

### 响应式设计

使用 Bootstrap 的响应式类：

```html
<!-- 在不同屏幕尺寸下的显示效果 -->
<div class="col-md-6 col-lg-4">响应式列</div>
```

## 🔧 功能开发

### 添加新页面

1. 创建新的 `.qmd` 文件：

```bash
touch new-page.qmd
```

2. 添加页面内容：

```markdown
---
title: "新页面标题"
format: 
  html:
    toc: true
---

## 页面内容

这里是页面的主要内容...
```

3. 在 `_quarto.yml` 中添加导航链接：

```yaml
navbar:
  left:
    - href: new-page.qmd
      text: 新页面
```

### JavaScript 功能

在 `script.js` 中添加新的交互功能：

```javascript
// 新功能
function newFeature() {
  // 功能实现
}

// 事件监听
document.addEventListener('DOMContentLoaded', function() {
  // 页面加载完成后的操作
});
```

### 表单处理

联系表单已经包含基本验证，可以扩展功能：

```javascript
// 扩展表单验证
function validateForm() {
  // 验证逻辑
  return true/false;
}

// 添加新的表单字段
const newField = document.getElementById('new-field');
```

## ☁️ 部署选项

### GitHub Pages

1. 推送代码到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支的根目录

### Netlify

1. 构建网站：`quarto render`
2. 将 `_site` 文件夹上传到 Netlify
3. 或使用 Netlify CLI：

```bash
npm install -g netlify-cli
netlify deploy
```

### 自定义域名

在 `_quarto.yml` 中配置：

```yaml
website:
  domain: your-domain.com
```

## 📊 性能优化

### 图片优化

- 使用 WebP 格式
- 添加 `loading="lazy"` 属性
- 设置合适的图片尺寸

```html
<img src="image.webp" alt="描述" loading="lazy" width="300" height="200">
```

### CSS 优化

- 使用 CSS 变量
- 避免内联样式
- 合理使用选择器

### JavaScript 优化

- 使用事件委托
- 实现防抖和节流
- 延迟加载非关键脚本

## 🐛 故障排除

### 常见问题

1. **样式不生效**
   - 检查 CSS 选择器优先级
   - 确认文件路径正确
   - 清除浏览器缓存

2. **JavaScript 不工作**
   - 检查控制台错误
   - 确认 DOM 元素存在
   - 使用 `DOMContentLoaded` 事件

3. **图片显示异常**
   - 检查图片路径
   - 确认图片格式支持
   - 检查文件权限

### 调试技巧

```bash
# 查看 Quarto 版本
quarto --version

# 检查配置文件
quarto check

# 渲染时显示详细信息
quarto render --verbose
```

## 📚 学习资源

- [Quarto 官方文档](https://quarto.org/docs/)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [Bootstrap 文档](https://getbootstrap.com/docs/)
- [CSS 教程](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目。

### 提交 Issue

- 描述清楚问题
- 提供复现步骤
- 包含环境信息

### 提交 Pull Request

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 创建 PR

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

感谢 Quarto 团队提供的优秀工具，以及 Bootstrap 社区的贡献。

---

**构建日期：** 2026年3月  
**版本：** 1.0.0  
**作者：** 高彬