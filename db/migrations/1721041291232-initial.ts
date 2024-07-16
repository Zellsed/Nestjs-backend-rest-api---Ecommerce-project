import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1721041291232 implements MigrationInterface {
    name = 'Initial1721041291232'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" RENAME COLUMN "coment" TO "comment"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" RENAME COLUMN "comment" TO "coment"`);
    }

}
