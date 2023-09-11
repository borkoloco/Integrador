const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const res = await agent.get("/rickandmorty/character/1");
      expect(res).toHaveProperty("id");
      expect(res).toHaveProperty("name");
      expect(res).toHaveProperty("species");
      expect(res).toHaveProperty("gender");
      expect(res).toHaveProperty("status");
      expect(res).toHaveProperty("origin");
      expect(res).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      const res = await request(app).get("/:id");
      expect(res.statusCode).toBe(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Debe retornar un objeto si la informacion es correcta", async () => {
      const res = await request(app).get(
        "/rickandmorty/login?password=mondiola123"
      );
      expect(res.body).toBe({
        access: true,
      });
    });
    it("La propiedad debe ser false si la informacion es incorrecta", async () => {
      const res = await request(app).get(
        "/rickandmorty/login?password!=mondiola123"
      );
      expect(res.body).toBe({
        access: false,
      });
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("La respuesta debe retornar un arreglo", async () => {
      const res = await request(app).post("/rickandmorty/fav");
      expect(res.body).toBe();
    });
    it("Otro envio debe incluir el objeto previo en el arrego", async () => {
      const res = await request(app).post("/rickandmorty/fav");
      expect(res.body).toBe();
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si no existe el id debe retornar el mismo arreglo", async () => {
      const res = await request(app).delete("/rickandmorty/fav/:id");
      expect(res.body).toBe();
    });
    it("Si el id es valido el personaje debe ser eliminado correctamente", async () => {
      const res = await request(app).delete("/rickandmorty/fav/:id");
      expect(res.body).toBe();
    });
  });
});
