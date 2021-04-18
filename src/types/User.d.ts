enum UserEnum {
	STUDENT = 0,
	MANAGER = 1,
	ADMIN = 2,
}

interface IUser {
	snowflake: number
	name: string
	email: string
	type: UserEnum.STUDENT | UserEnum.ADMIN | UserEnum.MANAGER
	flags: number
}

interface IStudent extends IUser {
	RA: string
	CPF: string
}

type User = IStudent | IUser
