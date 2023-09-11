# Fireball

Welcome to Fireball! This repository contains the code for a web application called Fireball, a platform for users to browse and discover meteorites. Visit it at: ---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- Search meteorites: Search and filter by name, year of landing, composition and mass.
- Results: Scrollable table of meteorites that result from the search, with their name, year of landing, composition and mass.
- Statistics: Histograms classifying the resulting meteorites by year and composition; number and average mass of resulting meteorites.
- Map of meteorites: The resulting meteorites are displayed on a world map and when a row in the table of results is clicked on, the corresponding pop up is opened on the map.
- Order meteorites: Order meteorites by name, composition, year of landing or mass in ascending/descending order.

## Installation

Follow these steps to set up the Fireball application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/chingu-voyages/v45-tier1-team-11.git
   ```

2. Use your usual method to start a server (Python or Node.js HTTP Server, Live Server from VSCode...) and access the corresponding port.

## Usage

Fireball provides functionality to analyse data of meteorites. Here are some common actions users can perform:

- **Filter**: Select a parameter to filter the meteorites by, consecutive filters can be applied. All filters can be cleared afterwards.
- **Read**: Look and compare the results on the table.
- **Browse on map**: Zoom, move and click on markers to find meteorites and read their coordinates.
- **Find location on map**: Click on a meteorite row to open the corresponding pop-up on the map.
- **Statistics**: Understand the data visually by histograms of year of landing and meteorite composition.
- **Order**: Click on a column head to order the rows based on that parameter. Click again to change from ascending to descending order and vice versa.

## Technologies Used

Fireball is meant to be a front end web application and it is built in HTML, CSS and Vanilla JavaScript.

---

Thank you for exploring Fireball! If you have any questions or feedback, please feel free to contact us or raise an issue in the repository.
