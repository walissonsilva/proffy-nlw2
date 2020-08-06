import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();
    
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();


    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE') // Caso o id do professor seja alterado, todas as informações sobre esse id devem ser alterados onde quer que apareçam
      .onDelete('CASCADE'); // Deleta todas as aulas do professor, caso a conta dele seja deletada
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
};