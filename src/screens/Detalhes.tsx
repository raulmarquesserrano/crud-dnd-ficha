import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Personagem } from '../types/personagem';
import { styles } from '../styles/Styles';

interface DetalhesProps {
    personagem: Personagem;
    onVoltar: () => void;
}

export default function Detalhes({ personagem, onVoltar }: DetalhesProps) {
    return (
        <View style={styles.pagina}>
            <Text style={styles.textoM}>CARACTERISTICAS BASE</Text>
            <Text style={styles.textoP}>{"\n"}</Text>

            <Text style={styles.textoP}>JOGADOR: {personagem.nomej}</Text>
            <Text style={styles.textoP}>PERSONAGEM: {personagem.nomep}</Text>
            <Text style={styles.textoP}>CLASSE: {personagem.classe} {personagem.nivel}</Text>
            <Text style={styles.textoP}>RAÇA: {personagem.raca}</Text>
            <Text style={styles.textoP}>{"\n"}</Text>

            <Text style={styles.textoM}>CARACTERISTICAS ESTATISTICAS</Text>
            <Text style={styles.textoP}>{"\n"}</Text>

            <Text style={styles.textoP}>BONUS DE PROEFICIENCIA: {personagem.bp}</Text>
            <Text style={styles.textoP}>CLASSE DE ARMADURA: {personagem.ca}</Text>
            <Text style={styles.textoP}>DESLOCAMENTO: {personagem.deslocamento}</Text>
            <Text style={styles.textoP}>HP: {personagem.hptotal}/{personagem.hpatual}</Text>
            <Text style={styles.textoP}>{"\n"}</Text>

            <Text style={styles.textoM}>ATRIBUTOS BRUTOS</Text>

            <View style={styles.atributos}>
                <View style={styles.cardEsquerda}>
                    <View style={styles.cardDireita}>

                        <Text style={styles.textoP}>FOR: {personagem.forca}</Text>
                        <Text style={styles.textoP}>DES: {personagem.destreza}</Text>
                        <Text style={styles.textoP}>CON: {personagem.constituicao}</Text>

                    </View>

                    <View style={styles.cardDireita}>

                        <Text style={styles.textoP}>INT: {personagem.inteligencia}</Text>
                        <Text style={styles.textoP}>SAB: {personagem.sabedoria}</Text>
                        <Text style={styles.textoP}>CAR: {personagem.carisma}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={onVoltar}>
                <Text style={styles.textoP}>{"\n"}{"\n"}</Text>
                <Text style={styles.textoP}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}