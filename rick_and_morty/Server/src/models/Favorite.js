const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // status: {
      //   type: DataTypes.ENUM("Alive", "Dead", "unknown"),
      //   allowNull: false,
      // },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
      },
      // origin: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

// estos models y la carpeta no estaban antes de DB
// en su lugar habia una carpeta utils que contenia data.js y users.js que eran asi
// module.exports = [
//   {
//      id: 1,
//      name: 'Rick Sanchez',
//      status: 'Alive',
//      species: 'Human',
//      gender: 'Male',
//      origin: {
//         name: 'Earth (C-137)',
//         url: 'https://rickandmortyapi.com/api/location/1',
//      },
//      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//   },
//   {
//      id: 2,
//      name: 'Morty Smith',
//      status: 'Alive',
//      species: 'Human',
//      gender: 'Male',
//      origin: {
//         name: 'unknown',
//         url: '',
//      },
//      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//   },
//   {
//      id: 3,
//      name: 'Summer Smith',
//      status: 'Alive',
//      species: 'Human',
//      gender: 'Female',
//      origin: {
//         name: 'Earth (Replacement Dimension)',
//         url: 'https://rickandmortyapi.com/api/location/20',
//      },
//      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//   },
//   {
//      id: 4,
//      name: 'Beth Smith',
//      status: 'Alive',
//      species: 'Human',
//      gender: 'Female',
//      origin: {
//         name: 'Earth (Replacement Dimension)',
//         url: 'https://rickandmortyapi.com/api/location/20',
//      },
//      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//   },
//   {
//      id: 5,
//      name: 'Jerry Smith',
//      status: 'Alive',
//      species: 'Human',
//      gender: 'Male',
//      origin: {
//         name: 'Earth (Replacement Dimension)',
//         url: 'https://rickandmortyapi.com/api/location/20',
//      },
//      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//   },
// ];

// y el otro
// module.exports = [{ email: "mondiola@gmail.com", password: "mondiola123" }];
