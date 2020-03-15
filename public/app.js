document.addEventListener('DOMContentLoaded', event => {
        let app = firebase.app();
        let db = firebase.firestore();

        let num = 0;
        db.collection("items").get().
        then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let data = doc.data();
                console.log('id: ', doc.id, 
                    ": ", doc.data());
                $('#usercol').append(
                    `
                        <tr>
                        <th scope="row">${num++}</th>
                        <td> ${data.name} </td>
                        <td> ${data.price} </td>
                        <td> ${data.purpose} </td>
                        </tr>
                    `
                );

            });
        });
        // here jq click, does not work
    $('.submit').on('click', function(e){
        e.preventDefault();
        console.log('loaded');
        let app = firebase.app();
        let db = firebase.firestore();
        let name = $('#name').val();
        let purpose = $('#purpose').val();
        let price = $('#price').val();
        addData(name,price,purpose);
    })
});

function addData(name,price,purpose) {
    let app = firebase.app();
    let db = firebase.firestore();
    db.collection("items").add({
        name: name,
        price: price,
        purpose: purpose,
    })
}





