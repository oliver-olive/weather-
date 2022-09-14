
class Forecast{
    constructor(){
        this.key = 'b4kNYNXN8hq8FhyweGubRjxWAdjMHrvQ';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getweather(cityDets.Key);
        return {cityDets, weather};
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];

    }
    async getweather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}

// const key = 'b4kNYNXN8hq8FhyweGubRjxWAdjMHrvQ';
// //get weather information
// const getweather = async (id) => {
    

// };
// //get city information
// const getCity = async (city) => {

    
// }

// // getCity('manchester')
// // .then(data => { return getweather(data.Key)})
// // .then(data =>{
// //     console.log(data);
// // }) 
// // .catch(err => console.log(err));
