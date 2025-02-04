import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1720756976248 implements MigrationInterface {
    name = 'Initial1720756976248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "createdAt"`);
    }

}
