export default class Storage {
    static register(user) {
        const users = JSON.parse(localStorage.getItem('eco_users') || '[]');
        if (users.find(u => u.studentNumber === user.studentNumber)) throw new Error("ID already exists!");
        users.push(user);
        localStorage.setItem('eco_users', JSON.stringify(users));
    }
    static login(id, pass) {
        const users = JSON.parse(localStorage.getItem('eco_users') || '[]');
        const user = users.find(u => u.studentNumber === id && u.password === pass);
        if (!user) throw new Error("Invalid login");
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    static getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    static getAllUsers() {
        return JSON.parse(localStorage.getItem('eco_users') || '[]');
    }
    static updateCurrentUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        const users = JSON.parse(localStorage.getItem('eco_users') || '[]');
        const idx = users.findIndex(u => u.studentNumber === user.studentNumber);
        if (idx !== -1) { users[idx] = user; localStorage.setItem('eco_users', JSON.stringify(users)); }
    }
    static logout() { localStorage.removeItem('currentUser'); }
}