# moneylog
firebase crud app test

## link
https://moneylog-e7c4b.firebaseapp.com/


## note
### html
htmlではこれをdeferで呼んでおく
```
/__/firebase/7.8.2/firebase-app.js
/__/firebase/7.8.2/firebase-auth.js
/__/firebase/7.8.2/firebase-firestore.js
```
meessaging, storageは今の所いらない

### app.js

残りはbodyの最後にapp.jsとしてかく．

```
    document.addEventListener('DOMContentLoaded', event => {
```
の中にかく

```
let app = firebase.app();
let db = firebase.firestore();
```
で呼んで

```
db.collection("items").get().then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
```
のナカで展開する

