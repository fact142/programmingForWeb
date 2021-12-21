const request = require("supertest");
const app = require("../index");

describe("AuthController test", () => {
  test("it should return error ", async () => {
    const user = {
      name:"David",
      lastname: "Lynch",
      email: "1111@gmail.com",
      password: "1234"
    }
    const response = await request(app).post("/auth/registration").send(user);
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toStrictEqual("User with same email is already exist ")
  });
  test("it should be successful", async () => {
    const user = {
      name:"David",
      lastname: "Lynch",
      email: "1111111111@gmail.com",
      password: "1234"}
    const response = await request(app).post("/auth/registration").send(user);
    expect(response.statusCode).toBe(200);
  });
  test("it should return error", async () => {
    const user = {
      email:"1",
      password: "1234"}
    const response = await request(app).post("/auth/login").send(user);
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toStrictEqual("User with your email doesn't exist")
  });

  test("it should return error", async () => {
    const user = {
      email:"gh22@gmail.com",
      password: "1234"}
    const response = await request(app).post("/auth/login").send(user);
    expect(response.statusCode).toBe(200);
  });
});
