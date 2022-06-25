const { doc, setDoc } = require("firebase/firestore");
const { firebaseStore } = require("../config/firebase");

const createDocs = (records) => {
    records.forEach(async (r, i) => {
        if (r.display_name.includes("DISP")) {
            await setDoc(doc(firebaseStore, "products", String(i)), {
                name: r.display_name,
                price: r.list_price,
                stock: r.qty_available,
            });
        }
    });
};

module.exports = {
    createDocs,
};
