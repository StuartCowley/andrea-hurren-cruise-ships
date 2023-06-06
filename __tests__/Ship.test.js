/*global describe it expect */
const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let ship;
        let rotterdam;
        let hull;
        let itinerary;

        beforeEach(() => {
            rotterdam = {
                addShip : jest.fn(),
                removeShip : jest.fn(),
                name : 'Rotterdam' ,
                ships : []
            };

            hull = {
                addShip : jest.fn(),
                removeShip : jest.fn(),
                name : 'Hull' ,
                ships : []
            };

            itinerary = {
                ports: [rotterdam, hull]
            };

            ship = new Ship(itinerary);

        });

        it('can be instantiated' , () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it('has a starting port', () => {
            expect(ship.currentPort).toBe(rotterdam);

        });

        it('can set sail', () => {
            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
            expect(rotterdam.removeShip).toHaveBeenCalledWith(ship);

        });

        it('gets added to port on instantiation' , () => {
            expect(rotterdam.addShip).toHaveBeenCalledWith(ship);

        });

        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();

            expect(ship.currentPort).toBe(hull);
            expect(hull.addShip).toHaveBeenCalledWith(ship);
        });

        it('can\'t sail futher than its itinerary', () => {
            ship.setSail();
            ship.dock();

            expect(() => ship.setSail()).toThrowError('End of itinerary reached');

        });
    });
});
