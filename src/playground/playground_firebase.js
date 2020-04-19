// database.ref().on(
//   'value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log('Error with data fetching', e);
//   }
// );

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(() => {
//     console.log('Error fetching data', e);
//   });
// database.ref().set({
//   name: 'Tak',
//   age: 22,
//   isAdult: false,
//   location: {
//     city: 'Lyon',
//     country: 'France',
//   },
// }).then(() => {
//   console.log('data is saved!');
// }).catch((e) => {
//   console.log('this failed',e);
// });

/*database
  .ref('isAdult')
  .remove()
  .then(() => console.log('isAdult is removed'))
  .catch((e) => console.log('removing failed', e));
database.ref().update({
  name: 'Mike',
  age: 63,
  job: 'Plumber',
});*/
//firebase.analytics();
