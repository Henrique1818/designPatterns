var Notificador = /** @class */ (function () {
    function Notificador() {
    }
    Notificador.prototype.enviar = function () {
        console.log('-> Notificando usuários');
    };
    return Notificador;
}());
var Post = /** @class */ (function () {
    function Post(titulo, notificador) {
        this.titulo = titulo;
        this.notificador = notificador;
        console.log('-> Novo Post: ' + titulo);
    }
    Post.prototype.public = function () {
        console.log('-> Publicando Post');
        this.notificador.enviar();
    };
    return Post;
}());
var newPost = new Post('Aprendendo Injeção de Dep...', new Notificador);
newPost.public();
