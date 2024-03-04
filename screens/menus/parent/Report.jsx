//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import PageSkeleton from '../../../navigator/components/PageSkeleton';
import arrow from '../../../assets/icon/arrow.png';
import report from '../../../assets/report.png'
// create a component
const Report = ({navigation}) => {
    const reports = [report, report, report]
    return (
        <PageSkeleton 
            icon={arrow}
            title="Bulletins"
            iconText="Retour"
            navigation={navigation}
        >
            <View
                style={{
                    paddingTop: 30,
                    paddingHorizontal: 30,
                    paddingBottom: 15
                }}
            >
                <Text style={{
                    fontSize: 20,
                    textTransform: 'capitalize',
                    fontWeight: '400'
                }}>Bulletin du 1er Trimestre</Text>
            </View>
            <View style={{
                height: 2,
                width: '100%',
                backgroundColor: '#F1F1F1'
            }}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
                <View style={{
                    paddingHorizontal: 30,
                    flex: 1,
                    flexDirection: 'row',
                    gap: 60,
                    paddingTop: 15
                }}>
                    {
                        reports.map((report, index)=>{
                            return (
                                <ReportUnit key={index} report={report}/>
                            )
                        })
                    }
                </View>
            </ScrollView>

        </PageSkeleton>
    );
};

const ReportUnit = ({report})=>{
    return (
        <Image source={report} style={{
            height: '50%',
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#D9D9D9'
        }}/>
    )
}

//make this component available to the app
export default Report;
