"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const categories = await queryInterface.sequelize.query(
        `SELECT position FROM categories WHERE position IN (1, 2, 3, 4, 5);`
      );

      if (categories[0].length > 0) {
        console.log("Categorias já existentes, abortando inserção.");
        return;
      }

      await queryInterface.bulkInsert(
        "categories",
        [
          {
            name: "Tecnologias Back-end",
            position: 1,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: "Tecnologias Front-end",
            position: 2,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: "Ferramentas de Desenvolvimento",
            position: 3,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: "Soft-skills",
            position: 4,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: "Carreira",
            position: 5,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );
    } catch (error) {
      console.error("Erro ao executar o seeder das categorias:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete("categories", null, {});
    } catch (error) {
      console.error("Erro ao reverter o seeder das categorias:", error);
    }
  },
};
