const input=document.querySelector('#write');
const list=document.querySelector('#list');
input.addEventListener("keyup",function(e){
    if(e.key=="Enter"){
        addingtodo(this.value);
        this.value='';
    }
})
function addingtodo(val){
    let listitem=document.createElement("li");
    listitem.innerHTML=`${val}`;
    list.appendChild(listitem);
    listitem.addEventListener("click",function(){
        this.classList.toggle('done');
    })
}