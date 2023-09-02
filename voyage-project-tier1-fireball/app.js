// Parameters values (name, composition type):
const names1 = ["Aachen", "Aarhus", "Abee", "Acapulco", "Achiras", "Adhi Kot", "Adzhi-Bogdo (stone)", "Agen", "Aguada", "Aguila Blanca", "Aioun el Atrouss", "Aïr", "Aire-sur-la-Lys", "Akaba", "Akbarpur", "Akwanga", "Akyumak", "Al Rais", "Al Zarnkh", "Alais", "Albareto", "Alberta", "Alby sur Chéran", "Aldsworth", "Aleppo", "Alessandria", "Alexandrovsky", "Alfianello", "Allegan", "Allende", "Almahata Sitta", "Alta'ameem", "Ambapur Nagla", "Andhara", "Andover", "Andreevka", "Andura", "Northwest Africa 5815", "Angers", "Angra dos Reis (stone)", "Ankober", "Anlong", "Aomori", "Appley Bridge", "Apt", "Arbol Solo", "Archie", "Arroyo Aguiar", "Asco", "Ash Creek", "Ashdon", "Assisi", "Atarra", "Atemajac", "Athens", "Atoka", "Aubres", "Aumale", "Aumieres", "Ausson", "Avanhandava", "Avce", "Avilez", "Awere", "Aztec", "Bachmut", "Bahjoi", "Bald Mountain", "Baldwyn", "Bali", "Ban Rong Du", "Bandong", "Bansur", "Banswal", "Banten", "Barbotan", "Barcelona (stone)", "Barea", "Barnaul", "Barntrup", "Baroti", "Barwell", "Bassikounou", "Baszkówka", "Bath", "Bath Furnace", "Battle Mountain", "Bawku", "Baxter", "Beardsley", "Beaver Creek", "Beddgelert", "Bells", "Belville", "Benares (a)", "Benguerir", "Beni M'hira", "Benld", "Benoni", "Bensour", "Benton", "Berduc", "Béréba", "Berlanguillas", "Berthoud", "Bethlehem", "Beuste", "Beyrout", "Bhagur", "Bhawad", "Bherai", "Bhola", "Bholghati", "Bialystok", "Bielokrynitschie", "Bilanga", "Binningup", "Birni N'konni", "Bishopville", "Bishunpur", "Bjelaja Zerkov", "Bjurböle", "Black Moshannan Park", "Blackwell", "Blanket", "Blansko", "Bloomington", "Bo Xian", "Bocas", "Bogou", "Boguslavka", "Borgo San Donino", "Bori", "Boriskino", "Borkut", "Borodino", "Botschetschki", "Boumdeid (2003)", "Boumdeid (2011)", "Bovedy", "Bradford Woods", "Braunau", "Breitscheid", "Bremervörde", "Brient", "Bruderheim", "Bukhara", "Bulls Run", "Bunburra Rockhole", "Bununu", "Bur-Gheluai", "Burnwell", "Bursa", "Buschhof", "Bustee", "Butsura", "Buzzard Coulee", "Cabezo de Mayo", "Cabin Creek", "Cacak", "Cali", "Calivo", "Campos Sales", "Çanakkale", "Cañellas", "Cangas de Onis", "Canon City", "Cape Girardeau", "Capilla del Monte", "Carancas", "Caratash", "Castalia", "Castel Berardenga", "Castine", "Castrovillari", "Caswell County", "Ceniceros", "Centerville", "Cereseto", "Chadong", "Chail", "Chainpur", "Chajari", "Chandakapur", "Chandpur", "Changde", "Chantonnay", "Charlotte", "Charsonville", "Charwallas", "Chassigny", "Château-Renard", "Chaves", "Chela"];
const names2 = ["Chelyabinsk", "Chergach ", "Chernyi Bor", "Cherokee Springs", "Chervettaz", "Chervony Kut", "Chetrinahatti", "Chiang Khan", "Chicora", "Chisenga", "Chitado", "Chitenay", "Cilimus", "Claxton", "Clohars", "Colby (Wisconsin)", "Cold Bokkeveld", "Coleman", "Collescipoli", "Conquista", "Cosina", "Cranganore", "Crescent", "Cronstad", "Cross Roads", "Crumlin", "Cumberland Falls", "Cynthiana", "Dahmani", "Dandapur", "Daniel's Kuil", "Danville", "Darmstadt", "Dashoguz", "Daule", "De Cewsville", "Deal", "Delhi", "Demina", "Denver", "Dergaon", "Desuri", "Devgaon", "Devri-Khera", "Dhajala", "Dharwar", "Dhurmsala", "Didim", "Diep River", "Distrito Quebracho", "Djati-Pengilon", "Djermaia", "Djoumine", "Dokachi", "Dolgovoli", "Domanitch", "Dong Ujimqin Qi", "Donga Kohrod", "Dongtai", "Doroninsk", "Dosso", "Douar Mghila", "Dowa", "Drake Creek", "Dresden (Ontario)", "Dubrovnik", "Dunbogan", "Dundrum", "Dunhua", "Durala", "Duruma", "Duwun", "Dwaleni", "Dyalpur", "Dyarrl Island", "Eagle", "Ehole", "Eichstädt", "Ekeby", "Ekh Khera", "El Idrissia", "El Paso de Aguila", "El Tigre", "Elbert", "Elbogen", "Elenovka", "Ellemeet", "Emmaville", "Enshi", "Ensisheim", "Épinal", "Erakot", "Erevan", "Ergheo", "Erxleben", "Esnandes", "Essebi", "Estherville", "Farmington", "Farmville", "Favars", "Fayetteville", "Feid Chair", "Felix", "Fenghsien-Ku", "Ferguson", "Fermo", "Fisher", "Florence", "Forest City", "Forest Vale", "Forksville", "Forsbach", "Forsyth", "Fort Flatters", "Frankfort (stone)", "Fuhe", "Fukutomi", "Fünen", "Futtehpur", "Fuyang", "Galapian", "Galim (a)", "Galim (b)", "Galkiv", "Gambat", "Gao-Guenie", "Garhi Yasin", "Garland", "Gashua", "Gasseltepaoua", "Geidam", "Gifu", "Girgenti", "Git-Git", "Glanerbrug", "Glanggang", "Glasatovo", "Glatton", "Gnadenfrei", "Gopalpur", "Gorlovka", "Granes", "Grefsheim", "Grimsby", "Grosnaja", "Gross-Divina", "Grossliebenthal", "Grüneberg", "Grzempach", "Gualeguaychú", "Guangmingshan", "Guangnan", "Guangrao", "Guareña", "Guêa", "Guibga", "Guidder", "Gujargaon", "Gujba", "Gumoschnik", "Gurram Konda", "Gursum", "Gütersloh", "Gyokukei", "Hachi-oji", "Hainaut", "Hallingeberg", "Hamlet", "Haraiya", "Haripura", "Harleton", "Harrison County", "Hashima", "Hassi-Jekna", "Hatford", "Haverö", "Hedeskoga", "Hedjaz", "Heredia", "Hessle", "Higashi-koen", "High Possil", "Hiroshima", "Hoima", "Hökmark", "Holbrook", "Holetta", "Homestead", "Honolulu", "Hotse", "Hoxie", "Hraschina", "Huaxi", "Hungen", "Hvittis", "Ibbenbüren", "Ibitira"];
const names3 = ["Ibrisim", "Ichkala", "Idutywa", "Iguaracu", "Ijopega", "Indarch", "Independence", "Inner Mongolia", "Innisfree", "Ipiranga", "Ishinga", "Isthilart", "Itapicuru-Mirim", "Itqiy", "Ivuna", "Jackalsfontein", "Jajh deh Kot Lalu", "Jalanash", "Jalandhar", "Jamkheir", "Jartai", "Jelica", "Jemlapur", "Jesenice", "Jhung", "Jiange", "Jianshi", "Jilin", "Jodiya", "Jodzie", "Johnstown", "Jolomba", "Jonzac", "Juancheng", "Judesegeri", "Jumapalo", "Junan", "Juromenha", "Juvinas", "Kaba", "Kabo", "Kadonah", "Kaee", "Kagarlyk", "Kaidun", "Kainsaz", "Kakangari", "Kakowa", "Kalaba", "Kalumbi", "Kamalpur", "Kamiomi", "Kamsagar", "Kandahar (Afghanistan)", "Kangean", "Kangra Valley", "Kapoeta", "Kaprada", "Kaptal-Aryk", "Karakol", "Karatu", "Karewar", "Karkh", "Karloowala", "Karoonda", "Kasamatsu", "Kasauli", "Katagum", "Kavarpura", "Kayakent", "Kediri", "Kemer", "Kendleton", "Kendrapara", "Kerilis", "Kernouve", "Kesen", "Khairpur", "Khanpur", "Kharkov", "Kheragur", "Khetri", "Khmelevka", "Khohar", "Khor Temiki", "Kidairat", "Kiel", "Kiffa", "Kijima (1906)", "Kikino", "Kilabo", "Kilbourn", "Killeter", "Kingai", "Kirbyville", "Kisvarsány", "Kitchener", "Klein-Wenden", "Knyahinya", "Kobe", "Kokubunji", "Komagome", "Konovo", "Košice", "Krähenberg", "Krasnoi-Ugol", "Krasnyi Klyuch", "Krutikha", "Krymka", "Kukschin", "Kulak", "Kuleschovka", "Kulp", "Kunashak", "Kunya-Urgench", "Kushiike", "Kusiali", "Kutais", "Kuttippuram", "Kuznetzovo", "Kyushu", "La Bécasse", "La Charca", "La Colina", "La Criolla", "Laborel", "Lahrauli", "L'Aigle", "Cumulus Hills 04075", "Lakangaon", "Lalitpur", "Lancé", "Lancon", "Långhalsen", "Lanxi", "Lanzenkirchen", "Laochenzhen", "Launton", "Lavrentievka", "Le Pressoir", "Le Teilleul", "Leedey", "Leeuwfontein", "Leighlinbridge", "Leighton", "Leonovka", "Les Ormes", "Lesves", "Lichtenberg", "Lillaverke", "Limerick", "Linum", "Lishui", "Lissa", "Little Piney", "Lixna", "Lodran", "Lohawat", "Lorton", "Los Martinez", "Lost City", "Louisville", "Łowicz", "Lua", "Lucé", "Lumpkin", "Lunan", "Lundsgård", "Luotolax", "Luponnas", "Lusaka", "Mabwe-Khoywa", "Macau", "Machinga", "Macibini", "Madhipura", "Madiun", "Madrid", "Mafra", "Magnesia", "Magombedze", "Mahadevpur", "Maigatari-Danduma", "Malaga", "Malakal", "Malampaka", "Malotas", "Malvern", "Mamra Springs", "Manbhoom", "Manegaon", "Mangwendi", "Manych", "Mardan", "Maria Linden", "Mariaville", "Maribo", "Maridi", "Marilia", "Marion (Iowa)", "Marjalahti", "Marmande", "Maromandia", "Maryville"];
const names4 = ["Mascombes", "Mason Gully", "Mässing", "Mauerkirchen", "Mauritius", "Mayo Belwa", "Mazapil", "Maziba", "Mbale", "Medanitos", "Meerut", "Meester-Cornelis", "Menow", "Menziswyl", "Mern", "Meru", "Merua", "Messina", "Meuselbach", "Mezel", "Mezö-Madaras", "Mhow", "Mianchi", "Middlesbrough", "Mifflin", "Mighei", "Mihonoseki", "Mike", "Milena", "Millbillillie", "Miller (Arkansas)", "Minamino", "Mineo", "Min-Fan-Zhun", "Minnichhof", "Mirzapur", "Misshof", "Mjelleim", "Mocs", "Modoc (1905)", "Mokoia", "Molina", "Molteno", "Monahans (1998)", "Monroe", "Monte das Fortes", "Monte Milone", "Montferré", "Montlivault", "Monze", "Moore County", "Mooresfort", "Moorleah", "Moradabad", "Morávka", "Mornans", "Moss", "Moti-ka-nagla", "Motta di Conti", "Mount Browne", "Mount Tazerzait", "Mount Vaisi", "Mtola", "Muddoor", "Mulletiwu", "Muraid", "Murchison", "Murray", "Muzaffarpur", "Myhee Caunta", "Nadiabondi", "Nagai", "Nagaria", "Nagy-Borové", "Nakhla", "Nakhon Pathom", "Nammianthal", "Nan Yang Pao", "Nanjemoy", "Nantong", "Naoki", "Naragh", "Narellan", "Narni", "Nassirah", "Natal", "Nawapali", "Neagari", "Nedagolla", "Nejo", "Nerft", "Neuschwanstein", "New Concord", "New Halfa", "New Orleans", "Ngawi", "N'Goureyma", "Nicorps", "Niger (L6)", "Niger (LL6)", "Nikolaevka", "Nikolskoe", "Ningbo", "Ningqiang", "Nio", "N'Kandhla", "Nobleborough", "Noblesville", "Nogata", "Nogoya", "Norfork", "Norton County", "Noventa Vicentina", "Novo-Urei", "Novy-Ergi", "Novy-Projekt", "Noyan-Bogdo", "Nuevo Mercurio", "Nulles", "Numakai", "Nyaung", "Nyirábrany", "Ochansk", "Oesede", "Oesel", "Ofehértó", "Ogi", "Ohaba", "Ohuma", "Ojuelos Altos", "Okabe", "Okano", "Okniny", "Oldenburg (1930)", "Oliva-Gandia", "Olivenza", "Olmedilla de Alarcón", "Omolon", "Orgueil", "Orlando", "Ornans", "Ortenau", "Orvinio", "Oterøy", "Otomi", "Ottawa", "Ouadangou", "Oued el Hadjar", "Oum Dreyga", "Ourique", "Ovambo", "Oviedo", "Owrucz", "Pacula", "Padvarninkai", "Paitan", "Palahatchie", "Palca de Aparzo", "Palinshih", "Palmyra", "Palolo Valley", "Dominion Range 03239", "Pampanga", "Pantar", "Paragould", "Parambu", "Paranaiba", "Park Forest", "Parnallee", "Parsa", "Pasamonte", "Patora", "Patrimonio", "Patti", "Patwar", "Pavel", "Pavlodar (stone)", "Pavlograd", "Pavlovka", "Pê", "Peace River", "Peckelsheim", "Peekskill", "Peña Blanca Spring", "Peramiho", "Perpeti", "Perth", "Pervomaisky", "Pesyanoe", "Pétèlkolé", "Petersburg", "Pettiswood", "Phillips County (stone)", "Phu Hong", "Phum Sambo"];
const names5 = ["Phuoc-Binh", "Piancaldoli", "Picote", "Pillistfer", "Piplia Kalan", "Piquetberg", "Pirgunje", "Pirthalla", "Pitts", "Plantersville", "Pleşcoi", "Ploschkovitz", "Pnompehn", "Dominion Range 03240", "Pohlitz", "Pokhra", "Pollen", "Pontlyfni", "Portales Valley", "Portugal", "Po-wang Chen", "Prambachkirchen", "Pribram", "Pricetown", "Puerto Lápice", "Pulsora", "Pultusk", "Punganaru", "Putinga", "Qidong", "Qingzhen", "Queen's Mercy", "Quenggouk", "Quesa", "Quija", "Quincay", "Raco", "Raghunathpura", "Rahimyar Khan", "Rakovka", "Ramnagar", "Rampurhat", "Ramsdorf", "Ranchapur", "Rancho de la Presa", "Rangala", "Raoyang", "Ras Tanura", "Rasgrad", "Ratyn", "Red Canyon Lake", "Reliegos", "Rembang", "Renazzo", "Renca", "Renqiu", "Repeev Khutor", "Revelstoke", "Rewari", "Rich Mountain", "Uzcudun", "Richardton", "Richland Springs", "Richmond", "Rio Negro", "Rivolta de Bassi", "Rochester", "Rockhampton", "Roda", "Rodach", "Rose City", "Rowton", "Ruhobobo", "Rumuruti", "Rupota", "Ryechki", "Sabetmahet", "Sabrum", "Sagan", "Saint-Sauveur", "Saint-Séverin", "Sakauchi", "Salem", "Salles", "Salzwedel", "Samelia", "San Juan Capistrano", "San Michele", "San Pedro de Quiles", "San Pedro Jacuaro", "Santa Barbara", "Santa Cruz", "Santa Isabel", "Santa Lucia (2008)", "São Jose do Rio Preto", "Saratov", "Sasagase", "Sauguis", "Savtschenskoje", "Sayama", "Sazovice", "Schellin", "Schenectady", "Schönenberg", "Searsmont", "Sediköy", "Segowlie", "Selakopi", "Seldebourak", "Semarkona", "Sena", "Senboku", "Seoni", "Seres", "Serra de Magé", "Sete Lagoas", "Sevilla", "Sevrukovo", "Sfax", "Shalka", "Sharps", "Shelburne", "Shergotty", "Sheyang", "Shikarpur", "Shuangyang", "Shupiyan", "Shytal", "Siena", "Sikhote-Alin", "Silao", "Silistra", "Simmern", "Sinai", "Sindhri", "Sinnai", "Sioux County", "Sitathali", "Sivas", "Sixiangkou", "Ski", "Slavetic", "Slobodka", "Soheria", "Soko-Banja", "Sologne", "Sołtmany", "Sone", "Songyuan", "Sopot", "Soroti", "St. Caprais-de-Quinsac", "St. Christophe-la-Chartreuse", "St. Denis Westrem", "St. Germain-du-Pinel", "St. Louis", "St. Mark's", "St. Mary's County", "St. Mesmin", "St. Michel", "St.-Chinian", "Ställdalen", "Stannern", "Stavropol", "Ste. Marguerite", "Sterlitamak", "Stolzenau", "Stratford", "Strathmore", "Stretchleigh", "St-Robert", "Success", "Suchy Dul", "Suizhou", "Sulagiri", "Sultanpur", "Sungach", "Supuhee", "Sutter's Mill", "Sylacauga", "Tabor", "Tadjera", "Tagish Lake", "Tahara", "Takenouchi", "Talampaya", "Tambakwatu"];
const names6 = ["Tamdakht", "Tané", "Taonan", "Tatahouine", "Tathlith", "Tauk", "Tauti", "Tenham", "Tennasilm", "Thal", "Thika", "Thuathe", "Tianzhang", "Tieschitz", "Tilden", "Tillaberi", "Timochin", "Tirupati", "Tissint", "Tjabe", "Tjerebon", "Tomakovka"];

