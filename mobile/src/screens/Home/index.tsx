import { View, Image, ScrollView, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Cards } from '../../components/Cards';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logoImg}
        />

        <Heading
          title="Encontre seu duo!"
          subTitle="Selecione o game que deseja jogar..."
        /> 

        <FlatList
          data={GAMES}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Cards
              data={item}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        
        />

      </View>
    </ScrollView>
  );
}