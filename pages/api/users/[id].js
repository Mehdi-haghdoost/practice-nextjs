import users from "../../../data/db";
import fs from 'fs';
import path from 'path';

const handler = (req, res) => {

    const { id } = req.query

    if (req.method === "GET") {
        const user = users.find(user => user.id === +id)

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


        const dataPath = path.join(process.cwd(), "data", "db.json")

        const data = fs.readFileSync(dataPath);

        const parsedData = JSON.parse(data);

        const isUser = parsedData.users.some(
            (user) => String(user.id) === String(id)
        );

        if (isUser) {
            const newUser = parsedData.users.filter(
                (user) => String(user.id) !== String(id)
            )

            const err = fs.writeFileSync(dataPath, JSON.stringify({ ...parsedData, users: newUser }))

            if (err) {
                //codes
            } else {
                return res
                    .status(200)
                    .json({ message: "user removed successfully :))" })
            }
        } else {
            return res
                .status(404)
                .json({ message: "user not found :))" })
        }
    } else if (req.method === 'PUT') {
        const { username, email, password } = req.body;

        const dataPath = path.join(process.cwd(), "data", "db.json");

        const data = fs.readFileSync(dataPath);

        const parsedData = JSON.parse(data)

        const isUser = parsedData.users.some(
            (user) => String(user.id) === String(id)
        );

        if (isUser) {
            parsedData.users.some((user) => {
                if (String(user.id) === String(id)) {
                    user.username = username;
                    user.email = email;
                    user.password = password;

                    return true;
                }

            })

            const err = fs.writeFileSync(dataPath, JSON.stringify({ ...parsedData }))

            if (err) {
                //codes
            } else {
                return res
                    .json({ message: "user updated successfully :))" })
            }

        } else {
            return res
                .status(404)
                .json({ message: "user not found !!" })
        }
    }

}

export default handler;