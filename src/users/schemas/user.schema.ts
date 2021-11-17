import { EntitySchema } from 'typeorm';
import { User } from '../entities/create-user.entity';

export const CustomerSchema = new EntitySchema<User>({
	name: 'customer',
	columns: {
		email: {type: String, length: 50},
        password: {type: String, length: 50},
        googleId: {type: String, length: 200},
        facebookId: {type: String, length: 200},
        secret: {type: String, length: 100},
		created_at: {type: String}	
	}	
})