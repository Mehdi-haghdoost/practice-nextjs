import connectToDB from '../../../utils/db';
import userModel from '../../../models/user';

import fs from 'fs';
import path from 'path';



const habdler = async (req, res) => {

    connectToDB();

    switch (req.method) {
        case 'GET': {
            const users = await userModel.find();

            

            res.json(users)
            break;
        }

        case 'POST': {
            //Req Body
            const { username, email, password } = req.body


            if (username.length < 3 || !email.trim() || password.length < 8) {
                return res
                    .status(422)
                    .res({ message: "Data is not valid !!" })
            }
            const user = await userModel.create({ username, email, password });

            console.log(user);

            if (user) {
                return res
                    .status(201)
                    .json({ message: "user registered successfully :))" })
            } else {

                return res
                    .status(409)
                    .json({ message: "Unknow Error !!" })
            }

        }
        case 'PUT': {
            res.json({ message: 'user"s infromation edited' })
            break;
        }
        case 'DELETE': {
            res.json({ message: 'user removed successfully : ))' })
            break;
        }
        default: {
            res.json({ message: 'wellcome to next.js' })
        }
    }
}
export default habdler;