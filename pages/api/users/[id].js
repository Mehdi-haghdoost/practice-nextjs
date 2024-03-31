import userModel from '../../../models/user';

import fs from 'fs';
import path from 'path';
import connectToDB from '../../../utils/db';

const handler = async (req, res) => {
    connectToDB();

    const { id } = req.query

    if (req.method === "GET") {

        const user = await userModel.find({ _id: id })

        if (user) {
            return res
                .status(201)
                .json(user)
        } else {
            return res
                .status(404)
                .json({ message: "user not found !!" })
        }
    } else if (req.method === 'DELETE') {
        const deletedUser = await userModel.findOneAndDelete({ _id: id })
        if (deletedUser) {
            return res
                .status(200)
                .json({ message: "user removed successfully :))" })
        }

    } else if (req.method === 'PUT') {
        const { username, email, password } = req.body;

        const updatedUser = await userModel.findOneAndUpdate(
            { _id: id },
            {
                username,
                email,
                password,
            },
        );

        if (updatedUser) {
            return res
                .json({ message: "user updated successfully !!" })
        }
    }

}

export default handler;