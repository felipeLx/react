async function fetchData() {
    return await fetch('https://api/github/gists')
        .then(resolve => resolve.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

fetchData()