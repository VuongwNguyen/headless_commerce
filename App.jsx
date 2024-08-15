// import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator, TabNavigator, Navigator} from './src/navigations/Navigator';

// const App = () => {
//   return (
//       <Navigator/>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

const images = [
  { uri: 'https://i.pinimg.com/736x/f9/7f/09/f97f09c15d4184d0f9d700dccbd57db5.jpg' },
  { uri: 'https://i.pinimg.com/736x/f9/7f/09/f97f09c15d4184d0f9d700dccbd57db5.jpg' },
  { uri: 'https://i.pinimg.com/736x/f9/7f/09/f97f09c15d4184d0f9d700dccbd57db5.jpg' },
  { uri: 'https://i.pinimg.com/736x/f9/7f/09/f97f09c15d4184d0f9d700dccbd57db5.jpg' },
  { uri: 'https://i.pinimg.com/236x/7a/6e/2d/7a6e2d8512c7d50f7b4dd87813baad74.jpg' },
  { uri: 'https://i.pinimg.com/236x/7a/6e/2d/7a6e2d8512c7d50f7b4dd87813baad74.jpg' },
  { uri: 'https://i.pinimg.com/736x/f9/7f/09/f97f09c15d4184d0f9d700dccbd57db5.jpg' },
  { uri: 'https://i.pinimg.com/736x/f9/7f/09/f97f09c15d4184d0f9d700dccbd57db5.jpg' },
  { uri: 'https://i.pinimg.com/736x/f9/7f/09/f97f09c15d4184d0f9d700dccbd57db5.jpg' },
  // Thêm các ảnh khác ở đây
];



const App = () => {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openViewer = (index) => {
    setSelectedIndex(index);
    setVisible(true);
  };

  const renderImageGrid = () => {
    return images.slice(1, 5).map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => openViewer(index + 1)}
        style={styles.gridImageContainer}
      >
        <Image source={{ uri: item.uri }} style={styles.gridImage} />
        {index === 3 && images.length > 5 && (
          <View style={styles.moreOverlay}>
            <Text style={styles.moreText}>+{images.length - 4}</Text>
          </View>
        )}
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {/* Hình ảnh chính */}
      <TouchableOpacity onPress={() => openViewer(0)} style={styles.mainImageContainer}>
        <Image source={{ uri: images[0].uri }} style={styles.mainImage} />
      </TouchableOpacity>

      {/* Grid hình ảnh nhỏ */}
      <View style={styles.gridContainer}>{renderImageGrid()}</View>

      {/* Modal hiển thị ảnh */}
      <ImageViewing
        images={images}
        imageIndex={selectedIndex}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  mainImageContainer: {
    marginBottom: 10,
  },
  mainImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridImageContainer: {
    position: 'relative',
    width: '48%',
    height: 100,
    marginBottom: 10,
  },
  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  moreOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  moreText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
