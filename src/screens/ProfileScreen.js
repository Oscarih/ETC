import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const SettingRow = ({ icon, title, isSwitch = false, switchValue, onSwitchChange, rightText }) => (
        <TouchableOpacity
            style={styles.settingRow}
            activeOpacity={isSwitch ? 1 : 0.7}
            disabled={isSwitch}
        >
            <View style={styles.settingIconContainer}>
                {icon}
            </View>
            <Text style={styles.settingTitle}>{title}</Text>
            <View style={styles.settingRight}>
                {rightText && <Text style={styles.rightText}>{rightText}</Text>}
                {isSwitch ? (
                    <Switch
                        value={switchValue}
                        onValueChange={onSwitchChange}
                        trackColor={{ false: "#CBD5E1", true: "#0056B3" }}
                        thumbColor="#FFFFFF"
                    />
                ) : (
                    <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                {/* Profile Header */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            source={{ uri: 'https://ui-avatars.com/api/?name=Dr.+Julian+Ramirez&background=2b8a8b&color=fff&size=200' }}
                            style={styles.avatarImage}
                        />
                        {/* Verified Badge */}
                        <View style={styles.verifiedBadge}>
                            <MaterialIcons name="verified" size={16} color="#FFFFFF" />
                        </View>
                    </View>

                    <Text style={styles.doctorName}>Dr. Julian Ramirez</Text>
                    <Text style={styles.specialty}>Cardiólogo</Text>
                    <Text style={styles.hospitalInfo}>ID: 12345-MED • Hospital Central</Text>

                    <TouchableOpacity style={styles.editProfileBtn}>
                        <Text style={styles.editProfileText}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>

                {/* Account Settings */}
                <Text style={styles.sectionTitle}>AJUSTES DE CUENTA</Text>
                <View style={styles.settingsCard}>
                    <SettingRow
                        icon={<Ionicons name="person" size={20} color="#64748B" />}
                        title="Información Personal"
                    />
                    <View style={styles.divider} />
                    <SettingRow
                        icon={<Ionicons name="notifications" size={20} color="#64748B" />}
                        title="Notificaciones"
                    />
                    <View style={styles.divider} />
                    <SettingRow
                        icon={<Ionicons name="shield-checkmark" size={20} color="#64748B" />}
                        title="Seguridad"
                    />
                </View>

                {/* Preferences */}
                <Text style={styles.sectionTitle}>PREFERENCIAS</Text>
                <View style={styles.settingsCard}>
                    <SettingRow
                        icon={<Ionicons name="moon" size={20} color="#64748B" />}
                        title="Modo Oscuro"
                        isSwitch
                        switchValue={isDarkMode}
                        onSwitchChange={setIsDarkMode}
                    />
                    <View style={styles.divider} />
                    <SettingRow
                        icon={<Ionicons name="globe-outline" size={20} color="#64748B" />}
                        title="Idioma"
                        rightText="Español"
                    />
                </View>

                {/* Logout Button */}
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => navigation.replace('Login')}
                >
                    <Ionicons name="log-out-outline" size={22} color="#EF4444" style={{ marginRight: 8 }} />
                    <Text style={styles.logoutText}>Cerrar Sesión</Text>
                </TouchableOpacity>

                {/* Bottom Padding */}
                <View style={{ height: 40 }} />
            </ScrollView>
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
        paddingTop: 30,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 16,
    },
    avatarImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#FFFFFF',
    },
    verifiedBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#0056B3',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    doctorName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 4,
    },
    specialty: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0056B3',
        marginBottom: 8,
    },
    hospitalInfo: {
        fontSize: 14,
        color: '#64748B',
        marginBottom: 16,
    },
    editProfileBtn: {
        backgroundColor: '#E6F0FA',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 20,
    },
    editProfileText: {
        color: '#0056B3',
        fontWeight: '700',
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#94A3B8',
        letterSpacing: 1,
        marginBottom: 12,
        marginLeft: 8,
    },
    settingsCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        overflow: 'hidden',
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    settingIconContainer: {
        width: 32,
        alignItems: 'center',
    },
    settingTitle: {
        flex: 1,
        fontSize: 16,
        color: '#1E293B',
        fontWeight: '500',
    },
    settingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightText: {
        fontSize: 14,
        color: '#94A3B8',
        marginRight: 8,
    },
    divider: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginLeft: 48, // Aligns with the text, skipping icon
    },
    logoutButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        paddingVertical: 16,
    },
    logoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#EF4444',
    }
});

export default ProfileScreen;
