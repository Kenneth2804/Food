/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Milanea a la napolitana'
};

describe('Recipes routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
 
  describe("/recipes", function () {
    it("GET respons with status 200", function () {
      return agent.get("/recipes").expect(function (res) {
        expect(res.status).equal(200);
      });
    }).timeout(10000);
    it("Elements received are Object type", function () {
      return agent.get("/recipes").expect(function (res) {
        expect(typeof res.body[0]).equal("object");
      });
    }).timeout(10000);
  });
})