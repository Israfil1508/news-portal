const API="http://localhost:3000";
function getUser(){return JSON.parse(localStorage.getItem("loggedUser"));}
async function loadNews(){
const r=await fetch(API+"/news");const news=await r.json();
const u=getUser();document.getElementById("userInfo").innerHTML=`Logged in as: ${u.name}`;
document.getElementById("newsList").innerHTML=news.map(n=>`
<div class="news-card">
<h3>${n.title}</h3><p>${n.body.slice(0,100)}...</p>
<a href="news-detail.html?id=${n.id}">View</a>
${u.id==n.author_id?`|<a href="edit-news.html?id=${n.id}">Edit</a>|<a href="#" onclick="delN(${n.id})">Delete</a>`:""}
</div>`).join("");}
async function delN(id){if(!confirm("Delete?"))return;await fetch(API+"/news/"+id,{method:"DELETE"});loadNews();}
loadNews();