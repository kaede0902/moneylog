document.addEventListener('DOMContentLoaded', event => {
        let app = firebase.app();
        let db = firebase.firestore();

        db.collection("items").get().
        then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let data = doc.data();
                console.log('id: ', doc.id, ": ", doc.data());
            });
        });
        // here jq click, does not work
      });

function OnButtonClick() {
    let app = firebase.app();
    let db = firebase.firestore();
    db.collection("items").add({
        name: 'added by',
        price: 0314,
        purpose: 'browser',
    })
}

$("button").click(function(){
    let name = $('#name').val();
    let purpose = $('#purpose').val();
    let price = $('#price').val();
    alert(`${name}, ${purpose}, ${price}`);
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
}); 
