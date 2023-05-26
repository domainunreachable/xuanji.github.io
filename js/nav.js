// JavaScript Document
// 获取悬浮球和导航栏
var floatBall = document.getElementById('float-ball');
floatBall.addEventListener('mousedown', function(e) {
  var startX = e.clientX;
  var startY = e.clientY;
  var ballX = floatBall.offsetLeft;
  var ballY = floatBall.offsetTop;

  document.addEventListener('mousemove', moveBall);
  document.addEventListener('mouseup', releaseBall);

  function moveBall(e) {
    var newX = ballX + e.clientX - startX;
    var newY = ballY + e.clientY - startY;
    floatBall.style.left = newX + 'px';
    floatBall.style.top = newY + 'px';
    updateNavBarPosition();
  }

  function releaseBall() {
    document.removeEventListener('mousemove', moveBall);
    document.removeEventListener('mouseup', releaseBall);
  }
});

// 悬浮球点击显示导航栏
floatBall.addEventListener('click', function() {
  var navBar = document.getElementById('nav-bar');
  if (navBar.style.display === 'none') {
    navBar.style.display = 'block';
    updateNavBarPosition();
  } else {
    navBar.style.display = 'none';
  }
});

// 更新导航栏位置
function updateNavBarPosition() {
  var navBar = document.getElementById('nav-bar');
  var ballRect = floatBall.getBoundingClientRect();
  var navBarRect = navBar.getBoundingClientRect();
  var newX = ballRect.right + 10; // 导航栏相对悬浮球的水平偏移量
  var newY = ballRect.top; // 导航栏相对悬浮球的垂直偏移量
  navBar.style.left = newX + 'px';
  navBar.style.top = newY + 'px';
}