const recclass = [
    "Acapulcoite",
    "Achondrite-ung",
    "Angrite",
    "Aubrite",
    "C",
    "C2-ung",
    "C3-ung",
    "CBa",
    "CI1",
    "CK4",
    "CM2",
    "CO3.2",
    "CO3.3",
    "CO3.4",
    "CO3.5",
    "CO3.6",
    "CR2",
    "CR2-an",
    "CV3",
    "Diogenite",
    "Diogenite-pm",
    "EH3",
    "EH3/4-an",
    "EH4",
    "EH5",
    "EH7-an",
    "EL6",
    "Eucrite",
    "Eucrite-br",
    "Eucrite-cm",
    "Eucrite-mmict",
    "Eucrite-pmict",
    "H",
    "H/L3.6",
    "H/L3.9",
    "H/L4",
    "H3",
    "H3-4",
    "H3-5",
    "H3-6",
    "H3.4",
    "H3.7",
    "H3.8",
    "H3/4",
    "H4",
    "H4-5",
    "H4-6",
    "H4-an",
    "H4/5",
    "H5",
    "H5-6",
    "H5-7",
    "H5/6",
    "H6",
    "H?",
    "Howardite",
    "Iron",
    "Iron, IAB-MG",
    "Iron, IAB-sHL",
    "Iron, IAB-sLL",
    "Iron, IAB-ung",
    "Iron, IIAB",
    "Iron, IID",
    "Iron, IIE",
    "Iron, IIE-an",
    "Iron, IIF",
    "Iron, IIIAB",
    "Iron, IVA",
    "Iron, ungrouped",
    "Iron?",
    "K3",
    "L",
    "L/LL4",
    "L/LL5",
    "L/LL6",
    "L3",
    "L3-4",
    "L3-6",
    "L3.4",
    "L3.6",
    "L3.7",
    "L3.7-6",
    "L4",
    "L4-6",
    "L5",
    "L5-6",
    "L5/6",
    "L6",
    "LL",
    "LL3-6",
    "LL3.00",
    "LL3.15",
    "LL3.2",
    "LL3.3",
    "LL3.4",
    "LL3.6",
    "LL3.8",
    "LL3.9",
    "LL4",
    "LL5",
    "LL6",
    "Lodranite",
    "Martian (chassignite)",
    "Martian (nakhlite)",
    "Martian (shergottite)",
    "Mesosiderite",
    "Mesosiderite-A1",
    "Mesosiderite-A3",
    "Mesosiderite-A3/4",
    "OC",
    "Pallasite",
    "Pallasite, PMG",
    "R3.8-6",
    "Stone-uncl",
    "Unknown",
    "Ureilite",
    "Ureilite-an",
    "Winonaite",
  ];

