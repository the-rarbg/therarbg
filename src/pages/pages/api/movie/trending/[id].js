import { getUrl2, trendingMovieDay } from '../../../../lib/tmdb'

export default async function handler(req, res) {
  
  const { id } = req.query
  try {
    const url = getUrl2(trendingMovieDay, id)
    console.log("pramod",url)
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json({
      results: data.results,
      total_pages: data.total_pages,
      total_results: data.total_results,
    })
  } catch (err) {
    console.log("pramoderr",url)
    res.status(500).json({ error: err.message })
  }
}
