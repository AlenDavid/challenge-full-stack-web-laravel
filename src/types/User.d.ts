// the tsconfig could read this enum, but the Vue could not.
// this deserves a fix.
enum UserType {
	STUDENT = 0,
	MANAGER = 1,
	ADMIN = 2,
}

// our default user
interface IUser {
	snowflake: number
	name: string
	email: string
	type: UserType.STUDENT | UserType.ADMIN | UserType.MANAGER
	flags: number
}

// if user is UserType.STUDENT
// it also has RA and CPF
// this allow us to do runtime typing validation
// in typescript
interface IStudent extends IUser {
	RA: string
	CPF: string
	type: UserType.STUDENT
}

// our users
type User = IStudent | IUser
