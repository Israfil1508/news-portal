const API="http://localhost:3000";
async function loadUsers(){const r=await fetch(API+"/users");const u=await r.json();
document.getElementById("userSelect").innerHTML=u.map(x=>`<option value="${x.id}">${x.name}</option>`).join("");}
document.getElementById("loginBtn").onclick=()=>{const s=document.getElementById("userSelect");
localStorage.setItem("loggedUser",JSON.stringify({id:s.value,name:s.selectedOptions[0].text}));
location.href="news-list.html";};
loadUsers();