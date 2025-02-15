import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

/*req(request): Contiene información sobre la solicitud del cliente
res(response): Contiene información sobre la respuesta del servidor */
const server = http.createServer((req, res) => {
    /*statusCode: Código de estado de la respuesta. Si la solicitud es correcta, el código 200 es el correcto. Si la solicitud es incorrecta, el código 404 o 500 es el correcto. Entre otros */
    res.statusCode = 200;
    /*setHeader(name, value): Establece el nombre y el valor de la cabecera, o bien, define el tipo de contenido del cuerpo de la respuesta.*/
    res.setHeader('Content-Type', 'text/plain');
    /*res.end('Hola Mundo!'): Envia y Finaliza la respuesta.*/
    res.end('Hola Mundo!\n');
});

server.listen(port, hostname, () => {
    console.log('Servidor corriendo');
});