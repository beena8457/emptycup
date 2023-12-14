


// assign event listener to all the objects with class shortlist_mark 
console.log("js started")
var elements = document.getElementsByClassName('shortlist_mark');

const toggle = (e)=>{
    //console.log(e.target.classList.contains('disabled'))
    if (e.target.classList.contains('disabled')){
        e.target.classList.toggle("disabled")
        e.target.src = "./icons/vector7.svg"
    }else{
        e.target.src = "./icons/bookmarkheart-1.svg"
        
        e.target.classList.add("disabled")
    }
}

for(var i =0 ;i<elements.length ;i++){
    

    elements[i].addEventListener('click',toggle,false)

}

//show shortlisted 
var shortlist = document.getElementById('shortlist');
var shortListRegion = false
showShortlisted =(e)=>{
    
    if (!shortListRegion){
    shortListRegion = true
    document.querySelectorAll('.rect3').forEach(rect=>{
        const isDisabled = rect.querySelector(".shortlist_mark").classList.contains("disabled")
        
        if (isDisabled){
            rect.style.display ='none'
        }
    })
    }else{
        shortListRegion = false
        document.querySelectorAll('.rect3').forEach(rect=>{
            
                rect.style.display =''
            
        })
    }
    
}

shortlist.addEventListener('click',showShortlisted)

