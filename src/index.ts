import { server} from './server/Server';

server.listen(process.env.PORT, () => {
    
    console.log(`App rodando NA PORTA ${process.env.PORT}!`);

});
