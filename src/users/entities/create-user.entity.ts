import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // first_name: string;

	// @Column()
	// last_name: string;

	@Column()
	email: string;

    @Column()
    password: string;
    
    @Column()
	googleId: string;
    
    @Column()
	facebookId: string;
    
    @Column()
	secret: string;
    

	@Column({ default: new Date().toLocaleDateString(undefined, {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	})})
	created_at: String;
}