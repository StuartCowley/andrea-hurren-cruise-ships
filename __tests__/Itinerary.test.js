const Itinerary = require ("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe('Port', () => {
    it('can be instantiated', () => {
        const port = new Port();

        expect(port).toBeInstanceOf(Object);
    });
});

describe('Itinerary', () => {
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
    })

    it('can be instantiated', () => {
        expect(itinerary).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover,calais]);
    });
});
