import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id!: number
    /*we use ! because it tells typescript this property will definitely 
    have a value before it*/

    @Column()
    title!: string

    @Column({default: false})
    iscompleted!: boolean
}
//above code is equal to the mongodb module