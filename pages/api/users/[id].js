import users from "../../../data/db";


const handler = (req, res) => {

    const { id } = req.query

    if (req.method === "GET") {
        const user = users.find(user => user.id === +id)

        if (user) {
            return res.json(user)
        } else {
            return res.json({ message: "user not found !!" })
        }
    }

}

export default handler;