import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();


    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') // Caso o id do professor seja alterado, todas as informações sobre esse id devem ser alterados onde quer que apareçam
      .onDelete('CASCADE'); // Deleta todas as aulas do professor, caso a conta dele seja deletada
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
};