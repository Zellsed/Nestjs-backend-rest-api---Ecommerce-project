import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1721121837785 implements MigrationInterface {
    name = 'Initial1721121837785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "shippeAt"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "shippedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "shippedAt"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "shippeAt" TIMESTAMP`);
    }

}
