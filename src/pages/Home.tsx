import React, {
  Fragment, //garante o Empacotamento de todos elementos das views.
  useState, // cria estado da aplicação, as var/cons ficam sendo observadas para renderizar em tempo real
  useEffect, // interceptar mudanças do estado.
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView, //Garante que ignore áreas como a do iphone que tem coberto detalhes em cima
  TextInput,
  Platform, //Possibilita fazer condições dependendo do tipo da plataforma ios, android
  FlatList, // Para listas com muitos itens, renderiza de acordo com visualização
  ScrollView, // Para listas curtas, renderiza todos os itens.
  TouchableOpacity, //Cria opacidade ao clicar no elemento
} from 'react-native';

import { Button } from '../components/Button';
import { ButtonRemove } from '../components/ButtonRemove';
import { SkillCard } from '../components/SkillCard';

interface skillData {
  id: string,
  name: string,
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkilss, setMySkills] = useState<skillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddMySkills() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
  }
   
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Bom dia!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Boa tarde');
    } else {
      setGretting('Boa Noite!');
    }
  });

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome, Rodrigo</Text>
        <Text style={styles.gretting}> {gretting} </Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
        <Button title={'Add'} onPress={handleAddMySkills} />
        <Button title={'New'} onPress={handleAddMySkills} />
        
        <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
        {
          <FlatList
           
            data={mySkilss}
            keyExtractor={item => item.id}
            renderItem={({ item }) => 
              <View style={styles.view}>
                <SkillCard 
                  skill={item.name} 
                />
                <ButtonRemove 
                  title={''}
                  onPress={() => handleRemoveSkill(item.id)}
                />
              </View>
            }
          />
        }
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    padding: Platform.OS === 'ios' ? 15 : 10,
    fontWeight: 'bold',
    marginTop: 30,
    borderRadius: 7,
  },
  gretting: {
    color: '#fff',
  },
  view:{
    alignSelf: 'stretch',
    textAlign: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
