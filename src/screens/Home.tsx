import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { Personagem } from '../types/personagem';
import { PreSetPersonagem } from '../data/PreSetPersonagem';
import { styles } from '../styles/Styles';
import Detalhes from './Detalhes';

export default function Home() {

    const [personagens, setPersonagens] = useState(PreSetPersonagem);
    const funcExcluir = (id: string) => {
    const listaPosExclusao = personagens.filter((item) => item.id !== id);
    setPersonagens(listaPosExclusao);
    }
    const [selecionado, setSelecionado] = useState < Personagem | null > (null);

    if (selecionado) {
        return (
            <Detalhes
            personagem={selecionado}
            onVoltar={() => setSelecionado(null)}
            />
        );
    }

    return (
        <View style={styles.pagina}>

            <Text style={styles.textoG}>Ficha D&D 2014</Text>

            <FlatList
            data={personagens}
            keyExtractor={( item ) => item.id}
            renderItem={({ item }) => (
            <View style={styles.cardEsquerda}>
            
            <TouchableOpacity onPress={() => setSelecionado(item)}>
            <Text style={styles.textoG}>{item.nomep}</Text>
            <Text style={styles.textoP}>{item.classe} {item.nivel}, {item.raca}</Text>
            </TouchableOpacity>

            <View style={styles.cardDireita}>

            <TouchableOpacity onPress={() => alert("editar")}>
                <Text style={styles.textoM}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => funcExcluir(item.id)}>
            <Text style={styles.textoM}>Excluir</Text>
            </TouchableOpacity>
            </View>
            </View>
            )}
        />
        </View>
    )
}