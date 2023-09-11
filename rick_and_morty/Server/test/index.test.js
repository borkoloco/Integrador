const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

const char = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};
const char2 = {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "unknown",
    url: "",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
};

//agent es una instancia de app que se aplica sobre supertest

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const resp = await agent.get("/rickandmorty/character/1");
      expect(resp.body).toHaveProperty("id");
      expect(resp.body).toHaveProperty("name");
      expect(resp.body).toHaveProperty("species");
      expect(resp.body).toHaveProperty("gender");
      expect(resp.body).toHaveProperty("status");
      expect(resp.body).toHaveProperty("origin");
      expect(resp.body).toHaveProperty("image");
    });
    //  con status 500 no funciona!!!!
    it("Si hay un error responde con status: 500/404", async () => {
      const response = await agent.get("/rickandmorty/character/1000");
      expect(response.statusCode).toBe(404);
    });
  });

  describe("GET /rickandmorty/login", () => {
    let email = "mondiola@gmail.com";
    let password = "mondiola123";
    it("Debe retornar un objeto en TRUE si la informacion es correcta", async () => {
      const res = await agent.get(
        "/rickandmorty/login?email=" + email + "&password=" + password
      );
      expect(res.body).toEqual({
        access: true,
      });
    });
    it("La propiedad debe ser FALSE si la informacion es incorrecta", async () => {
      const res = await agent.get(
        "/rickandmorty/login?email=" + email + "&password="
      );
      expect(res.body).toEqual({
        access: false,
      });
    });
  });

  //chequear matcher toContainEqual
  //para este test habria que copiar dos personajes para verificar(ver arriba)
  describe("POST /rickandmorty/fav", () => {
    it("La respuesta debe retornar un arreglo", async () => {
      let data = await agent.post("/rickandmorty/fav").send(char);
      expect(Array.isArray(data.body)).toBe(true);
      expect(data.body.length).toBe(1);
      expect(data.body).toContainEqual(char);
      data = await agent.post("/rickandmorty/fav").send(char2);
      expect(data.body.length).toBe(2);
      expect(data.body).toContainEqual(char);
    });
  });

  //ya tengo un array con dos personajes con id, puedo usar ese array para testear
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si no existe el id debe retornar el mismo arreglo", async () => {
      let data = await agent.delete("/rickandmorty/fav/5");
      [char, char2].forEach((ele) => {
        expect(data.body).toContainEqual(ele);
      });
      data = await agent.delete("/rickandmorty/fav/1");
      expect(data.body).toContainEqual(char2);
      expect(data.body).not.toContainEqual(char);
    });
  });
});