const yellowMarkerIcon = L.icon({
    iconUrl: 'utils/images/yellow-marker-border.png',
    shadowUrl: 'utils/images/marker-shadow.png',
    iconSize: [32, 42],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

var markers = [];
function removeAllMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].remove();
  }
  markers = [];
}

//Function to populate table with meteorite data
function populateTable(data) {
  const tableBody = document.querySelector(".results tbody");
  tableBody.innerHTML = ""; // Clear the existing table data

  data.forEach((meteorite) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = meteorite.name;
    row.appendChild(nameCell);

    const compositionCell = document.createElement("td");
    compositionCell.textContent = meteorite.recclass;
    row.appendChild(compositionCell);

    const yearCell = document.createElement("td");
    yearCell.textContent = new Date(meteorite.year).getFullYear();
    row.appendChild(yearCell);

    const massCell = document.createElement("td");

    // Check if meteorite.mass is a valid number
    if (!isNaN(parseFloat(meteorite.mass))) {
      // Round to 2 decimal places if it has numbers (except 0) after the dot
      const massValue = parseFloat(meteorite.mass).toFixed(2);
      massCell.textContent = massValue;
    } else {
      // Set a dash "-" for NaN values
      massCell.textContent = "-";
    }

    row.appendChild(massCell);

    tableBody.appendChild(row);
  });
}
// Create the year and composition histogram charts
let yearChart = null;
let compositionChart = null;

