var t = document.getElementById("images"), r, i;
if (screen.width < 750)
{
    for(i = t.rows.length - 1; i >= 0; i--) {
        r = t.insertRow(i+1);
        r.appendChild(t.rows[i].cells[2]);
    }
}