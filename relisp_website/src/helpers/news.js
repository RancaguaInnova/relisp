export const list = async () => {
  try {
    const response = await fetch(
      'https://us-central1-elis-ae942.cloudfunctions.net/news'
    )
    const newsArr = await response.json()
    const data = newsArr.map(news =>({
        id: news.id,
        title: news.title,
        subtitle: news.subtitle,
        text: news.body,
        imageUrl: news.picture && news.picture.length > 0 ? news.picture[0].src : ''
      }))

    return data
  } catch (error) {
    console.log('Error getting news:', error)
    return []
  }
}

export const get = async id => {
  try {
    const response = await fetch(
      'https://us-central1-elis-ae942.cloudfunctions.net/getNews',
      {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      }
    )
    const news = await response.json()
    const parsedNews = { ...news, imageUrl: news.picture && news.picture.length > 0 ? news.picture[0].src : '' }
    return parsedNews
  } catch(error) {
    console.log(`Error geting news with id ${id}: ${error.message}`)
  }
}
