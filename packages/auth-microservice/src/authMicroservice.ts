interface User {
    id: number;
    username: string;
    password: string;
  }
  
  const users: User[] = [];
  
  function signUp(username: string, password: string): void {
    const id = users.length + 1;
    users.push({ id, username, password });
  }
  
  function login(username: string, password: string): User | undefined {
    return users.find(user => user.username === username && user.password === password);
  }
  
  export { signUp, login };