import { Good } from  './../db/models'

export async function createGood(req, res, next) {
    try {
        const createdGood = await Good.create(req.body);
        if (createdGood){
            return res.status(201).send(createdGood);
        }
        next ( new Error() );
    } catch (e) {
        next(e);
    }
}