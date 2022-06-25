const { getDocs, collection } = require("firebase/firestore");
const { firebaseStore } = require("../config/firebase");
const { odoo } = require("../config/odoo");
const { createDocs } = require("../helpers/createDocs");
const { dropCollections } = require("../helpers/dropCollections");

const homePage = (req, res) => {
    res.render("index");
};

const syncData = async (req, res) => {
    try {
        await odoo.connect();
        const records = await odoo.searchRead(`product.template`);
        await dropCollections();
        createDocs(records);
        return res.status(200).json({
            msg: "Updated data",
        });
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: error,
        });
    }
};

const countData = async(req, res) => {
    try {
        const docs = await getDocs(collection(firebaseStore, "products"));
        return res.json({
            count: docs.size
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: error
        })
    }
}

module.exports = {
    homePage,
    syncData,
    countData
};
