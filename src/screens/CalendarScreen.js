import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const DATES = [
    { id: '1', day: 'HOY', date: '14', month: 'May' },
    { id: '2', day: 'MIÉ', date: '15', month: 'May' },
    { id: '3', day: 'JUE', date: '16', month: 'May' },
    { id: '4', day: 'VIE', date: '17', month: 'May' },
    { id: '5', day: 'SÁB', date: '18', month: 'May' },
];

const TIMES = [
    '09:00 AM', '10:30 AM', '11:00 AM',
    '12:30 PM', '02:00 PM', '03:30 PM'
];

const CalendarScreen = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState('1');
    const [selectedTime, setSelectedTime] = useState('10:30 AM');

    return (
        <SafeAreaView style={styles.safeArea}>

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#0F172A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Programar Cita</Text>
                <View style={{ width: 24 }} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <Text style={styles.pageTitle}>Nueva Consulta</Text>
                    <Text style={styles.pageSubtitle}>
                        Complete los detalles para agendar su cita médica con nuestros especialistas.
                    </Text>

                    {/* Specialist Field */}
                    <Text style={styles.sectionLabel}>Especialista</Text>
                    <TouchableOpacity style={styles.dropdownInput}>
                        <MaterialIcons name="work-outline" size={20} color="#8E9EAB" style={styles.inputIcon} />
                        <Text style={styles.dropdownText}>Busca un especialista...</Text>
                        <Ionicons name="chevron-down" size={20} color="#8E9EAB" />
                    </TouchableOpacity>

                    {/* Date Selector */}
                    <View style={styles.sectionHeaderRow}>
                        <Text style={styles.sectionLabel}>Fecha de la Cita</Text>
                        <TouchableOpacity><Text style={styles.linkText}>Ver calendario</Text></TouchableOpacity>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.dateListRow}
                        style={{ marginBottom: 24 }}
                    >
                        {DATES.map((item) => {
                            const isActive = selectedDate === item.id;
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[styles.dateCard, isActive && styles.dateCardActive]}
                                    onPress={() => setSelectedDate(item.id)}
                                >
                                    <Text style={[styles.dateDayText, isActive && styles.textWhite]}>{item.day}</Text>
                                    <Text style={[styles.dateNumberText, isActive && styles.textWhite]}>{item.date}</Text>
                                    <Text style={[styles.dateMonthText, isActive && styles.textWhite]}>{item.month}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>

                    {/* Time Selector */}
                    <Text style={styles.sectionLabel}>Horarios Disponibles</Text>
                    <View style={styles.timeGridContainer}>
                        {TIMES.map((time, idx) => {
                            const isActive = selectedTime === time;
                            return (
                                <TouchableOpacity
                                    key={idx}
                                    style={[styles.timePill, isActive && styles.timePillActive]}
                                    onPress={() => setSelectedTime(time)}
                                >
                                    <Text style={[styles.timeText, isActive && styles.textWhite]}>{time}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {/* Reason Input */}
                    <Text style={styles.sectionLabel}>Motivo de la visita</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Escriba brevemente el motivo de su consulta para que el especialista esté preparado..."
                        placeholderTextColor="#A0AAB5"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />

                    <Text style={styles.disclaimerText}>
                        Al programar, usted acepta nuestras <Text style={styles.linkInline}>políticas de privacidad</Text> y{' '}
                        <Text style={styles.linkInline}>términos de servicio</Text>. Sus datos médicos están cifrados y protegidos.
                    </Text>

                    {/* Padding for Button */}
                    <View style={{ height: 80 }} />
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Floating Action Button - Fixed to Bottom */}
            <View style={styles.bottomFixedArea}>
                <TouchableOpacity style={styles.primaryButton}>
                    <Ionicons name="calendar" size={18} color="#FFF" style={{ marginRight: 8 }} />
                    <Text style={styles.primaryButtonText}>Guardar Cita</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    headerBtn: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0F172A',
    },
    pageTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 8,
    },
    pageSubtitle: {
        fontSize: 14,
        color: '#64748B',
        lineHeight: 20,
        marginBottom: 24,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 12,
    },
    linkText: {
        fontSize: 13,
        color: '#0056B3',
        fontWeight: '600',
    },
    dropdownInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 10,
        paddingHorizontal: 16,
        height: 52,
        marginBottom: 24,
    },
    inputIcon: {
        marginRight: 12,
    },
    dropdownText: {
        flex: 1,
        fontSize: 15,
        color: '#475569',
    },
    dateListRow: {
        paddingRight: 20,
        gap: 12,
    },
    dateCard: {
        width: 65,
        height: 85,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateCardActive: {
        backgroundColor: '#0056B3',
        borderColor: '#0056B3',
        shadowColor: '#0056B3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    dateDayText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#64748B',
        marginBottom: 4,
    },
    dateNumberText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 2,
    },
    dateMonthText: {
        fontSize: 11,
        color: '#64748B',
    },
    textWhite: {
        color: '#FFFFFF',
    },
    timeGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    timePill: {
        width: '31%',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 12,
    },
    timePillActive: {
        backgroundColor: '#0056B3',
        borderColor: '#0056B3',
    },
    timeText: {
        fontSize: 14,
        color: '#334155',
        fontWeight: '500',
    },
    textArea: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 10,
        padding: 16,
        fontSize: 15,
        color: '#1E293B',
        minHeight: 120,
        marginBottom: 16,
    },
    disclaimerText: {
        fontSize: 12,
        color: '#94A3B8',
        textAlign: 'center',
        lineHeight: 18,
        paddingHorizontal: 10,
    },
    linkInline: {
        color: '#0056B3',
        textDecorationLine: 'underline',
    },
    bottomFixedArea: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#F8FAFC',
        padding: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#E2E8F0',
    },
    primaryButton: {
        flexDirection: 'row',
        backgroundColor: '#0056B3',
        borderRadius: 10,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default CalendarScreen;
