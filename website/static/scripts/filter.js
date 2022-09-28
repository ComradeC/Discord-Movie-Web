function filter() {
    // Declare variables
    let showWatched, showNotWatched, table, tr, td, i, txtValue;

    showWatched = document.getElementById("watchedFilter").checked;
    showNotWatched = document.getElementById("notWatchedFilter").checked;
    table = document.getElementById("movieTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, hide the necessary ones
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if ((txtValue === "False" && showNotWatched === false) || (txtValue === "True" && showWatched === false)) {
                tr[i].style.display = "none";
            } else {
                tr[i].style.display = "";
            }
        }
    }
}