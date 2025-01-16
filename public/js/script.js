(()=>{
    "use strict";
    const forms=document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form)=>{
        form.addEventListener(
            "submit",
            (event)=>{
                if(!form.checkvalidity()){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
})();