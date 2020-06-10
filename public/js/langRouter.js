let lang;
let enBTN;
let nlBTN;

getLang();

if(document.title == "router"){
    if(lang != "nl" && lang != "en"){
        setLang("nl");
        location.href = "/nl/home.html";
    } else {
        routeVisitor();
    }
}

function getLang(){
    let cookie = localStorage.getItem("lang");
    lang = cookie;
    console.log(lang);
}

function setLang(lang){
    localStorage.setItem("lang", lang);
}

function routeVisitor(){
    if(lang == "nl"){
        location.href = "/nl/home.html";
    } else if(lang == "en"){
        location.href = "/en/home.html";
    }
}

function getPath(){
    let path = location.pathname.split("/");
    return path[1];
}


if(getPath() == "nl"){
    enBTN = document.getElementById("enBTN");

    enBTN.addEventListener("click", () => {
        setLang("en");
        console.log("click");
        location.href = "../en/home.html";
    })
} else if(getPath() == "en"){
    nlBTN = document.getElementById("nlBTN");

    nlBTN.addEventListener("click", () => {
        setLang("nl");
        location.href = "../nl/home.html";
    })
}



