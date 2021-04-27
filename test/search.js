const expect = require('chai').expect;

const SearchDomain = require('../domain/search.js');

describe('SearchDomain', () => {
    let domain;

    beforeEach(() => {
        domain = new SearchDomain();
    });


    it('should return correct search value', () => {
        const searchValue = 'batman';

        domain.searchValue = searchValue;

        expect(domain.searchValue).to.equal(searchValue);
    });

    describe('Get SearchValue()', () => {
        const domain = new SearchDomain();
        domain.SearchValue = 'batman';
        expect(domain.SearchValue).to.equal('batman');
    })

    describe('toString()', () => {
        it('should produce the correct output', () => {
            const config = new SearchDomain();

            config.searchValue = 'batman';
            const output = config.toString();

            const expected = {
                SearchValue: 'batman',
            };

            const expectOutput = JSON.stringify(expected, null, 2);

            expect(output).to.equal(expectOutput);
        });
    });
})