//Function to generate a Chart.js histograms
function createHistogram(data, labels, chartId, chartTitle) {
  const ctx = document.getElementById(chartId).getContext("2d");

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: chartTitle,
          data: data,
          backgroundColor: "rgba(20, 45, 76, 1)",
          borderColor: "rgba(20, 45, 76, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
//Function to update the Year Histogram
function updateYearHistogram(meteorites) {
  // Extract the years from the meteorite data
  const years = meteorites.map((meteorite) =>
    new Date(meteorite.year).getFullYear()
  );
  // Create an object, to store the amount of meteorites for each year
  const yearCounts = {};
  // Loop through the years and count the number of meteorites for each year
  years.forEach((year) => {
    if (yearCounts[year]) {
      yearCounts[year]++; // If the year exists in our object we increment the count
    } else {
      yearCounts[year] = 1; // If the year doesn't exist, initialize it with a count of 1
    }
  });

  // Sorting the years in the ascending order
  const sortedYears = Object.keys(yearCounts).sort((a, b) => a - b);
  // Creating an array of meteorite counts, that corresponds to the sorted years
  const yearData = sortedYears.map((year) => yearCounts[year]);

  if (yearChart) {
    yearChart.destroy(); // Destroy the previous chart, if its exists
  }
  // Creating a new year histogram chart using the updated data
  yearChart = createHistogram(
    yearData,
    sortedYears,
    "yearHistogram",
    "Number of Strikes by Year"
  );
}

// Function to update the composition histogram
function updateCompositionHistogram(meteorites) {
  // Create an object, to store the amount of meteorites for each composition
  const compositionCounts = {};

  meteorites.forEach((meteorite) => {
    const composition = meteorite.recclass;
    // Loop through the meteorites and count the number of occurrences for each composition
    if (compositionCounts[composition]) {
      compositionCounts[composition]++;
    } else {
      compositionCounts[composition] = 1;
    }
  });
  // Sorting compositions in an alphabetical order
  const sortedCompositions = Object.keys(compositionCounts).sort();
  // Create an array of meteorite counts corresponding to the sorted compositions
  const compositionData = sortedCompositions.map(
    (composition) => compositionCounts[composition]
  );

  if (compositionChart) {
    compositionChart.destroy(); // Destroy the previous chart, if its exists
  }
  // Creating a new composition histogram chart using the updated data
  compositionChart = createHistogram(
    compositionData,
    sortedCompositions,
    "compositionHistogram",
    "Number of Strikes by Meteorite Composition"
  );
}

// This function calculates and updates summary metrics based on filtered meteorite data.
async function updateSummaryMetrics(meteorites) {
  const totalStrikesElement = document.getElementById("totalStrikes");
  const averageMassElement = document.getElementById("averageMass");

  // Calculating the total number of meteorite strikes.
  const totalStrikes = meteorites.length;
  // Calculating the total mass of meteorites, considering valid mass values.
  const totalMass = meteorites.reduce((sum, meteorite) => {
    if (meteorite.mass && !isNaN(parseFloat(meteorite.mass))) {
      return sum + parseFloat(meteorite.mass);
    }
    return sum;
  }, 0);

  // Calculating the average mass of meteorites.
  const averageMass = totalMass / totalStrikes;
  // Updating HTML elements with calculated metrics
  totalStrikesElement.textContent = totalStrikes;
  averageMassElement.textContent = averageMass.toFixed(2);
}

var map = L.map("map").setView([20, 0], 2);
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

async function loadMarkers(jsonData) {
  try {
    removeAllMarkers();
    var marker;
    jsonData.forEach(function (item) {
      marker = L.marker([
        parseFloat(item.reclat),
        parseFloat(item.reclong),
      ], { icon: yellowMarkerIcon }).addTo(map);
      marker.bindPopup(`<b>${item.name}</b>`);
      markers.push(marker);
    });
  } catch (error) {
    console.error("Error:", error);
    outputElement.textContent = "Error loading map.";
  }
}

// This async function initialises the web application
async function initialise() {
  // Get the HTML element with the ID "results" and store it in the outputElement variable
  const outputElement = document.getElementById("results");

  try {
    const response = await fetch("utils/meteorites.json"); // Send a GET request to fetch data from "utils/meteorites.json"
    const jsonData = await response.json(); // Parse the response data as JSON
    loadMarkers(jsonData);

    let meteorites = jsonData; // Store the JSON data in a variable named "meteorites"

    outputElement.textContent = JSON.stringify(meteorites, null, 2);

    populateTable(meteorites);

    var filters = document.getElementById("filters"); // Get the HTML element with the ID "filters" and clear its content
    filters.innerHTML = "";
    // Call functions to update summary metrics, year histogram, and composition histogram
    updateSummaryMetrics(meteorites);
    updateYearHistogram(meteorites);
    updateCompositionHistogram(meteorites);
  } catch (error) {
    console.error("Error:", error);
    outputElement.textContent = "Meteorites not found.";
  }
}

initialise();

// Get HTML elements with the IDs "met" (select list) and "dynamicField" (searchbox)
var selectOption = document.getElementById("met");
var dynamicField = document.getElementById("dynamicField");
// Create an input field dynamically and set its attributes
var inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "input";
inputField.placeholder = "Enter text";
dynamicField.appendChild(inputField); // Append the input field to the "dynamicField" element

// Function to change searchbox type depending on search field:
selectOption.addEventListener("change", function () {
  // Add an event listener to the "met"
  var selectedValue = selectOption.value;

  dynamicField.innerHTML = ""; // Clear previous content

  if (selectedValue === "mass") {
    var selectField = document.createElement("select"); // Create a select field dynamically with options for mass
    selectField.id = "input";

    var option1 = document.createElement("option");
    option1.value = "very low";
    option1.textContent = "very low (< 100 g)";
    option1.textContent = "very low (< 100 g)";
    selectField.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "low";
    option2.textContent = "low (100-1000 g)";
    option2.textContent = "low (100-1000 g)";
    selectField.appendChild(option2);

    var option3 = document.createElement("option");
    option3.value = "medium";
    option3.textContent = "medium (1000-10000 g)";
    option3.textContent = "medium (1000-10000 g)";
    selectField.appendChild(option3);

    var option4 = document.createElement("option");
    option4.value = "high";
    option4.textContent = "high (10000-100000 g)";
    option4.textContent = "high (10000-100000 g)";
    selectField.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "very high";
    option5.textContent = "very high (> 100000 g)";
    option5.textContent = "very high (> 100000 g)";
    selectField.appendChild(option5);

    dynamicField.appendChild(selectField); // Append the select field to the "dynamicField" element
  } else {
    var inputField = document.createElement("input"); // Create a text input field for other options
    inputField.type = "text";
    inputField.id = "input";
    inputField.placeholder = "Enter text";
    dynamicField.appendChild(inputField);
    initAutocomplete();
  }
});

// This function is responsible for filtering meteorites based on user-provided search parameters:
function search(searchParams, input) {
  if (input === "") {
    return;
  }
  const outputElement = document.getElementById("results");
  let meteorites = JSON.parse(outputElement.textContent); // Parse the JSON data of meteorites stored in the output element.
  var filters = document.getElementById("filters");
  var textElement = document.createElement("p");
  Object.keys(searchParams).forEach((parameter) => {
    if (filters.textContent.includes(parameter)) {
        return;
    }
    // Loop through each search parameter provided by the user.
    const value = searchParams[parameter];
    textElement.textContent = `${parameter}: ${value}`; // Create a text element to display the filter criteria.
    filters.appendChild(textElement); // Append the filter criteria to the filters element.
    // Check the search parameter and apply the corresponding filter.
    if (parameter == "year") {
      meteorites = meteorites.filter((meteorite) =>
        meteorite[parameter]
          ? meteorite[parameter].substring(0, 4) === value
          : false
      );
      // Apply mass range filters based on user-provided values.
    } else if (parameter == "mass") {
      if (value === "very low") {
        meteorites = meteorites.filter((meteorite) =>
          meteorite[parameter] ? parseInt(meteorite[parameter]) < 100 : false
        );
      } else if (value === "low") {
        meteorites = meteorites.filter((meteorite) =>
          meteorite[parameter]
            ? parseInt(meteorite[parameter]) >= 100 &&
              parseInt(meteorite[parameter]) < 1000
            : false
        );
      } else if (value === "medium") {
        meteorites = meteorites.filter((meteorite) =>
          meteorite[parameter]
            ? parseInt(meteorite[parameter]) >= 1000 &&
              parseInt(meteorite[parameter]) < 10000
            : false
        );
      } else if (value === "high") {
        meteorites = meteorites.filter((meteorite) =>
          meteorite[parameter]
            ? parseInt(meteorite[parameter]) >= 10000 &&
              parseInt(meteorite[parameter]) < 100000
            : false
        );
      } else if (value === "very high") {
        meteorites = meteorites.filter((meteorite) =>
          meteorite[parameter]
            ? parseInt(meteorite[parameter]) >= 100000
            : false
        );
      }
      // Apply filters for other search parameters.
    } else {
      meteorites = meteorites.filter((meteorite) =>
        meteorite[parameter]
          ? meteorite[parameter].toLowerCase() === value.toLowerCase()
          : false
      );
    }
  });
  //Updating Metrict and Histograms
  updateSummaryMetrics(meteorites);
  updateYearHistogram(meteorites);
  updateCompositionHistogram(meteorites);
  loadMarkers(meteorites);
  outputElement.textContent = JSON.stringify(meteorites, null, 2);
  populateTable(meteorites);
}

// Functionality of search button:
const buttonSearch = document.getElementById("searchButton");
buttonSearch.addEventListener("click", () => {
  var selectedOption = document.getElementById("met").value;
  var input = document.getElementById("input").value;
  const searchParams = {};
  searchParams[selectedOption] = input;
  search(searchParams, input); // Calling search function to filter meteorite data based on the user input.
});

// Button to get all meteorites back:
const buttonClear = document.getElementById("clearButton");
buttonClear.addEventListener("click", initialise);

// Function to initialize the autocomplete functionality:
function initAutocomplete() {
  const input = document.getElementById("input");

  if (document.getElementById("met").value == "name") {
    // Initialize an autocomplete instance
    new Autocomplete(input, {
      data: names1
        .concat(names2)
        .concat(names3)
        .concat(names4)
        .concat(names5)
        .concat(names6),
    });
  } else if (document.getElementById("met").value == "recclass") {
    new Autocomplete(input, {
      data: recclass,
    });
  }
}

// Initialise autocompletion when webpage first loaded:
document.addEventListener("DOMContentLoaded", function () {
  initAutocomplete();
});

// Autocomplete class definition for autocompletion functionality:
class Autocomplete {
  constructor(inputElement, options) {
    this.inputElement = inputElement;
    this.options = options;
    this.isOpen = false;
    this.resultsContainer = document.createElement("div");
    this.resultsContainer.className = "autocomplete-results";
    this.resultsContainer.style.display = "none";

    this.setupListeners();
    this.inputElement.parentElement.appendChild(this.resultsContainer);
  }

  setupListeners() {
    // Input field keyup event listener
    this.inputElement.addEventListener("keyup", (event) => {
      this.filterResults(event.target.value);
    });

    // Input field blur event listener
    this.inputElement.addEventListener("blur", () => {
      setTimeout(() => {
        this.closeResults();
      }, 200); // Delay to allow clicking on a result
    });

    // Input field focus event listener
    this.inputElement.addEventListener("focus", () => {
      if (this.inputElement.value.length > 0) {
        this.openResults();
      }
    });
  }

  filterResults(query) {
    const filteredResults = this.options.data.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

    this.displayResults(filteredResults);
  }

  displayResults(results) {
    if (results.length === 0) {
      this.closeResults();
      return;
    }

    this.resultsContainer.innerHTML = "";

    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.className = "autocomplete-result";
      resultItem.textContent = result;

      resultItem.addEventListener("click", () => {
        this.inputElement.value = result;
        this.closeResults();
      });

      this.resultsContainer.appendChild(resultItem);
    });

    this.openResults();
  }

  openResults() {
    this.resultsContainer.style.display = "block";
    this.isOpen = true;
  }

  closeResults() {
    this.resultsContainer.style.display = "none";
    this.isOpen = false;
  }
}
