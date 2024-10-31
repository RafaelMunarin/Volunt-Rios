import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/customHeader';

const FindOutMore = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader backAction={true} nameScreen={'Saiba Mais'}/>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.description}>
                        <Text style={styles.subtitle}>Por que estamos aqui?</Text>
                        {"\n"}Nosso aplicativo é uma ponte entre voluntários e empresas, proporcionando descontos incríveis em mercados, cinemas e muito mais. Junte-se a nós para fazer a diferença!
                    </Text>

                    <Text style={styles.description}>
                        <Text style={styles.subtitle}>Um desafio que nos motiva</Text>
                        {"\n"}Nos próximos dois anos, queremos aumentar o número de voluntários e transformar ações em prol do Rio e do meio ambiente em uma grande mobilização comunitária.
                    </Text>

                    <Text style={styles.description}>
                        <Text style={styles.subtitle}>Como faremos isso?</Text>
                        {"\n"}Acreditamos na força da comunidade! Queremos conscientizar e unir mais pessoas para cuidar do nosso rio e, em troca, oferecer benefícios incríveis para quem participa.
                    </Text>

                    <Text style={styles.description}>
                        <Text style={styles.subtitle}>Nossas soluções</Text>
                        {"\n"}Com nosso aplicativo, conectamos voluntários, empresas e instituições. Aqueles que se envolvem nas ações de limpeza serão recompensados com descontos e benefícios que fazem a diferença!
                    </Text>

                    <Text style={styles.description}>
                        <Text style={styles.subtitle}>Como tudo funcionará</Text>
                        {"\n"}À medida que nosso projeto avança, o rio ficará mais limpo e a comunidade mais unida. Vamos prevenir cheias e criar um impacto positivo para todos!
                    </Text>

                    <Text style={styles.description}>
                        <Text style={styles.subtitle}>Junte-se a nós!</Text>
                        {"\n"}Com a sua ajuda, podemos tornar nosso rio mais bonito e garantir um futuro melhor para nossa comunidade.
                    </Text>

                    <Text style={styles.subtitle}>Quem fez acontecer:</Text>
                    <Text style={styles.description}>
                        <Text style={styles.boldText}>Pesquisadores e Arquitetos do Projeto:</Text>
                        {"\n"}César Augusto Portes Ferreira
                        {"\n"}Murilo Vinícius Gonçalves
                        {"\n"}Gabriele Neto
                        {"\n"}Lucas Ricardo da Silva
                        {"\n"}Paulo Henrique de Andrade Amado
                        {"\n"}Lucas Orlandi Noriller
                        {"\n"}Alex Staloch
                        {"\n"}Henrique Beppler
                        {"\n"}Adrian Fernando Amorim Oliveira
                    </Text>

                    <Text style={styles.description}>
                        <Text style={styles.boldText}>Desenvolvedores do Aplicativo:</Text>
                        {"\n"}Rafael Batistti Munarin
                        {"\n"}Vitor Hugo Zonta
                        {"\n"}Gustavo Bernardes
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default FindOutMore;
