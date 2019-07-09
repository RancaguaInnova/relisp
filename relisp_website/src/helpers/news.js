export const list = async () => {
  try {
    const response = await fetch(
      'https://us-central1-elis-ae942.cloudfunctions.net/news'
    )
    const newsArr = await response.json()
    console.log('NEWS ARRAY:', newsArr)

    const data = newsArr.map(news =>({
        title: news.title,
        subtitle: news.subtitle,
        text: news.body,
        imageUrl: news.picture && news.picture.length > 0 ? news.picture[0].src : ''
      }))

    console.log('DATA:', data);

    return data
  } catch (error) {
    console.log('Error getting news:', error)

    return []
  }
}
