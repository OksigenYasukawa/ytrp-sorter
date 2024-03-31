function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
    document.getElementById("body").classList.toggle("dark");
    document.getElementById("isi").classList.toggle("dark");
    document.getElementById("wlcm").classList.toggle("dark");
    document.getElementById("info").classList.toggle("dark");
    document.getElementById("menu").classList.toggle("dark");
    document.getElementById("footer").classList.toggle("dark");
    var elements = document.querySelectorAll("#button");

        elements.forEach(function(element) {
            element.classList.toggle("dark");
        });
    document.getElementById("options").classList.toggle("dark");
    document.getElementById("progresstext").classList.toggle("dark");
    document.getElementById("result").classList.toggle("dark");
}