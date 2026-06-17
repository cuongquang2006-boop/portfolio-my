const form =
document.querySelector(".login-form");

if(form){

    form.addEventListener(

        "submit",

        (e)=>{

            e.preventDefault();

            document.body

            .classList

            .add("fade-out");


            setTimeout(()=>{

                window.location.href =

                "index.html";

            },400);

        }

    );

}