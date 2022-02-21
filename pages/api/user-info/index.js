// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import json from "../../../database.json";

export default function handler(req, res) {
    res.status(200).json(json.user);
}
