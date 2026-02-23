import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PatientDetailScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Citas');

    const renderTabs = () => (
        <View style={styles.tabsContainer}>
            {['Citas', 'Notas', 'Signos Vitales'].map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
                    onPress={() => setActiveTab(tab)}
                >
                    <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    const renderCitasContent = () => (
        <View style={styles.tabContent}>
            <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Próximas Citas</Text>
                <TouchableOpacity><Text style={styles.seeHistoryText}>VER HISTORIAL</Text></TouchableOpacity>
            </View>

            {/* Appointment Card 1 */}
            <View style={styles.appointmentCard}>
                <View style={styles.dateBlock}>
                    <Text style={styles.dateMonth}>OCT</Text>
                    <Text style={styles.dateDay}>12</Text>
                </View>
                <View style={styles.appointmentInfo}>
                    <Text style={styles.appointmentTitle}>Consulta General</Text>
                    <Text style={styles.appointmentSubtitle}>Dr. Carlos Mendoza • 10:30 AM</Text>
                    <View style={styles.badgesRow}>
                        <View style={[styles.badge, { backgroundColor: '#DBEAFE' }]}>
                            <Text style={[styles.badgeText, { color: '#1D4ED8' }]}>PRESENCIAL</Text>
                        </View>
                        <View style={[styles.badge, { backgroundColor: '#FFEDD5' }]}>
                            <Text style={[styles.badgeText, { color: '#C2410C' }]}>CONFIRMADA</Text>
                        </View>
                    </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#CBD5E1" style={styles.chevron} />
            </View>

            {/* Appointment Card 2 */}
            <View style={styles.appointmentCard}>
                <View style={styles.dateBlock}>
                    <Text style={styles.dateMonth}>NOV</Text>
                    <Text style={styles.dateDay}>05</Text>
                </View>
                <View style={styles.appointmentInfo}>
                    <Text style={styles.appointmentTitle}>Control Nutricional</Text>
                    <Text style={styles.appointmentSubtitle}>Dra. Lucía Torres • 04:15 PM</Text>
                    <View style={styles.badgesRow}>
                        <View style={[styles.badge, { backgroundColor: '#F3E8FF' }]}>
                            <Text style={[styles.badgeText, { color: '#7E22CE' }]}>TELEMEDICINA</Text>
                        </View>
                    </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#CBD5E1" style={styles.chevron} />
            </View>

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Últimos Signos</Text>
            <View style={styles.vitalsGrid}>
                {/* Heart Rate Card */}
                <View style={styles.vitalCard}>
                    <View style={styles.vitalHeader}>
                        <Ionicons name="heart" size={16} color="#0056B3" />
                        <Text style={styles.vitalTitle}>RITMO CARDIACO</Text>
                    </View>
                    <View style={styles.vitalValueRow}>
                        <Text style={styles.vitalValue}>72</Text>
                        <Text style={styles.vitalUnit}> bpm</Text>
                    </View>
                    {/* Simple progress bar mock */}
                    <View style={styles.progressTrack}>
                        <View style={[styles.progressFill, { width: '50%', backgroundColor: '#0056B3' }]} />
                    </View>
                </View>

                {/* Temperature Card */}
                <View style={[styles.vitalCard, { backgroundColor: '#ECFDF5' }]}>
                    <View style={styles.vitalHeader}>
                        <Ionicons name="thermometer" size={16} color="#059669" />
                        <Text style={[styles.vitalTitle, { color: '#059669' }]}>TEMPERATURA</Text>
                    </View>
                    <View style={styles.vitalValueRow}>
                        <Text style={styles.vitalValue}>36.5</Text>
                        <Text style={styles.vitalUnit}> °C</Text>
                    </View>
                    <Text style={styles.vitalStatusGood}>Normal • Estable</Text>
                </View>
            </View>

            {/* Last Note Mock */}
            <View style={styles.noteCard}>
                <View style={styles.noteHeader}>
                    <Ionicons name="document-text-outline" size={16} color="#64748B" />
                    <Text style={styles.noteTitle}>ÚLTIMA NOTA MÉDICA</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={styles.noteDate}>01 Oct 2023</Text>
                </View>
                <Text style={styles.notePreview}>
                    "Paciente reporta mejoría en síntomas post-tratamiento. Se recomienda continuar con la..."
                </Text>
                <TouchableOpacity style={styles.readMoreBtn}>
                    <Text style={styles.readMoreText}>Leer nota completa </Text>
                    <Ionicons name="arrow-forward" size={14} color="#0056B3" />
                </TouchableOpacity>
            </View>

            {/* Padding for FAB */}
            <View style={{ height: 100 }} />
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>

            {/* Custom Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#0F172A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Perfil del Paciente</Text>
                <TouchableOpacity style={styles.headerBtn}>
                    <Ionicons name="ellipsis-vertical" size={24} color="#0F172A" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Profile Info Section */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            source={{ uri: 'https://ui-avatars.com/api/?name=Juan+Pérez&background=random&color=fff&size=200' }}
                            style={styles.avatarImage}
                        />
                        {/* Status Indicator */}
                        <View style={styles.statusIndicator} />
                    </View>
                    <Text style={styles.patientName}>Juan Pérez</Text>
                    <Text style={styles.patientDetails}>34 años • ID: #98234</Text>

                    {/* Action Buttons */}
                    <View style={styles.actionsRow}>
                        <TouchableOpacity style={[styles.actionBtn, styles.editBtn]}>
                            <Ionicons name="pencil" size={16} color="#FFF" style={{ marginRight: 6 }} />
                            <Text style={styles.editBtnText}>Editar Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.actionBtn, styles.shareBtn]}>
                            <Ionicons name="share-social-outline" size={16} color="#0056B3" style={{ marginRight: 6 }} />
                            <Text style={styles.shareBtnText}>Compartir</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Tabs Content */}
                {renderTabs()}
                {renderCitasContent()}

            </ScrollView>

            {/* Floating Action Button */}
            {activeTab === 'Citas' && (
                <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
                    <Ionicons name="add" size={30} color="#FFF" />
                </TouchableOpacity>
            )}

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8FAFC', // Very light gray background
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
    profileSection: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    avatarWrapper: {
        marginBottom: 16,
        position: 'relative',
    },
    avatarImage: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 4,
        borderColor: '#FFFFFF',
    },
    statusIndicator: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#10B981', // Green status
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    patientName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 4,
    },
    patientDetails: {
        fontSize: 15,
        color: '#64748B',
        marginBottom: 20,
    },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginHorizontal: 6,
    },
    editBtn: {
        backgroundColor: '#0056B3',
    },
    editBtnText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
    },
    shareBtn: {
        backgroundColor: '#E6F0FA',
    },
    shareBtnText: {
        color: '#0056B3',
        fontWeight: '600',
        fontSize: 14,
    },
    tabsContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    tabButton: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
    },
    activeTabButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#0056B3',
    },
    tabText: {
        fontSize: 15,
        color: '#64748B',
        fontWeight: '600',
    },
    activeTabText: {
        color: '#0056B3',
    },
    tabContent: {
        paddingComponent: 20,
        paddingHorizontal: 20,
        paddingTop: 24,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 16,
    },
    seeHistoryText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#0056B3',
        letterSpacing: 0.5,
    },
    appointmentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    dateBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginRight: 16,
    },
    dateMonth: {
        fontSize: 12,
        fontWeight: '700',
        color: '#0056B3',
        textTransform: 'uppercase',
    },
    dateDay: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0F172A',
    },
    appointmentInfo: {
        flex: 1,
    },
    appointmentTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 4,
    },
    appointmentSubtitle: {
        fontSize: 13,
        color: '#64748B',
        marginBottom: 8,
    },
    badgesRow: {
        flexDirection: 'row',
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 8,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    vitalsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    vitalCard: {
        width: '48%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E8F0FE',
    },
    vitalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    vitalTitle: {
        fontSize: 11,
        fontWeight: '700',
        color: '#0056B3',
        marginLeft: 6,
        letterSpacing: 0.5,
    },
    vitalValueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 12,
    },
    vitalValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0F172A',
    },
    vitalUnit: {
        fontSize: 14,
        color: '#64748B',
        fontWeight: '500',
    },
    progressTrack: {
        height: 4,
        backgroundColor: '#E2E8F0',
        borderRadius: 2,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 2,
    },
    vitalStatusGood: {
        fontSize: 12,
        color: '#059669',
        fontWeight: '500',
    },
    noteCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    noteHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    noteTitle: {
        fontSize: 11,
        fontWeight: '700',
        color: '#64748B',
        marginLeft: 6,
        letterSpacing: 0.5,
    },
    noteDate: {
        fontSize: 11,
        color: '#94A3B8',
    },
    notePreview: {
        fontSize: 14,
        color: '#334155',
        lineHeight: 22,
        fontStyle: 'italic',
        marginBottom: 16,
    },
    readMoreBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    readMoreText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0056B3',
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

export default PatientDetailScreen;
