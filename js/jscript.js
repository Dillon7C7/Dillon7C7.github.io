function openTab(evt, pageName) {									// this function controls the tabs on the HTML page
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";						// all of the tabs will be hidden instead of created and deleted
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");  
    }
    document.getElementById(pageName).style.display = "block";					// displays the called tab
    evt.currentTarget.className += " active";	
}

