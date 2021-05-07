function drawCache(sets, blocksize) {
    let table = document.createElement('table');
    for (let i = 0; i < sets; ++i) {
        let tr = document.createElement('tr');
        tr.id = i;
        for (let j = 0; j < blocksize; ++j) {
            let td = document.createElement('td');
            td.id = i + "-" + j;
            td.innerText = td.id;
            tr.append(td);
        }
        table.append(tr);
    }
    document.getElementById('cache').append(table);
}
