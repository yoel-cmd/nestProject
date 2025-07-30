import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity('tasks')
export default class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    Location: string

    @Column()
    Start_time: Date

    @Column()
    End_time: Date

    @Column()
    id_soldier: number
}