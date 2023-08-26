import Head from 'next/head'
import CardTrending from '../components/CardTrending'
import Collection from '../components/Collection'
import SearchBar from '../components/SearchBar'
import { pathToSearchAll } from '../utils'

export default function Home() {
  const limitNormal = 6
  const limitTrending = 10

  return (
    <>
      <Head>
        <title>Home | Watcho</title>
      </Head>
      <SearchBar searchPath={pathToSearchAll} />

      {/* Collection of different groups of movies */}
      <Collection
        isHomePage
        isTrending
        Component={CardTrending}
        endpoint='/movie/trending/1'
        href='/pages/movie/trending/1'
        limit={limitTrending}
        title='Trending'
      />
      <Collection
        isHomePage
        endpoint='/movie/popular/1'
        href='/pages/movie/popular/1'
        limit={limitNormal}
        title='Popular'
      />
      <Collection
        isHomePage
        endpoint='/movie/now/1'
        href='/pages/movie/now/1'
        limit={limitNormal}
        title='Now playing'
      />
      <Collection
        isHomePage
        endpoint='/movie/upcoming/1'
        href='/pages/movie/upcoming/1'
        limit={limitNormal}
        title='Upcoming'
      />
      <Collection
        isHomePage
        endpoint='/movie/top/1'
        href='/pages/movie/top/1'
        limit={limitNormal}
        title='Top rated'
      />

      {/* Collection of different groups of tv series */}
      <Collection
        isHomePage
        isTrending
        Component={CardTrending}
        endpoint='/tv/trending/1'
        href='/pages/tv/trending/1'
        limit={limitTrending}
        media_type='tv'
        title='Trending'
        type='tv series'
      />
      <Collection
        isHomePage
        endpoint='/tv/popular/1'
        href='/pages/tv/popular/1'
        limit={limitNormal}
        media_type='tv'
        title='Popular'
        type='tv series'
      />
      <Collection
        isHomePage
        endpoint='/tv/airing/1'
        href='/pages/tv/airing/1'
        limit={limitNormal}
        media_type='tv'
        title='Airing today'
        type='tv series'
      />
      <Collection
        isHomePage
        endpoint='/tv/onair/1'
        href='/pages/tv/onair/1'
        limit={limitNormal}
        media_type='tv'
        title='On air'
        type='tv series'
      />
      <Collection
        isHomePage
        endpoint='/tv/top/1'
        href='/pages/tv/top/1'
        limit={limitNormal}
        media_type='tv'
        title='Top rated'
        type='tv series'
      />
    </>
  )
}
