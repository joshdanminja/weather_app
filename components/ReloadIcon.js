import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { colors } from '../utils/index'

export default function ReloadIcon({load}) {

    const reloadIconName = Platform.os === 'ios' ? 'ios-refresh' : 'md-refresh'

    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress={load} name="ios-refresh" size={24} color={colors.PRIMARY_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 30,
        right: 20
    }
})
