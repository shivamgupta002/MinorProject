const search =()=>{
    let searchbox=document.getElementById("search-item").value.toUpperCase();
    let product=document.querySelectorAll(".product")
    let pname=document.getElementsByTagName("h2")

    for(let i=0;i<pname.length;i++){
        let match=product[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue=match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";
            }
        }
    }
}