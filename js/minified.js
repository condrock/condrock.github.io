<script>document.getElementById('loginForm').addEventListener('submit',function(event){event.preventDefault();var username=document.getElementById('username').value;var password=document.getElementById('password').value;if(username==='membercondrock'&&password==='condrock007'){localStorage.setItem('loggedIn',true);window.location.href='bonus.html'}else{alert('Username atau password salah. Silakan coba lagi.')}});</script>
