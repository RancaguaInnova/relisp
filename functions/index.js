const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})

exports.news = functions.https.onRequest(async (request, response) => {
  try {
    const news = await db.collection('news').get()
    console.log('NEWS', news)
    response.json([
      {
        title: 'noticia 1',
        subtitle: 'asdasdsad',
        text: 'asdasdsa',
        imageUrl: ''
      }
    ])
  } catch (error) {
    response.status(500).json({ error: 'Problems!' })
  }
})
