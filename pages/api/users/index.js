import fs from 'fs';
import path from 'path';


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

            //Req Body
            const { username, email, password } = req.body
            users.push({ username, email, password })
            res.json({ message: 'create new user', data: users })
            break;
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