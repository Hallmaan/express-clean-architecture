
class Search {
    constructor(options) {
        this.searchInteractor = options.SearchInteractor;
    }

    async searchApi(params){
        return await this.searchInteractor.searchApiOmdb(params)
    }

    static toString() {
        return 'Web Server Interfaces';
    }
}

module.exports = Search;