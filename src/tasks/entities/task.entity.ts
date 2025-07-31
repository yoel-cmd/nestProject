import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity('tasks')
export default class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Description: string

   
}