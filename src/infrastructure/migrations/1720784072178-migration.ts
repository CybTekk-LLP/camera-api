import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1720784072178 implements MigrationInterface {
    name = 'Migration1720784072178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "images" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "images" text array`);
    }

}
