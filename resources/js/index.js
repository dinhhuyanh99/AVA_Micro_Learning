var isDarkModeEnabled = window.localStorage.getItem("isDarkModeEnabled");

document.addEventListener('DOMContentLoaded', function () {
    var sidenavs = document.querySelectorAll('.sidenav');
    var sidenavsInstances = M.Sidenav.init(sidenavs, {});
    var dropdowns = document.querySelectorAll('.dropdown-trigger');
    var dropdownsInstances = M.Dropdown.init(dropdowns, {coverTrigger: false});
    var collapsibles = document.querySelectorAll('.collapsible');
    var collapsibleInstances = M.Collapsible.init(collapsibles, {});

    // Get saved value to see if dark mode is previously enabled.
    if(isDarkModeEnabled == null || isDarkModeEnabled == undefined) {
        isDarkModeEnabled = "0";
        window.localStorage.setItem("isDarkModeEnabled", "0");
    }
    initiateThemeMode();
});

function initiateThemeMode(){
    let toggleBtn = document.getElementById("toggle-dark-light");
    if (isDarkModeEnabled === "1") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerHTML = "Light Mode<i class=\"material-icons right\">brightness_high</span>";
        toggleBtn.classList.add("ava-blue-btn");
    } else {
        toggleBtn.innerHTML = "Dark Mode<i class=\"material-icons right\">brightness_2</span>";
        toggleBtn.classList.add("black");
    }
}

function switchDarkLight(){
    let toggleBtn = document.getElementById("toggle-dark-light");
    if(isDarkModeEnabled === "1"){
        toggleBtn.innerHTML = "Dark Mode<i class=\"material-icons right\">brightness_2</span>";
        toggleBtn.classList.remove("ava-blue-btn");
        toggleBtn.classList.add("black");
        isDarkModeEnabled = "0";
    } else {
        toggleBtn.innerHTML = "Light Mode<i class=\"material-icons right\">brightness_high</span>";
        toggleBtn.classList.remove("black");
        toggleBtn.classList.add("ava-blue-btn");
        isDarkModeEnabled = "1";
    }
    document.body.classList.toggle("dark-mode");
    window.localStorage.removeItem("isDarkModeEnabled");
    window.localStorage.setItem("isDarkModeEnabled", isDarkModeEnabled);
}