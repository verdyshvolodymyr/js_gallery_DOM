var e=document.querySelector(".gallery");document.querySelector(".gallery__list").addEventListener("click",function(t){if(event.preventDefault(),"thumb"===t.target.alt){var r=t.target.closest("a");e.children[0].children[0].attributes.src.value=r.href;return}e.children[0].children[0].attributes.src.value=t.target.href});
//# sourceMappingURL=index.59c35a24.js.map
