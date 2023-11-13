import React, { useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const StarList = () => {
  const [selectedStar, setSelectedStar] = useState(null);
  
  const stars = [
    { id: 1, image: require('../assets/Star.png') },
    { id: 2, image: require('../assets/Star.png') },
    { id: 3, image: require('../assets/Star.png') },
    { id: 4, image: require('../assets/Star.png') },
    { id: 5, image: require('../assets/Star.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleStarPress(item.id)}>
      <Image
        source={item.image}
        style={[
          styles.starImage,
          selectedStar && selectedStar >= item.id ? { tintColor: 'yellow' } : { tintColor: 'black' },
        ]}
      />
    </TouchableOpacity>
  );

  const handleStarPress = (starId) => {
    setSelectedStar(starId);
  };

  return (
    <View>
      <FlatList
        data={stars}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starImage: {
    width: 25,
    height: 25,
    margin: 5,
  },
});

export default StarList;
