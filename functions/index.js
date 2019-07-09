const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })

admin.initializeApp()
const db = admin.firestore()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})

exports.news = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    try {
      const newsArr = []
      const newsResult = await db.collection('News').get()
      newsResult.forEach(news => {
        const newsObj = news.data()
        newsObj.id = news.id
        // console.log('news!!!!', news.data())
        newsArr.push(newsObj)
      })
      /* console.log('NEWS', news) */
      response.json(newsArr)
    } catch (error) {
      response.status(500).json({ error: 'Problems!' })
    }
  })
})

exports.suscriptions = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    try {
      const suscriptions = []
      const suscriptionsResult = await db.collection('Subscriptions').get()
      suscriptionsResult.forEach(news => {
        suscriptions.push(news.data())
      })
      response.json(suscriptions)
    } catch (error) {
      response.status(500).json({ error: 'Problems!' })
    }
  })
})

exports.newsSuscription = functions.https.onRequest(
  async (request, response) => {
    cors(request, response, async () => {
      try {
        const subscription = {
          name: request.body.name || '',
          email: request.body.email || '',
          country: request.body.country || '',
          role: request.body.role || ''
        }
        await db
          .collection('Subscriptions')
          .doc()
          .set(subscription)

        response.json({ success: true })
      } catch (error) {
        response.status(500).json({ error: 'Problems!' })
      }
    })
  }
)
