
document.addEventListener("click",function(e){
    //update
    if(e.target.classList.contains("edit-me"))
    {
       let ip=prompt("Enter your desired new text",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
       console.log(ip)
       if(ip)
       {
        axios.post('/update',{text:ip,id:e.target.getAttribute("data-id")}).then(function(){
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML=ip
       }).catch(function(){
           console.log("try later")
       })
       }

    }
    //delete
    if(e.target.classList.contains("delete-me"))
    {
        if(confirm("Are you sure?"))
        {
            axios.post('/delete',{id:e.target.getAttribute("data-id")}).then(function(){
                e.target.parentElement.parentElement.remove()
           }).catch(function(){
               console.log("try later")
           })
        }
    }
})