import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAddresses1612989613402
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'addresses',

        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'zip_code',
            type: 'varchar',
          },
          {
            name: 'street',
            type: 'varchar',
          },

          {
            name: 'neighborhood',
            type: 'varchar',
          },
          {
            name: 'number',
            type: 'integer',
          },
          {
            name: 'created_at',

            type: 'timestamp',

            default: 'now()',
          },

          {
            name: 'updated_at',

            type: 'timestamp',

            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }
}
