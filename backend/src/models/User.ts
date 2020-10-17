import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('orphanages')

export default class User{
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column()
    user: string
    @Column()
    email: string
    @Column()
    password: string

}