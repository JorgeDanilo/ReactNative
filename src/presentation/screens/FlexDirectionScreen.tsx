import { StyleSheet, View } from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={ styles.container }>

      <View style={[ styles.box, styles.box1 ]}/>
      <View style={ [ styles.box, styles.box2 ] }/>
      <View style={ [ styles.box, styles.box3 ] }/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    justifyContent: 'space-between', // alinha os filhos dentro do eixo principal do container. usado por exemplo para centralizar um elmento filh.
    flexDirection: 'row', // controla a direção na qual os filhos de um nó são dispostos.
    alignItems: 'center' // como alinhar os filhos ao longo do eixo transversal de seu container.
  },

  box: {
    width: 100,
    height: 100,
  },

  box1: {
    // flex: 1,   // 1 + 2 + 3 = 1/6
    backgroundColor: '#5856d6',
    top: -100
  },

  box2: {
    // flex: 2,    // 2/6  = 1/3
    backgroundColor: '#4240a2'
  },

  box3: {
    // flex:3,  // 3/6  = 1/5
    backgroundColor: '#2e2d71',
    top: 100,
  }


})