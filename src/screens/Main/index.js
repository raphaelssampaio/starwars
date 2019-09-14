import {FlatList} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  Container,
  Card,
  ImageContainer,
  MovieImage,
  TextContainer,
  StarWarsLogo,
  MovieEpisode,
  MovieName,
  MovieDescription,
  Loading,
  LoadingView,
  LoadingImage,
} from './styles';

import {logo, r2d2, banners} from '../../assets';

import api from '../../services/api';

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const orderByEpisodeId = useCallback(
    array =>
      array.sort(function(a, b) {
        if (a.episode_id > b.episode_id) {
          return 1;
        }
        if (a.episode_id < b.episode_id) {
          return -1;
        }
        return 0;
      }),
    [],
  );

  useEffect(() => {
    async function getMovies() {
      try {
        const {data} = await api.request();

        const orderedResults = orderByEpisodeId(data.results);

        setMovies(orderedResults);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getMovies();
  }, [orderByEpisodeId]);

  return (
    <Container>
      <StarWarsLogo source={logo} />

      <Card>
        {loading && (
          <LoadingView>
            <LoadingImage source={r2d2} />
            <Loading />
          </LoadingView>
        )}
        {!loading && (
          <FlatList
            data={movies}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.episode_id)}
            renderItem={({item, index}) => (
              <>
                <ImageContainer>
                  <MovieImage source={banners[index]} />
                </ImageContainer>
                <TextContainer>
                  <MovieEpisode>
                    Star Wars - Episode {item.episode_id}
                  </MovieEpisode>
                  <MovieName>{item.title}</MovieName>
                  <MovieDescription>{item.opening_crawl}</MovieDescription>
                </TextContainer>
              </>
            )}
          />
        )}
      </Card>
    </Container>
  );
}
