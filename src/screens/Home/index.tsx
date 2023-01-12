import * as Tag from "react-native";
import { styles } from "./styles";
export function Home() {
  return (
    <Tag.View style={styles.box}>
      <Tag.Text style={styles.eventName}>Nome do evento</Tag.Text>
      <Tag.Text style={styles.eventDate}>Segunda, 09 de Janeiro 2023</Tag.Text>
      <Tag.TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        //keyboardType="" TIPO DE TECLADO
      />
      <Tag.TouchableOpacity style={styles.button}>
        <Tag.Text >+</Tag.Text>
      </Tag.TouchableOpacity>
    </Tag.View>
  );
}
