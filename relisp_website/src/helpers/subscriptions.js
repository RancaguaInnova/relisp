export const list = async () => {
  try {
    const response = await fetch(
      'http://localhost:5001/elis-ae942/us-central1/suscriptions'
    )
    const subscriptionsArr = await response.json()
    return subscriptionsArr
  } catch (error) {
    return []
  }
}

export const add = async data => {
  try {
    const response = await fetch(
      'http://localhost:5001/elis-ae942/us-central1/newsSuscription',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const result = await response.json()
    return result
  } catch (error) {
    return []
  }
}
