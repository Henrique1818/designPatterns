class Notificador {
    enviar() {
        console.log('-> Notificando usuários');
    }
}

interface INotificador {
    enviar()
}

class Post {
    constructor(public titulo: string, private notificador: INotificador) {
        console.log('-> Novo Post: ' + titulo);
    }

    public() {
        console.log('-> Publicando Post');
        this.notificador.enviar();
    }
} 

let newPost = new Post('Aprendendo Injeção de Dep...', new Notificador);
newPost.public();