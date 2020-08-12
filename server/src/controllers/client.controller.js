import { Client, Good } from  './../db/models'

export async function createClient(req, res, next) {
    try{
        const createdClient = await Client.create(req.body);
        if (createdClient){
            const clientData = createdClient.get();
            delete clientData.password;
            return res.status(201).send(clientData);
        }
        next ( new Error() );
    } catch (e) {
        next(e);
    }
}

export async function getAllClients(req, res, next) {
    try {
        const clients = await Client.findAll();
        if (clients) {
            return res.status(201).send(clients);
        }
        next(new Error())
    } catch (e) {
        next(e);
    }
}

export async function getClientById(req, res, next) {
    try {
        const client = await Client.findByPk(req.params.clientId);
        if (client) {
            return res.status(201).send(client);
        }
        next(new Error())
    } catch (e) {
        next(e);
    }
}

export async function deleteClientById(req, res, next) {
    try {
        const client = await Client.destroy({
            where: {
                id: req.params.clientId
            }
        });
        if (client) {
            return res.status(201).send(`Client with id# ${req.params.clientId} deleted`);
        }
        next(new Error())
    } catch (e) {
        next(e);
    }
}

export async function updateClientById(req, res, next) {
    try {
        const [updRowsCount, updRows] = await Client.update(req.body, {
            where: {
                id: req.params.clientId
            },
            returning: true,
        });
        if (updRowsCount) {
            return res.send(updRows[0].get());
        }
        //next(new Error())

    } catch (e) {
        next(e)
    }
}

export async function getClientGoods(req, res, next){
    try {
        const client = await Client.findByPk(req.params.clientId)

        const goods = await Good.findAll({
            where: {
                clientId: client.id
            }
        });
        //console.log(goods)

        if (goods) {
            return res.status(200).send(goods)
        }
        next(new Error())
       /* client.goods = goods.map((item,iter)=>{
            return item['dataValues'];
        });
        return client;*/
    }
    catch(e){throw e;}
}