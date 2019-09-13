/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import logo from '../../assets/starwarslogo.png';
import sw1 from '../../assets/starwarsi.jpg';
import sw2 from '../../assets/starwarsii.jpg';
import sw3 from '../../assets/starwarsiii.jpg';
import sw4 from '../../assets/starwarsiv.jpg';
import sw5 from '../../assets/starwarsv.jpg';
import sw6 from '../../assets/starwarsvi.jpg';
import sw7 from '../../assets/starwarsvii.jpg';
import r2d2 from '../../assets/r2d2.gif';

import api from '../../services/api';

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movies !== []) getMovies();
  }, []);

  useEffect(() => {
    movies !== undefined ? orderBy(movies) : null;
  }, [movies]);

  async function getMovies() {
    const response = await api.request();
    setMovies(response.data.results);
    setLoading(false);
  }

  function orderBy(array) {
    array.sort(function(a, b) {
      if (a.episode_id > b.episode_id) {
        return 1;
      }
      if (a.episode_id < b.episode_id) {
        return -1;
      }
      return 0;
    });
  }

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
            renderItem={({item}) => (
              <>
                <ImageContainer>
                  {item.episode_id === 1 && <MovieImage source={sw1} />}
                  {item.episode_id === 2 && <MovieImage source={sw2} />}
                  {item.episode_id === 3 && <MovieImage source={sw3} />}
                  {item.episode_id === 4 && <MovieImage source={sw4} />}
                  {item.episode_id === 5 && <MovieImage source={sw5} />}
                  {item.episode_id === 6 && <MovieImage source={sw6} />}
                  {item.episode_id === 7 && <MovieImage source={sw7} />}
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
