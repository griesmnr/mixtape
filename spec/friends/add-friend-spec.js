import request from "supertest";
import server from "../../source/app";

let app;

beforeAll((done) => {
  app = server.listen(process.env.PORT, done);
});

describe("addFriend", () => {

  it("responds with a 200 status", async () => {
    let response = await request(app).post(`/friends`).send({ name: "hello" });
    expect(response.status).toEqual(200);
  });

});

afterAll( (done) => {
  app.close(done);
});
