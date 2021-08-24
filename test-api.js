const request = require("supertest");
const ApiUrl = "https://jsonplaceholder.typicode.com";


describe("GET /posts", () => {
  it("should return 200 and an array of posts", async () => {
    return request(ApiUrl)
      .get("/posts")
      .expect(200)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .then((response) => {
        const { body } = response;
        expect(body).toEqual(expect.any(Array));
        expect(body.length).toEqual(expect.any(Number));
      });
  });
});
