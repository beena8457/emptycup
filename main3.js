
const restart = ()=>{
    
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
    }

const printStar = (rates)=>{
    console.log(rates)
    let opt = ""
    for(var i =0  ;i < rates.length;i++){
        if (rates[i]==1){
            opt+=" <img src='./icons/star-fill 1.svg' />"
        }else if(rates[i]==0.5){
            opt+=" <img src='./icons/half_star.svg' />"
        }else{
            opt+=" <img src='./icons/star 1.svg' />"
        }
    }

    return opt
}

fetch('https://beena8457.pythonanywhere.com/')
    .then(response=>response.json())
    .then(datas=>{
        const newDiv = document.getElementById('insertion')
        console.log(datas)
        //datas = JSON.parse(datas)
        for (var data in datas){
            
            newDiv.innerHTML += `
        
        
<div class="rect3">
<div class="designs">
    <h2 class="design_title">${datas[data].name}</h2>
    <div class="ratings">
        
        
        ${
            printStar(datas[data].ratings)

        }
    </div>
    <p class="info">${datas[data].description}</p>
    <div class="data">
        <div><span class="number">${datas[data].stats.projects}</span><span class="label">Projects</span></div>
        <div><span class="number">${datas[data].stats.years}</span><span class="label">Years</span></div>
        <div><span class="number">${datas[data].stats.price}</span><span class="label">Price</span></div>
    </div>
    <div class="phone-numbers">
        <div>${datas[data].phoneNumbers[0]}</div>
        <div>${datas[data].phoneNumbers[1]}</div>
    </div>
</div>
<div class="side_icons">
    <div class="colmn">
        <img alt="" src="./icons/arrowrightshort-1.svg" />
        <span>Details</span>
    </div>
    <div class="colmn">
        <img alt="" src="./icons/eyeslash-1.svg" />
        <span>Hide</span>
    </div>
    <div class="colmn">
        <img class="shortlist_mark disabled" alt="" src="./icons/bookmarkheart-1.svg" />
        <span>Shortlist</span>
    </div>
    <div class="colmn">
        <img alt="" src="./icons/exclamationcircle-1.svg" />
        <span>Report</span>
    </div>
</div>
</div>

        
        
        
        `
        

        
    }})

    .then(restart)

