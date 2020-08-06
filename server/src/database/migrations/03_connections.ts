import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('user')
      .onUpdate('CASCADE') // Caso o id do professor seja alterado, todas as informações sobre esse id devem ser alterados onde quer que apareçam
      .onDelete('CASCADE'); // Deleta todas as aulas do professor, caso a conta dele seja deletada

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
};