import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class Users extends Model<Users> {
  @Column
  name: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;
}
