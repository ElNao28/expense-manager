import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAccountAndTypeAccountTables1773006516224 implements MigrationInterface {
    name = 'AddAccountAndTypeAccountTables1773006516224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account_type" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "status" boolean NOT NULL DEFAULT true, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_215ed371eba21a3ec30c2cfa1de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "balance" numeric(12,2) NOT NULL, "account_number" integer NOT NULL, "tarjet_number" integer NOT NULL, "status" boolean NOT NULL DEFAULT true, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, "id_account_type" integer, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_7461b5f6501d561926cb0e9f684" FOREIGN KEY ("id_account_type") REFERENCES "account_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_7461b5f6501d561926cb0e9f684"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "account_type"`);
    }

}
