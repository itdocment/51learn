function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const verificationCode = document.getElementById('verificationCode').value;

  // 这里可以添加登录验证逻辑，包括验证码的验证
  if (username === 'admin' && password === '123456' && verificationCode === '1234') {
    alert('登录成功！');
  } else {
    alert('用户名或密码或验证码错误！');
  }
}

function register() {
  const registerUsername = document.getElementById('registerUsername').value;
  const registerPassword = document.getElementById('registerPassword').value;

  // 这里可以添加注册逻辑，例如将用户信息发送到后端或进行本地存储
  alert(`注册成功！用户名：${registerUsername}，密码：${registerPassword}`);
}

function toggleForm() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  }
}

function refreshVerificationCode() {
  const verificationCodeImg = document.getElementById('verificationCodeImg');
  verificationCodeImg.src = 'generateVerificationCode.php?random=' + Math.random();
}