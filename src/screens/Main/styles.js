import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  background: #000;
  align-items: center;
`;

export const StarWarsLogo = styled.Image.attrs({resizeMode: 'stretch'})`
  width: 100%;
  height: 300px;
`;

export const Card = styled.View`
  flex: 1;
  background: #ddd;
  padding: 5px;
  width: 90%;
  height: 60%;
  flex-direction: row;
  border-radius: 10px;
  border-color: #ffe81f;
  border-width: 3px;
  margin-bottom: 10px;
`;
export const ImageContainer = styled.View`
  margin: 5px;
`;
export const MovieImage = styled.Image.attrs({resizeMode: 'stretch'})`
  width: 140;
  height: 200;
`;
export const TextContainer = styled.View`
  flex: 1;
  margin-bottom: 5px;
`;
export const MovieEpisode = styled.Text`
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;
export const MovieName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  align-self: center;
`;

export const MovieDescription = styled.Text.attrs({
  numberOfLines: 15,
})``;

export const LoadingView = styled.View``;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#000',
})`
  margin: 30px 0;
`;

export const LoadingImage = styled.Image.attrs({resizeMode: 'stretch'})`
  max-width: 355px;
`;
