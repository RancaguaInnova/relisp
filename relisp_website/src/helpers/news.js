export const list = async () => {
  try {
    const response = await fetch(
      'http://localhost:5000/elis-ae942/us-central1/news'
    )
    const newsArr = await response.json()
    const data = newsArr.map(news => {
      return {
        title: news.title,
        subtitle: news.subtitle,
        text: news.body,
        imageUrl:
          news.picture && news.picture.length > 0 ? news.picture[0].src : ''
      }
    })

    return data
  } catch (error) {
    return []
  }
}
