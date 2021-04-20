// this don't have user field
interface INotLogged {
	isLogged: false
}

// this have user field
interface ILogged {
	isLogged: true
	user: User
}

// when isLogged = true, it'll have user field
// otherwise, it's not going to.
type IAuth = ILogged | INotLogged
