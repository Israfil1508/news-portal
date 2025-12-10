const API="http://localhost:3000";
const id=new URLSearchParams(location.search).get("id");
async function load(){const r=await fetch(API+"/news/"+id);const n=await r.json();
document.getElementById("news").innerHTML=`<h2>${n.title}</h2><p>${n.body}</p>
<h3>Comments</h3>${n.comments.map(c=>`<p>• ${c.text}</p>`).join("")}`;}
document.getElementById("addComment").onclick=async()=>{
const t=document.getElementById("commentText").value;
const r=await fetch(API+"/news/"+id);const n=await r.json();
n.comments.push({id:Date.now(),user_id:1,text:t});
await fetch(API+"/news/"+id,{method:"PATCH",headers:{"Content-Type":"application/json"},
body:JSON.stringify({comments:n.comments})});load();};
load();