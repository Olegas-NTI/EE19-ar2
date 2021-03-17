const rutaNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");
cpulist = {
    ryzen : {
        cpu1: {
            url: "https://inetimg3.se/img/86x86/5303156_0.jpg",
            title: "Ryzen 3 3100"
        },
        cpu2:{
            url: "https://inetimg3.se/img/86x86/5301793_1.jpg",
            title: "Ryzen 5 3600"
        },
        cpu3:{
            url: "https://inetimg3.se/img/86x86/5301791_0.jpg",
            title: "Ryzen 7 3700X"
        }
    },
    intel : {
        cpu1:{
            url: "https://inetimg3.se/img/86x86/5301773_0.jpg",
            title: "Intel Core i3 9100F"
        },
        cpu2:{
            url: "https://inetimg.se/img/86x86/5303145_0.jpg",
            title: "Intel Core i5 10500"
        },
        cpu3:{
            url: "https://inetimg.se/img/86x86/5303639_1.jpg",
            title: "Intel Core i7 11700"
        }
    }
}

knapp.addEventListener("click", function () {
    console.log("Du har tryckt pa knappen");
    var namn = rutaNamn.value;
    console.log(namn);
    var cpu = meny.value;
    console.log(cpu);
    
    if (cpu == "ryzen3") {
        lista.innerHTML = 
        `<li class="list-group-item">
        <img src="${cpulist.ryzen.cpu1.url}">
         - ${cpulist.ryzen.cpu1.title}
        </li>`
    }
    if (cpu == "ryzen5") {
        lista.innerHTML = 
        `<li class="list-group-item">
        <img src="${cpulist.ryzen.cpu1.url}">
         - ${cpulist.ryzen.cpu3.title}
        </li>`
    }
    if (cpu == "ryzen7") {
        lista.innerHTML = 
        `<li class="list-group-item">
        <img src="${cpulist.ryzen.cpu3.url}">
         - ${cpulist.ryzen.cpu3.title}
        </li>`
    }
    if (cpu == "inteli3") {
        lista.innerHTML = 
        `<li class="list-group-item">
        <img src="${cpulist.intel.cpu1.url}">
         - ${cpulist.intel.cpu1.title}
        </li>`
    }
    if (cpu == "inteli5") {
        lista.innerHTML = 
        `<li class="list-group-item">
        <img src="${cpulist.intel.cpu1.url}">
         - ${cpulist.intel.cpu3.title}
        </li>`
    }
    if (cpu == "inteli7") {
        lista.innerHTML = 
        `<li class="list-group-item">
        <img src="${cpulist.intel.cpu3.url}">
         - ${cpulist.intel.cpu3.title}
        </li>`
    }
})