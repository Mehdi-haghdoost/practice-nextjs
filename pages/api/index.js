import connectToDB from "../../utils/db";

const handler = (req, res) => {
   connectToDB();
   
    return res.json({ message: 'welcome to Api Route' })
}

export default handler;