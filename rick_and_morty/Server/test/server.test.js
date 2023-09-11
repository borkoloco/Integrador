const request = require("supertest");
const server = require("../server");

const arr = [
  { id: 1, name: "Miguel" },
  { id: 2, name: "Bork" },
  { id: 3, name: "Franco" },
];

describe("el servidor que hicimos recien", () => {
  it("debe responder con status 200 al hacer request get a /", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toEqual(200);
  });
  it("debe responder con status 404 al hacer request get a '/sarasa'", async () => {
    const response = await request(server).get("/sarasa");
    expect(response.statusCode).toEqual(404);
  });
  it("debe enviar info de los alumnos al hacer GET a '/students'", async () => {
    const response = await request(server).get("/students");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(arr);
  });
});

// it('should reply the GET method with status code 300', async () => {
//     const res = await request(app).get('/');
//     expect(res.statusCode).toBe(300);
//   });

//   it('should reply the GET method with a list of names', async () => {
//     const res = await request(app).get('/');
//     expect(res.body).toEqual(['Franco', 'Toni', 'Martu']);
//   });

//   it('should reply the POST method /bodyData with status code 400 if data not send', async () => {
//     const res = await request(app).post('/bodyData');
//     expect(res.statusCode).toBe(400);
//   });

//   it('should reply the POST method /bodyData with status code 200 if data is send', async () => {
//     const res = await request(app).post('/bodyData').send({arg1: 3, arg2: 7});
//     expect(res.statusCode).toBe(200);
//   });

//   it('should reply the GET method /queryData with status code 400 if query not send', async () => {
//     const res = await request(app).get('/queryDataSend');
//     expect(res.statusCode).toBe(400);
//   });

//   it('should reply the GET method /queryData with the query if provided (res.send)', async () => {
//     const res = await request(app).get('/queryDataSend?q=henry');
//     expect(res.statusCode).toBe(200);
//     expect(res.text).toBe('henry');
//   });

//   it('should reply the GET method /queryData with the query if provided (res.json)', async () => {
//     const res = await request(app).get('/queryDataJson?q=henry');
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toBe('henry');
//   });

//   it('should reply the GET method /paramsData with status code 400 if params is not a number', async () => {
//     const res = await request(app).get('/paramsData/Franco');
//     expect(res.statusCode).toBe(400);
//   });

//   it('should reply the GET method /paramsData with the number passed and msg with OK text', async () => {
//     const res = await request(app).get('/paramsData/7');
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({id: 7, msg: 'OK'});
//   });

//   it('should reply the GET method /image with status code 200', async() => {
//     const res = await request(app).get('/image');
//     expect(res.statusCode).toBe(200);
//   });

//   it('should reply the GET method /image with content type image', async() => {
//     const res = await request(app).get('/image').expect('Content-Type', 'image/jpeg');
//   });
