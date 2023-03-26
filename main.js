const ham = document.getElementById("hamburger")
const navHidden = document.getElementById("navbar")
const microHidden = document.getElementById("DownOFMicrosoft")
const MicrosoftArrow = document.getElementById("allMicrosoft")
ham.addEventListener("click", ()=>{
    if(navHidden.style.display != "block")
     {
        navHidden.style.display = "block"
        ham.innerHTML="<i class='fa-solid fa-xmark'></i>" 
       
     }
     else
    { navHidden.style.display = "none"
      ham.innerHTML="<i class='fa-solid fa-bars'></i>" 
    }
    // abc.classList.remove("hidden")
    // abc.classList.toggle("hidden")
    // abc.innerHTML = "<span class='mx-2 px-5 py-2 w-[250px] absolute bg-gray-200 opacity-80'  ><ul class='space-y-2 mt-5 '><li class='hover:-translate-x-1'><a href=''>Microsoft</a></li><li class='hover:translate-x-1'><a href=''>Office </a></li><li><a href=''>Windows </a></li><li><a href=''>Surface </a></li><li><a href=''>Xbox</a></li><li ><a href=''>Support </a></li></ul></span>"
})
MicrosoftArrow.addEventListener("click", ()=>{
    if(microHidden.style.display != "block")
    microHidden.style.display = "block"
    else
    microHidden.style.display = "none"
   
    // abc.classList.remove("hidden")
    // abc.classList.toggle("hidden")
    // abc.innerHTML = "<span class='mx-2 px-5 py-2 w-[250px] absolute bg-gray-200 opacity-80'  ><ul class='space-y-2 mt-5 '><li class='hover:-translate-x-1'><a href=''>Microsoft</a></li><li class='hover:translate-x-1'><a href=''>Office </a></li><li><a href=''>Windows </a></li><li><a href=''>Surface </a></li><li><a href=''>Xbox</a></li><li ><a href=''>Support </a></li></ul></span>"
})