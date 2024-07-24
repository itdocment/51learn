function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 这里可以添加登录验证逻辑，例如与后端进行交互或进行简单的本地验证
  if (username === 'admin' && password === '123456') {
    alert('登录成功！');
  } else {
    alert('用户名或密码错误！');
  }
}