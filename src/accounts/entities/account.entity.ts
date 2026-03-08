import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AccountType } from './account-type.entity';

@Entity({ name: 'account' })
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2,
  })
  balance: number;

  @Column({
    name: 'account_number',
    type: 'integer',
  })
  accountNumber?: string;

  @Column({
    name: 'tarjet_number',
    type: 'integer',
  })
  tarjetNumber?: string;

  @Column({
    default: true,
  })
  status: boolean;

  @CreateDateColumn({
    name: 'create_at',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
  })
  updateAt: Date;

  @DeleteDateColumn({
    name: 'delete_at',
  })
  deleteAt: Date;

  @ManyToOne(() => AccountType, (accountType) => accountType.accounts)
  @JoinColumn({
    name: 'id_account_type',
  })
  accountType: number;
}
