import users from "../../../data/db";


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
    }

}

export default handler;