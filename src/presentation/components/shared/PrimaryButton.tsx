import { Pressable, StyleSheet, Text } from 'react-native';


interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ( { label, onPress, onLongPress }: Props ) => {
  return (
    
    <Pressable 
        onPress={ onPress }
        onLongPress={ onLongPress }
        style={ ( { pressed } ) => [
          style.button,
          pressed && style.buttonPressed
        ] }
        >
        <Text style={{ color: 'white' }} >{ label }</Text>
      </Pressable>
  )
}

const style = StyleSheet.create({

  button: {
    backgroundColor: '#5856D6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius:10,
  },

  buttonPressed: {
    backgroundColor: '#4746ab'
  }
})