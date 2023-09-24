function filter() {
    // Declare variables
    let showWatched, showNotWatched, table, tr, td, img, i;

    showWatched = document.getElementById("watchedFilter").checked;
    showNotWatched = document.getElementById("notWatchedFilter").checked;
    table = document.getElementById("movieTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, hide/show the necessary ones based on classes
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3]; // Assuming the image is in the second cell
        if (td) {
            img = td.querySelector("img");
            if (img) {
                if ((img.classList.contains("watched") && !showWatched) ||
                    (img.classList.contains("not-watched") && !showNotWatched)) {
                    tr[i].style.display = "none";
                } else {
                    tr[i].style.display = "";
                }
            }
        }
    }
}
