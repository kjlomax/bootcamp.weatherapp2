import fs from 'fs';
// TODO: Define a City class with name and id properties
class City{
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
   private async read() {
    fs.readFile('searchHistory.json', (err, data) => {
      if (err) {
        console.error(err);
      }
    })
    
    console.log('File read successfully');

   }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
   private async write(cities: City[]) {
    fs.writeFile('searchHistory.json', JSON.stringify(cities), (err) => {
      if (err) {
        console.error(err);
      }
      else {
        const updatedCities: City[] = cities;
        console.log('File written successfully');
    }
   })
   }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
   async getCities() {
    let cityData = await this.read();
    let cityHistory: City[] = JSON.parse(cityData);

   }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
  }

export default new HistoryService();
