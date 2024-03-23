import fs, { writeFileSync } from 'fs';
import path from 'path';
import { stringify } from 'querystring';


const habdler = (req, res) => {
    switch (req.method) {
        case 'GET': {
            const dataPath = path.join(process.cwd(), "data", "db.json")

            const data = fs.readFileSync(dataPath)

            const parsedData = JSON.parse(data)

            res.json(parsedData.users)
            break;
        }
        case 'POST': {
            const dataPath = path.join(process.cwd(), "data", "db.json")

            const data = fs.readFileSync(dataPath)

            const parsedData = JSON.parse(data)



            //Req Body
            const { username, email, password } = req.body

            parsedData.users.push({
                id: crypto.randomUUID(),
                username,
                email,
                password,
            })

            const err = fs.writeFileSync(dataPath, JSON, stringify(parsedData))

            if (err) {

            } else {
                res
                    .status(201)
                    .json({ message: "user registered successfully :))" })
                break;
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