if (document.URL.indexOf("github.com/") != -1) {
    var elements = document.getElementsByTagName("ul");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("role") == "navigation") {
            var entry = document.createElement('li');
            var link = document.createElement("a");
            link.href = "/explore";
            link.innerHTML = "Explore"
            link.className = "js-selected-navigation-item header-nav-link";
            entry.appendChild(link);
            entry.className = "header-nav-item";
            elements[i].appendChild(entry);
        }
    }
}
