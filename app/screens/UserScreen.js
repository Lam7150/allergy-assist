import React, { useState } from "react";
import { SafeAreaView, Modal, ScrollView, Text, StyleSheet } from "react-native";
import CheckBox from '../components/Checkbox';
import Button from "../components/Button"
import ProfileCard from "../components/ProfileCard"
import ShareModal from "../components/ShareModal"
import { ALLERGIES, DIETARY_RESTRICTIONS } from "../constants/Allergies";

const SHARED_PROFILES = ["SABRINA", "LAM", "ALEX"]
const PENDING_PROFILES = ["ANONYMOUS"]

function UserScreen() {
    const [allergies, setAllergies] = useState(() => { d = {}; ALLERGIES.forEach(a => d[a] = false); return d; })
    const [dietRestrictions, setDietRestrictions] = useState(() => { d = {}; DIETARY_RESTRICTIONS.forEach(a => d[a] = false); return d; })
    const [sharedProfiles, setSharedProfiles] = useState(SHARED_PROFILES)
    const [pendingProfiles, setPendingProfiles] = useState(PENDING_PROFILES)
    const [modalVisible, setModalVisible] = useState(false)

    function handleAllergyChange(item) {
        setAllergies({
            ...allergies,
            [item]: !allergies[item]
        });
    }

    function handleDietChange(item) {
        setDietRestrictions({
            ...dietRestrictions,
            [item]: !dietRestrictions[item]
        });
    }

    function handleSharedProfile(target, isClosed) {
        if (isClosed)
            setSharedProfiles(sharedProfiles.filter(profile => profile != target))
        else
            setSharedProfiles([...sharedProfiles, target])
    }

    function handlePendingProfile(target, isClosed) {
        setPendingProfiles(pendingProfiles.filter(profile => profile != target))
        if (!isClosed)
            handleSharedProfile(target, false)
    }

    return (<SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>
                MY ALLERGIES
            </Text>
            {ALLERGIES.map((item, index) => (
                <CheckBox
                    key={index.toString()}
                    value={allergies[item]}
                    onPress={() => handleAllergyChange(item)}
                    text={item}
                    color="#EF767A"
                />
            ))}
            <Text style={styles.title}>
                DIETARY RESTRICTIONS
            </Text>
            {DIETARY_RESTRICTIONS.map((item, index) => (
                <CheckBox
                    key={index.toString()}
                    value={dietRestrictions[item]}
                    onPress={() => handleDietChange(item)}
                    text={item}
                    color="#EF767A"
                />
            ))}
            <Button style={styles.button} text="SAVE PROFILE" />
            <Button style={{ ...styles.button, marginBottom: 10 }} text="SHARE PROFILE" onPress={() => setModalVisible(true)} />
            {sharedProfiles.length ? (<Text style={styles.title}>
                SHARED PROFILES
            </Text>) : null
            }
            {sharedProfiles.map((item, index) => (
                <ProfileCard
                    key={index.toString()}
                    style={styles.profile}
                    text={item}
                    onClose={() => handleSharedProfile(item, true)}
                />
            ))}
            {pendingProfiles.length ? (<Text style={styles.title}>
                PENDING PROFILES
            </Text>) : null
            }
            {pendingProfiles.map((item, index) => (
                <ProfileCard
                    pending
                    key={index.toString()}
                    style={styles.profile}
                    text={item}
                    onClose={() => handlePendingProfile(item, true)}
                    onAccept={() => handlePendingProfile(item, false)}
                />
            ))}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <ShareModal onClose={() => setModalVisible(false)} />
            </Modal>
        </ScrollView>
    </SafeAreaView>);
}

export default UserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 8
    },
    button: {
        height: 40,
        alignSelf: "center",
        width: "70%",
        marginTop: 20,
    },
    profile: {
        height: 30,
        width: "100%",
        marginBottom: 10
    }
});