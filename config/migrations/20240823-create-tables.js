module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(
      `
      CREATE TABLE "Task" (
        "id" text PRIMARY KEY,
        "title" text NOT NULL,
        "status" text NOT NULL
      );
      `,
    );
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`DROP TABLE "Task";`);
  },
};