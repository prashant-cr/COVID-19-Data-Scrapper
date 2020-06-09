# COVID-19-Data-Scrapper
Scrape the covid-19 data

## prerequisite

1) Install the Docker
2) Install node 10

## How to Run the Covid-19 Scraper

1) First Clone this project in the system.
2) Run the following command for running dockerfile.
    docker build -t COVID-19-SCRAPPER .
3) Now Run let's run the our index.js and scrape the data.
     docker run -p 8081:8081 COVID-19-SCRAPPER 