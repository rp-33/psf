import React from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';
import {
	H1,
	Container
} from 'native-base';
import Button from '../../components/Button';

const Home = ({navigation})=>{

	const handleNavigation = (root)=>navigation.navigate(root)

	return(
		<Container style = {styles.ctn}>
			<View style={styles.ctnTitle}>
				<H1 >Bienvenidos a PSF</H1>
			</View>
			<View style={styles.ctnImg}>
				<Image 
					source ={require('../../assets/images/home.png')} 
					style = {styles.img}
				/>  
			</View> 	
			<View>
				<View style={styles.btn}>
					<Button 
						title ="entrar"
						onPress = {()=>handleNavigation('Login')}
					/>
				</View>
				<View style={styles.btn}>
					<Button 
						title ="Registrarme"
						onPress = {()=>handleNavigation('Signup')}
					/>
				</View>
			</View>
		</Container>
	)
}

const styles = StyleSheet.create({
	ctn:{
		paddingHorizontal:20,
		justifyContent:'center'
	},
	btn:{
		marginTop:20
	},
	ctnImg:{
		width:'100%',
		height : 200
	},
	img:{
		width:'100%',
		height:'100%'
	},
	ctnTitle:{
		alignItems:'center'
	}
})

export default Home;