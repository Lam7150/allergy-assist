import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { RESTAURANT_IMAGE } from "../utils/utils"
import { useNavigation } from '@react-navigation/native';

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

    return (<TouchableOpacity style={styles.container} onPress={() => navigation.navigate("RestaurantScreen", { data: data })}>
        <Image source={RESTAURANT_IMAGE[name]} resizeMode="cover" style={styles.image} />
        <Text style={styles.name}>
            {name}
        </Text>
        <Text>
            {`${distance} miles away`}
        </Text>
        <Text>
            {`${num_edibles()} items you can eat`}
        </Text>
    </TouchableOpacity>);
}

const mapStateToProps = (state) => ({
    restrictions: state.restrictions
})

export default connect(mapStateToProps)(RestaurantCard);

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