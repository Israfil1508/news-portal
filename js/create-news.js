const API="http://localhost:3000";
document.getElementById("createForm").onsubmit=async e=>{
e.preventDefault();
const u=JSON.parse(localStorage.getItem("loggedUser"));
await fetch(API+"/news",{method:"POST",headers:{"Content-Type":"application/json"},
body:JSON.stringify({title:title.value,body:body.value,author_id:Number(u.id),comments:[]})});
location.href="news-list.html";};