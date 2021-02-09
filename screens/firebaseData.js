import { useState } from 'react';
import firebase from 'firebase';
import { db } from '../firebase';

export async function getCategories () {
    console.log('GetCategories');
    let categoryList = []
    const snapshot = await firebase.firestore()
    .collection('Categories')
    .get()

    snapshot.forEach((doc) => {
        categoryList.push(doc.data());
    });
    console.log(categoryList);
    return(categoryList);
} 

export async function historyQuestions () {
    console.log('Getting Questions');
    let questionsHistory = []
    const snapshot = await firebase.firestore()
    .collection('Categories')
    .doc('History')
    .collection('questions')
    .get()

    snapshot.forEach((doc) => {
        questionsHistory.push(doc.data());
    });
    console.log(questionsHistory);
    return(questionsHistory);
}