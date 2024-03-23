
const users = [
    {
        id: 1,
        username: "mehdi",
        email: "mehdi.leo2014@gmail.com",
        password: "mehdi1010",
    },
    {
        id: 2,
        username: "omid",
        email: "omid.leo2014@gmail.com",
        password: "omid1010",
    }, {
        id: 3,
        username: "hamed",
        email: "hamed.leo2014@gmail.com",
        password: "hamed1010",
    }, {
        id: 4,
        username: "ali",
        email: "ali.leo2014@gmail.com",
        password: "ali1010",
    }, {
        id: 5,
        username: "reza",
        email: "reza.leo2014@gmail.com",
        password: "reza1010",
    },
];

const habdler = (req, res) => {
    switch (req.method) {
        case 'GET': {
            res.json(users)
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