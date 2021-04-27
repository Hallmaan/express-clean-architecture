const SearchDomain = require('../domain/search');
var request = require("request");

class SearchUseCase {

    async searchApiOmdb(params) {
        if (!params.searchvalue) {
            return {
                status: 400,
                message: "Search value parameter not found",
                data: null
            }
        }

        const newSearch = new SearchDomain();

        newSearch.SearchValue = params.searchvalue;

        let queryString = "http://omdbapi.com/?s=" + newSearch.SearchValue + "&apikey=faf7e5bb&s";

        return await new Promise(function (resolve, reject) {
            request(queryString, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    let parseData = JSON.parse(body);
                    resolve({
                        status: 200,
                        message: "Fetch Api Success",
                        data: parseData
                    })
                }
                reject(error)
            });
        })
    }

    static toString() {
        return 'Search Interactor';
    }
}

module.exports = SearchUseCase;