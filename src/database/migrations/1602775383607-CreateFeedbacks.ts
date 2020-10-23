import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFeedbacks1602771921391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'feedbacks',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'points_improve',
            type: 'varchar',
          },
          {
            name: 'points_keep',
            type: 'varchar',
          },
          {
            name: 'suggestion',
            type: 'varchar',
          },
          {
            name: 'final_feedback',
            type: 'varchar',
          },
          {
            name: 'feedback_sender_id',
            type: 'integer',
          },
          {
            name: 'feedback_receiver_id',
            type: 'integer',
          },
          {
            name: 'viewed',
            type: 'boolean',
          },
          {
            name: 'edited',
            type: 'boolean',
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
        foreignKeys: [
          {
            name: 'feedback_sender_fk',
            columnNames: ['feedback_sender_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'feedback_receiver_fk',
            columnNames: ['feedback_receiver_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('feedbacks');
  }
}
