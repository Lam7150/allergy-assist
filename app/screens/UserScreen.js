import React, { useState } from "react";
import { SafeAreaView, Modal, ScrollView, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { add_profile, remove_profile, update_profile } from "../../state/actions/allergyActions";
import CheckBox from '../components/Checkbox';
import Button from "../components/Button"
import ProfileCard from "../components/ProfileCard"
import ShareModal from "../components/ShareModal"
import { ALLERGIES, DIETARY_RESTRICTIONS } from "../constants/Allergies";
import * as data from "../data/profiles.json"
const { shared_profiles, pending_profiles } = data

function UserScreen(props) {
    const { add_profile, remove_profile, update_profile } = props;
    const [allergies, setAllergies] = useState(() => { d = {}; ALLERGIES.forEach(a => d[a] = false); return d; })
    const [dietRestrictions, setDietRestrictions] = useState(() => { d = {}; DIETARY_RESTRICTIONS.forEach(a => d[a] = false); return d; })
    const [sharedProfiles, setSharedProfiles] = useState(shared_profiles)
    const [pendingProfiles, setPendingProfiles] = useState(pending_profiles)
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
        if (isClosed) {
            setSharedProfiles(sharedProfiles.filter(profile => profile.name != target.name))
            remove_profile(target.name)
        } else {
            setSharedProfiles([...sharedProfiles, target])
            add_profile([target.name, ...target.restrictions])
        }
    }

    function handlePendingProfile(target, isClosed) {
        setPendingProfiles(pendingProfiles.filter(profile => profile.name != target.name))
        if (!isClosed)
            handleSharedProfile(target, false)
    }

    function saveProfile() {
        const activeAllergies = Object.keys(allergies).filter(a => allergies[a]);
        const activeRestrictions = Object.keys(dietRestrictions).filter(d => dietRestrictions[d]);
        const allRestrictions = ["me"].concat(activeAllergies, activeRestrictions);
        update_profile(allRestrictions);
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
            <Button style={styles.button} text="SAVE PROFILE" onPress={() => saveProfile()} />
            <Button style={{ ...styles.button, marginBottom: 10 }} text="SHARE PROFILE" onPress={() => setModalVisible(true)} />
            {sharedProfiles.length ? (<Text style={styles.title}>
                SHARED PROFILES
            </Text>) : null
            }
            {sharedProfiles.map((item, index) => (
                <ProfileCard
                    key={index.toString()}
                    style={styles.profile}
                    text={item.name}
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
                    text={item.name}
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

const mapDispatchToProps = (dispatch) => ({
    add_profile: (profile) => dispatch(add_profile(profile)),
    remove_profile: (profile) => dispatch(remove_profile(profile)),
    update_profile: (profile) => dispatch(update_profile(profile)),
})

export default connect(null, mapDispatchToProps)(UserScreen);

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