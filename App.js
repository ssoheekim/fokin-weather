import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading"
import * as Location from "expo-location";
import {Alert} from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "85731d0de3d5f26841a6e528e43699d6";

export default class extends React.Component {
  //componentDidMount() 는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
  state = {
    isLoading:true
  };
  getWeather = async(latitude,longitude) => {
    const { 
      data:{
        main:{temp},
        weather
      } 
    } = await axios.get(
      `https://openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
      );
      this.setState({
        isLoading:false,
        condition:weather[0].main,
        temp:data.main.temp
      });
  };

  getLocation = async() => {
    try {
      throw Error();
      await Location.requestPermissionsAsync();
      const { 
        coords:{latitude,longitude} 
      } = await Location.getCurrentPositionAsync();
      // API 보내고 날씨정보를 받아온다
      this.getWeather(latitude,longitude)
      this.setState({isLoading:false});
    } catch(error){
      Alert.alert("can't find you...","so sad")
    }

    console.log(location);
  }
  componentDidMount(){
      this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

