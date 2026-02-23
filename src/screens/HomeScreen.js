import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Dummy Data for Patients
const PATIENTS = [
    { id: '1', name: 'María García', lastVisit: '12 Oct 2023', initials: 'MG' },
    { id: '2', name: 'Juan Pérez', lastVisit: '08 Oct 2023', initials: 'JP' },
    { id: '3', name: 'Elena Rodriguez', lastVisit: '05 Oct 2023', initials: 'ER' },
    { id: '4', name: 'Carlos Mendes', lastVisit: '29 Sep 2023', initials: 'CM' },
    { id: '5', name: 'Sofia Lopez', lastVisit: '25 Sep 2023', initials: 'SL' },
    { id: '6', name: 'Ricardo Torres', lastVisit: '20 Sep 2023', initials: 'RT', noImage: true },
];

const PatientCard = ({ patient, onPress }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
        <View style={styles.cardContent}>
            {/* Avatar */}
            <View style={[styles.avatarContainer, patient.noImage && styles.avatarInitialsBg]}>
                {patient.noImage ? (
                    <Text style={styles.avatarInitialsText}>{patient.initials}</Text>
                ) : (
                    <Image
                        source={{ uri: `https://ui-avatars.com/api/?name=${patient.name.replace(' ', '+')}&background=random&color=fff&size=128` }}
                        style={styles.avatarImage}
                    />
                )}
            </View>

            {/* Patient Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.patientName}>{patient.name}</Text>
                <View style={styles.dateRow}>
                    <Ionicons name="calendar-outline" size={14} color="#64748B" />
                    <Text style={styles.lastVisitText}>Última consulta: {patient.lastVisit}</Text>
                </View>
            </View>

            {/* Chevron */}
            <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
        </View>
    </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Mis Pacientes</Text>
                    <Image
                        source={{ uri: 'https://ui-avatars.com/api/?name=Doctor&background=2b8a8b&color=fff' }}
                        style={styles.doctorAvatar}
                    />
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#94A3B8" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar por nombre o ID..."
                        placeholderTextColor="#94A3B8"
                    />
                </View>

                {/* Patient List */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                >
                    {PATIENTS.map(patient => (
                        <PatientCard
                            key={patient.id}
                            patient={patient}
                            onPress={() => navigation.navigate('PatientDetail', { patientId: patient.id })}
                        />
                    ))}
                    {/* Bottom Padding for FAB */}
                    <View style={{ height: 80 }} />
                </ScrollView>

                {/* Floating Action Button */}
                <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
                    <Ionicons name="add" size={30} color="#FFF" />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8FAFC', // Very light gray background
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0F172A',
    },
    doctorAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#E2E8F0',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#1E293B',
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 5,
        elevation: 2,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
        overflow: 'hidden',
    },
    avatarInitialsBg: {
        backgroundColor: '#E0F2FE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    avatarInitialsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0284C7',
    },
    infoContainer: {
        flex: 1,
    },
    patientName: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 6,
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lastVisitText: {
        fontSize: 13,
        color: '#64748B',
        marginLeft: 6,
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#0056B3',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#0056B3',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
    }
});

export default HomeScreen;
