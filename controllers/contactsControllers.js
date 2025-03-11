import * as contactService from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactService.listContacts();
        res.status(200).json(contacts);
    }
    catch (err) {
        next(err);
    }
};

export const getOneContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await contactService.getContactById(id);
        if (!contact) {
            return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json(contact);
    } catch (err) {
        next(err);
    }
};

export const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await contactService.removeContact(id);
        if (!contact) {
            return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json(contact);
    } catch (err) {
        next(err);
    }
};

export const createContact = async (req, res) => {
    try {
        const newContact = await contactService.addContact(req.body);
        res.status(201).json(newContact);
    } catch (err) {
        next(err);
    }
};

export const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await contactService.getContactById(id);
        if (!contact) {
            return res.status(404).json({ message: "Not found" });
        }
        const updatedContact = await contactService.updateContact(id, req.body);
        res.status(200).json(updatedContact);
    } catch (err) {
        next(err);
    }
};
