// Quarto Website JavaScript for 高彬个人网站

// 文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化页面
  initPage();
  
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll);
  
  // 添加返回顶部按钮功能
  setupBackToTop();
  
  // 添加加载动画
  setupLoadingAnimation();
  
  // 添加表单验证
  setupContactForm();
});

// 页面初始化
function initPage() {
  // 添加淡入动画
  const elements = document.querySelectorAll('.card, .hero, .callout-note');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 100);
  });
  
  // 添加时间线动画
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    setTimeout(() => {
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, index * 200);
  });
}

// 滚动处理
function handleScroll() {
  const scrollPosition = window.scrollY;
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.getElementById('backToTop');
  
  // 导航栏效果
  if (scrollPosition > 50) {
    navbar.style.background = 'rgba(0, 100, 0, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = 'linear-gradient(135deg, #006400, #228B22)';
    navbar.style.backdropFilter = 'none';
  }
  
  // 返回顶部按钮显示/隐藏
  if (scrollPosition > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

// 返回顶部功能
function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// 加载动画
function setupLoadingAnimation() {
  // 为按钮添加加载状态
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (this.classList.contains('btn-primary') || this.classList.contains('btn-success')) {
        e.preventDefault();
        const originalText = this.innerHTML;
        this.innerHTML = '<span class="loading"></span> 处理中...';
        this.disabled = true;
        
        setTimeout(() => {
          this.innerHTML = originalText;
          this.disabled = false;
        }, 2000);
      }
    });
  });
}

// 联系表单验证
function setupContactForm() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      const agreeCheck = document.getElementById('agreeCheck').checked;
      
      // 验证表单
      if (!name || !email || !subject || !message) {
        showAlert('请填写所有必填字段', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showAlert('请输入有效的邮箱地址', 'error');
        return;
      }
      
      if (!agreeCheck) {
        showAlert('请同意隐私政策', 'error');
        return;
      }
      
      // 模拟提交
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="loading"></span> 发送中...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        showAlert('消息发送成功！我们会尽快回复您。', 'success');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
}

// 显示提示消息
function showAlert(message, type = 'info') {
  // 创建提示元素
  const alert = document.createElement('div');
  alert.className = `alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show`;
  alert.style.position = 'fixed';
  alert.style.top = '20px';
  alert.style.right = '20px';
  alert.style.zIndex = '9999';
  alert.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  document.body.appendChild(alert);
  
  // 自动消失
  setTimeout(() => {
    if (alert.parentNode) {
      alert.remove();
    }
  }, 5000);
}

// 邮箱验证
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// 工具函数：格式化日期
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('zh-CN', options);
}

// 工具函数：计算年龄
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// 添加页面统计（可选）
function addPageStats() {
  const stats = {
    pageViews: localStorage.getItem('pageViews') || 0,
    lastVisit: localStorage.getItem('lastVisit') || '首次访问'
  };
  
  stats.pageViews++;
  stats.lastVisit = new Date().toLocaleString('zh-CN');
  
  localStorage.setItem('pageViews', stats.pageViews);
  localStorage.setItem('lastVisit', stats.lastVisit);
  
  // 可以在页面底部显示统计信息
  const footer = document.querySelector('footer');
  if (footer) {
    const statsDiv = document.createElement('div');
    statsDiv.className = 'container';
    statsDiv.innerHTML = `
      <hr style="border-color: rgba(255,255,255,0.2);">
      <div class="row text-center text-white-50">
        <div class="col-md-6">
          <small>访问次数: ${stats.pageViews}</small>
        </div>
        <div class="col-md-6">
          <small>最后访问: ${stats.lastVisit}</small>
        </div>
      </div>
    `;
    footer.appendChild(statsDiv);
  }
}

// 性能监控
function monitorPerformance() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('页面加载性能:', {
          dns: perfData.domainLookupEnd - perfData.domainLookupStart,
          tcp: perfData.connectEnd - perfData.connectStart,
          ttfb: perfData.responseStart - perfData.requestStart,
          download: perfData.responseEnd - perfData.responseStart,
          domParse: perfData.domContentLoadedEventStart - perfData.responseEnd,
          total: perfData.loadEventEnd - perfData.navigationStart
        });
      }, 0);
    });
  }
}

// 导出函数供其他脚本使用
window.GaoBinWebsite = {
  showAlert,
  formatDate,
  calculateAge,
  addPageStats,
  monitorPerformance
};