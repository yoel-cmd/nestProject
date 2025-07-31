import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, JoinColumn, ManyToOne } from 'typeorm'
import Task from 'src/tasks/entities/task.entity'
import User from 'src/users/user.entity'

@Entity('shift')
export default class Shift extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number


    @Column()
    start_time: string

    @Column()
    end_time: string


    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User


    @ManyToOne(() => Task)
    @JoinColumn({ name: 'taskId' })
    task: Task

}
