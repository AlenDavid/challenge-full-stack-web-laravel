interface INotLogged {
	isLogged: false
}

interface ILogged {
	isLogged: true
	user: User
}

type IAuth = ILogged | INotLogged
