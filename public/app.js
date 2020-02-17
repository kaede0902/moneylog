    document.addEventListener('DOMContentLoaded', event => {
        let app = firebase.app();
        let db = firebase.firestore();

        db.collection("items").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                let data = doc.data();
                console.log(doc.id, " => ", doc.data());
                document.write(data.name + `<br>`);
                document.write(data.price + `<br>`)
            });
        let htmldata =  `
            <form name = 'form1' id = 'id_form1'>
             
                <input name="textBox1" id='id_textBox1' type="text" 
                    placeholder="item name"
                />
                <input name="price" id = 'price' type="number" 
                    placeholder="price"
                />
                <input name="purpse" id = 'purpose' type="text" 
                    placeholder="purpose"
                />
             
                <input type="button" value="submit" 
                    onclick="OnButtonClick();"
                />
             
            </form>
        `;
        document.write(htmldata)

        });
      });


function OnButtonClick() {
    let name = document.form1.id_form1.id_textBox1.value;
    let price = document.form1.id_form1.price.value;
    let purpse = document.form1.id_form1.purpse.value;
    console.log(name,price);
    let app = firebase.app();
    let db = firebase.firestore();
    db.collection("items").add({
        name: name,
        price: price,
        purpose: purpose,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
