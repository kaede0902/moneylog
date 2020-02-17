

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
        });
      });
