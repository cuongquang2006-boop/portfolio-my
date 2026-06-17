const themeBtn =
document.querySelector(".theme-btn");

const icon =
themeBtn.querySelector("i");


themeBtn.addEventListener(
"click", ()=>{

    document.body.classList.toggle("light-theme");


    icon.classList.add("rotate");


    setTimeout(()=>{

        icon.classList.remove("rotate");

    },500);

});