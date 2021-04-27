class SearchDomain {

    get SearchValue() {
        return this.searchValue;
    }
    set SearchValue(searchValue) {
        this.searchValue = searchValue;
    }

    toString() {
        const output = {
            SearchValue: this.searchValue,
        };

        return JSON.stringify(output, null, 2);
    }
}

module.exports = SearchDomain;