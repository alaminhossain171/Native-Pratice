import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';

const App = () => {
  useEffect(() => {

    // get data 
    // getData()


    //post data
    // postData()



    //put data
putData()
  }, [])









  // get method 
  function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    axios.get(url)
      .then((res) => console.log(res.data));

  }


  //post data

  function postData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    axios.post(url, data, {
      headers: {
        'Content-Type': 'Application/json'
      }
    }).then((res) => console.log('res pawoa gese', res.data))

  }



  //put data

  function putData() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let data = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    axios.put(url, data, {
      method:'PUT',
      headers: {
        'Content-Type': 'Application/json',
      
      }
    }).then((res) => console.log('res pawoa gese put', res.data))

  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})