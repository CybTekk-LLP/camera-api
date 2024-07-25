import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1720783675512 implements MigrationInterface {
    name = 'Migration1720783675512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "images" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "images" SET NOT NULL`);
    }

}
