import express from "express"
import { ContactMessage } from "../Controller/UserController.js"

const UserContact = express.Router()

UserContact.post("/detail",ContactMessage)

export default UserContact