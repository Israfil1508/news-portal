const API="http://localhost:3000";
const id2=new URLSearchParams(location.search).get("id");
async function load(){const r=await fetch(API+"/news/"+id2);const n=await r.json();
title.value=n.title;body.value=n.body;}
editForm.onsubmit=async e=>{e.preventDefault();
await fetch(API+"/news/"+id2,{method:"PATCH",headers:{"Content-Type":"application/json"},
body:JSON.stringify({title:title.value,body:body.value})});
location.href="news-list.html";};
load();