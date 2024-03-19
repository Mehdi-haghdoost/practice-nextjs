const habdler = (req, res) => {
    switch (req.method) {
        case 'GET': {
            res.json({ message: 'wellcome to next.js' })
            break;
        }
        case 'POST': {
            res.json({ message: 'create new user' })
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