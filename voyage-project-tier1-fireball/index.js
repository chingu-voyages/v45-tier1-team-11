async function search(searchParams) {
    const outputElement = document.getElementById('results');
    try {
        const response = await fetch('utils/meteorites.json');
        const jsonData = await response.json();
        
        let meteorites = jsonData;
        Object.keys(searchParams).forEach(parameter => {
        const value = searchParams[parameter];
        meteorites = meteorites.filter(meteorite =>
            meteorite[parameter] ? meteorite[parameter] === value : false
        );
        });

        outputElement.textContent = JSON.stringify(meteorites, null, 2);
    } catch (error) {
        console.error('Error:', error);
        outputElement.textContent = 'Meteorites not found.';
    }
}

const button = document.getElementById('searchButton');
button.addEventListener('click', async () => {
    const searchParams = {
        reclat: '50.775000',
    };
    await search(searchParams);
});
