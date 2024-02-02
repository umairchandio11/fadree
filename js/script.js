//for navbar
now=document.querySelector('.now')
now.innerHTML="<a href='#' class='nows'>"+now.innerHTML+"</a>"

//for  packages
let  with_her=document.getElementsByClassName("with-here")

for (const key in with_her) {
    if (Object.hasOwnProperty.call(with_her, key)) {
        const element = with_her[key];
        console.log(element.innerHTML);
        element.innerHTML='<div class="desc2 flex justify-center "><div><li class="flex">Bottles: </li><li class="flex">AD - type: </li><li class="flex">Time:</li><li class="flex">Support:</li><li class="flex">Satisfactory: </li></div></div>'
        
        
    }
}
