import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Test = (props) => {
	return (
		<Card>
			<CardSection>
				<Text>Testing the card</Text>
			</CardSection>

			<CardSection>
				<Text>Testing the card</Text>
			</CardSection>

			<CardSection>
				<Text>Testing the card</Text>
			</CardSection>
		</Card>
	);
};
export default Test;
