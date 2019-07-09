const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })

admin.initializeApp()
const db = admin.firestore()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.news = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    try {
      const newsArr = []
      const newsResult = await db.collection('News').get()
      newsResult.forEach(news => {
        newsArr.push(news.data())
      })
      response.json(newsArr)
    } catch (error) {
      response.status(500).json({ error: `Problem: ${error}` })
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
      response.status(500).json({ error: `Problem: ${error}` })
    }
  })
})

exports.newsSuscription = functions.https.onRequest(
  async (request, response) => {
    cors(request, response, async () => {
      const { name, email, country, position } = request.body

      try {
        const subscription = {
          name: name || '',
          email: email || '',
          country: country || '',
          role: position || 'Coordinador'
        }
        await db
          .collection('Subscriptions')
          .doc()
          .set(subscription)

        response.json({ success: true })
      } catch (error) {
        response.status(500).json({ error: `Problem: ${error}` })
      }
    })
  }
)