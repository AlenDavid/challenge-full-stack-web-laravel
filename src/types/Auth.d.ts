interface INotLogged {
  isLogged: false;
  user: Record<string, never>;
}

interface ILogged {
  isLogged: true;
  user: User;
}

type IAuth = ILogged | INotLogged;
