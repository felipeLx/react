function checkNotes(value) {
    const fixed = [200, 100, 50, 10]
    let notes = []

    if(value < fixed[0]) {
        notes.push(0);
    }

    for (let i = 0; i < fixed.length; i++) {
        let qty = Math.floor(value / fixed[i]);
        qty && notes.push(qty);
    }

    console.log('options: ', notes);
    return notes;
}

checkNotes(520);