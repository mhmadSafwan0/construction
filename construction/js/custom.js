const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function(){

     window.scrollTo({
         top:0,
         left:0,
         behavior:"smooth"
     });
});

const introduction = document.querySelector("#introduction");
introduction.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"   
    });
});

const aboutUs = document.querySelector("#aboutUs");
aboutUs.addEventListener("click", function(){

    window.scrollTo({
        top:600,
        left:0,
        behavior:"smooth"
    });
});

const recentProjects = document.querySelector("#recentProjects");
recentProjects.addEventListener("click", function(){

    window.scrollTo({
        top:1250,
        left:0,
        behavior:"smooth"
    });
});

const reviews = document.querySelector("#reviews");
reviews.addEventListener("click", function(){

    window.scrollTo({
        top:2150,
        left:0,
        behavior:"smooth"
    });
});

 function nickNameFunc(){

 if(document.getElementById('NickName').checked){

     document.getElementById('nick').style.display="inline";
     document.getElementById('nName').setAttribute('required',true);
 }
 else{

     document.getElementById('nName').removeAttribute('required');
     document.getElementById('nick').style.display="none";
 
     }
 }

 
$(document).on('click', 'nav li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
