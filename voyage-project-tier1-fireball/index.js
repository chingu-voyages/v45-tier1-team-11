async function search(searchParams) {
    const outputElement = document.getElementById('results');
    try {
        const response = await fetch('utils/meteorites.json');
        const jsonData = await response.json();
        
        let meteorites = jsonData;
        Object.keys(searchParams).forEach(parameter => {
        const value = searchParams[parameter];
        if (parameter == 'year') {
            meteorites = meteorites.filter(meteorite =>
                meteorite[parameter] ? meteorite[parameter].substring(0, 4) === value : false
            );
        } else if (parameter == 'mass') {
            if (value === 'very low') {
                meteorites = meteorites.filter(meteorite =>
                    meteorite[parameter] ? parseInt(meteorite[parameter]) < 100 : false
                );
            } else if (value === 'low') {
                meteorites = meteorites.filter(meteorite =>
                    meteorite[parameter] ? (parseInt(meteorite[parameter]) >= 100 && parseInt(meteorite[parameter]) < 1000) : false
                );
            } else if (value === 'medium') {
                meteorites = meteorites.filter(meteorite =>
                    meteorite[parameter] ? (parseInt(meteorite[parameter]) >= 1000 && parseInt(meteorite[parameter]) < 10000) : false
                );
            } else if (value === 'high') {
                meteorites = meteorites.filter(meteorite =>
                    meteorite[parameter] ? (parseInt(meteorite[parameter]) >= 10000 && parseInt(meteorite[parameter]) < 100000) : false
                );
            } else if (value === 'very high') {
                meteorites = meteorites.filter(meteorite =>
                    meteorite[parameter] ? parseInt(meteorite[parameter]) >= 100000 : false
                );
            }
        } else {
            meteorites = meteorites.filter(meteorite =>
                meteorite[parameter] ? meteorite[parameter] === value : false
            );
        }
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
        mass: 'very low',
    };
    await search(searchParams);
});
