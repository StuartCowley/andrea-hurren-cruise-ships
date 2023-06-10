const Port = require("../src/Port");

describe('Port', () => {
    describe('have names and can add and remove ships', () => {
        let port;
        let ship;
        let royalCaribbean;
        let queenMary;

        beforeEach(() => {
             port = new Port('Rotterdam');
             let ship = jest.fn();
             royalCaribbean = jest.fn();
             queenMary = jest.fn();
        });

        it('can be instantiated', () => {
            expect(port).toBeInstanceOf(Object);
        });

        it('has a name', () => {
            expect(port.name).toBe('Rotterdam');
        });

        it('can add a ship', () => {
            port.addShip(ship);

            expect(port.ships).toContain(ship);
        });

        it('can remove a ship', () => {
            port.addShip(royalCaribbean);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toContain(royalCaribbean);
        });
    })
});





