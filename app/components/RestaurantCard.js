import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { RESTAURANT_IMAGE } from "../utils/utils"
import { useNavigation } from '@react-navigation/native';
import { ALLERGIES, DIETARY_RESTRICTIONS } from "../constants/Allergies";
const TOTAL_RESTRICTIONS = ALLERGIES.length + DIETARY_RESTRICTIONS.length;

function RestaurantCard(props) {
    const navigation = useNavigation();
    const { data, restrictions } = props;
    const { name, distance, menu_items } = data;

    const get_number_allergic = (item) => {
        return (item in restrictions) ? restrictions[item].length : 0;
    }

    const num_edibles = () => {
        let edibles = menu_items.filter(item => !(item.allergens.some(a => get_number_allergic(a) != 0)))
        return edibles.length
    }

    const get_number_profiles_allergic = () => {
        let profiles_allergic = 0;
        Object.keys(restrictions).forEach(r => {
            let hasAllergicProfile = menu_items.filter(item => item.allergens.indexOf(r) != -1).length != menu_items.length
            profiles_allergic = Math.max(profiles_allergic, (hasAllergicProfile) ? restrictions[r].length : 0)
        })

        return profiles_allergic;
    }

    function edibleText() {
        let profileIsGroup = false;
        Object.keys(restrictions).forEach(r => { if (restrictions[r].length != 0 && restrictions[r].some(p => p != "me")) { profileIsGroup = true } })
        if (!profileIsGroup)
            return `${num_edibles()} items you can eat`;
        else
            if (menu_items.length == num_edibles())
                return "All your guests can eat here"
            else {
                let profiles = new Set();
                Object.keys(restrictions).forEach(r =>
                    restrictions[r].forEach(p => profiles.add(p))
                );
                return `${profiles.size - get_number_profiles_allergic()}/${profiles.size} guests can eat here`
            }
    }

    return (<TouchableOpacity style={styles.container} onPress={() => navigation.navigate("RestaurantScreen", { data: data })}>
        <Image source={RESTAURANT_IMAGE[name]} resizeMode="cover" style={styles.image} />
        <Text style={styles.name}>
            {name}
        </Text>
        <Text>
            {`${distance} miles away`}
        </Text>
        <Text>
            {edibleText()}
        </Text>
    </TouchableOpacity>);
}

const mapStateToProps = (state) => ({
    restrictions: state.restrictions
})

export default connect(mapStateToProps, null)(RestaurantCard);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        borderRadius: 2,
        backgroundColor: "#fff",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 }
    },
    image: {
        height: "60%",
        width: "100%",
        borderRadius: 2,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
    }
});