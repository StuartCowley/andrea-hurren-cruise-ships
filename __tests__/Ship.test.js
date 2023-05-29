const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        const mockShip = new Ship(jest.fn());

        expect(mockShip).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const ship = new Ship('Dover');

        expect(ship.startingPort).toBe('Dover');
    })
});
