for(var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0,l=0;l<t.length;l++)n+=Number(t[l].textContent.split(",").join(""));o.textContent=(n/t.length).toLocaleString("en-US"),e.textContent=n.toLocaleString("en-US");
//# sourceMappingURL=index.1ef4d017.js.map
