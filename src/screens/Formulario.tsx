import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Personagem } from '../types/personagem';
import { styles } from '../styles/Styles';

interface FormularioProps {
    personagemInicial?: Personagem | null;
    onSalvar: (novoPersonagem: Personagem) => void;
    onVoltar: () => void;
}

export default function Formulario({ personagemInicial, onSalvar, onVoltar }: FormularioProps) {
    const [nomep, setNomep] = useState(personagemInicial?.nomep || '');
    const [nomej, setNomej] = useState(personagemInicial?.nomej || '');
    const [raca, setRaca] = useState(personagemInicial?.raca || '');
    const [classe, setClasse] = useState(personagemInicial?.classe || '');
    const [nivel, setNivel] = useState(personagemInicial?.nivel ? String(personagemInicial.nivel) : '');
    const [deslocamento, setDeslocamento] = useState(personagemInicial?.deslocamento || '');
    const [bp, setBp] = useState(personagemInicial?.bp ? String(personagemInicial.bp) : '');
    const [ca, setCa] = useState(personagemInicial?.ca ? String(personagemInicial.ca) : '');
    const [hptotal, setHpTotal] = useState(personagemInicial?.hptotal ? String(personagemInicial.hptotal) : '');
    const [hpatual, setHpAtual] = useState(personagemInicial?.hpatual ? String(personagemInicial.hpatual) : '');
    const [forca, setForca] = useState(personagemInicial?.forca ? String(personagemInicial.forca) : '');
    const [destreza, setDestreza] = useState(personagemInicial?.destreza ? String(personagemInicial.destreza) : '');
    const [constituicao, setConstituicao] = useState(personagemInicial?.constituicao ? String(personagemInicial.constituicao) : '');
    const [inteligencia, setInteligencia] = useState(personagemInicial?.inteligencia ? String(personagemInicial.inteligencia) : '');
    const [sabedoria, setSabedoria] = useState(personagemInicial?.sabedoria ? String(personagemInicial.sabedoria) : '');
    const [carisma, setCarisma] = useState(personagemInicial?.carisma ? String(personagemInicial.carisma) : '');

    const handleSalvar = () => {
        if (!nomep || !classe) return;

        const novo: Personagem = {
            id: personagemInicial?.id || String(Date.now()),
            nomep: nomep,
            nomej: nomej || 'Jogador',
            raca: raca || 'Humano',
            classe: classe,
            nivel: Number(nivel) || 1,
            deslocamento: deslocamento || '9m',
            bp: Number(bp) || 2,
            ca: Number(ca) || 10,
            hptotal: Number(hptotal) || 10,
            hpatual: Number(hpatual) || 10,
            forca: Number(forca) || 10,
            destreza: Number(destreza) || 10,
            constituicao: Number(constituicao) || 10,
            inteligencia: Number(inteligencia) || 10,
            sabedoria: Number(sabedoria) || 10,
            carisma: Number(carisma) || 10,
        };

        onSalvar(novo);
    };

    return (
            <View style={styles.pagina}>
                <Text style={styles.textoG}>{personagemInicial ? 'Editar Personagem' : 'Novo Personagem'}</Text>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Nome do Personagem: </Text>
                    <TextInput style={styles.inputM} value={nomep} onChangeText={setNomep} placeholder='ex: Lauro'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Nome do Jogador: </Text>
                    <TextInput style={styles.inputM} value={nomej} onChangeText={setNomej} placeholder='ex: Laurent'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Raça: </Text>
                    <TextInput style={styles.inputM} value={raca} onChangeText={setRaca} placeholder='ex: Elfo'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Classe: </Text>
                    <TextInput style={styles.inputM} value={classe} onChangeText={setClasse} placeholder='ex: Mago'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Nível: </Text>
                    <TextInput style={styles.inputM} value={nivel} onChangeText={setNivel} keyboardType='numeric' placeholder='ex: 1'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Deslocamento: </Text>
                    <TextInput style={styles.inputM} value={deslocamento} onChangeText={setDeslocamento} placeholder='ex: 9m'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Classe de Armadura (CA): </Text>
                    <TextInput style={styles.inputM} value={ca} onChangeText={setCa} keyboardType='numeric' placeholder='ex: 15'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Bônus de Proficiência (BP): </Text>
                    <TextInput style={styles.inputM} value={bp} onChangeText={setBp} keyboardType='numeric' placeholder='ex: 2'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>HP Total: </Text>
                    <TextInput style={styles.inputM} value={hptotal} onChangeText={setHpTotal} keyboardType='numeric' placeholder='ex: 12'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>HP Atual: </Text>
                    <TextInput style={styles.inputM} value={hpatual} onChangeText={setHpAtual} keyboardType='numeric' placeholder='ex: 12'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Força: </Text>
                    <TextInput style={styles.inputM} value={forca} onChangeText={setForca} keyboardType='numeric' placeholder='ex: 10'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Destreza: </Text>
                    <TextInput style={styles.inputM} value={destreza} onChangeText={setDestreza} keyboardType='numeric' placeholder='ex: 14'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Constituição: </Text>
                    <TextInput style={styles.inputM} value={constituicao} onChangeText={setConstituicao} keyboardType='numeric' placeholder='ex: 12'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Inteligência: </Text>
                    <TextInput style={styles.inputM} value={inteligencia} onChangeText={setInteligencia} keyboardType='numeric' placeholder='ex: 16'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Sabedoria: </Text>
                    <TextInput style={styles.inputM} value={sabedoria} onChangeText={setSabedoria} keyboardType='numeric' placeholder='ex: 10'/>
                </View>

                <View style={styles.alinhar}>
                    <Text style={styles.textoM}>Carisma: </Text>
                    <TextInput style={styles.inputM} value={carisma} onChangeText={setCarisma} keyboardType='numeric' placeholder='ex: 8'/>
                </View>

                <TouchableOpacity onPress={handleSalvar} style={{ marginTop: 20 }}>
                    <Text style={styles.textoM}>Salvar Personagem</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onVoltar} style={{ marginTop: 15, marginBottom: 30 }}>
                    <Text style={styles.textoM}>Voltar</Text>
                </TouchableOpacity>
            </View>
    );
}