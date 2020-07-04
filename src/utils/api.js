import { AsyncStorage } from "react-native";
import { generateUID } from "./helper";

const FLASHCARDS_STORAGE_KEY = "flashcards_data";

function initialData() {
  return {
    "724mgp7hm68vzvg2amz1hq": {
      id: "724mgp7hm68vzvg2amz1hq",
      title: "Frontend",
      questions: [
        {
          question: "What does CSS stand for?",
          answer: "Cascading Style Sheets",
        },
        {
          question: "What does HTML stand for?",
          answer: "Hyper Text Markup Language",
        }
      ],
    },
    "636jgrwdbhf58lxznh9q79": {
      id: "636jgrwdbhf58lxznh9q79",
      title: "Backend",
      questions: [
        {
          question: "What does API stand for?",
          answer: "An application programming interface",
        },
        {
          question: "What is database?",
          answer: "A database is an organized collection of data, generally stored and accessed electronically from a computer system.",
        }
      ],
    },
  };
}

export async function getDecks() {
  try {
    const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
    if (results) {
      const data = JSON.parse(results);
      return data;
    } else {
      await AsyncStorage.setItem(
        FLASHCARDS_STORAGE_KEY,
        JSON.stringify(initialData())
      );
      return initialData();
    }
  } catch (error) {
    await AsyncStorage.setItem(
      FLASHCARDS_STORAGE_KEY,
      JSON.stringify(initialData())
    );
    return initialData();
  }
}

export async function saveDeckTitle(title) {
  const id = generateUID();
  const deck = {
    id: id,
    title: title,
    questions: [],
  };

  await AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [id]: deck,
    })
  );
  return deck;
}

export async function saveCardToDeck(deckId, card) {
  const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    const deck = data[deckId];
    deck.questions = deck.questions.concat([card]);
    await AsyncStorage.mergeItem(
      FLASHCARDS_STORAGE_KEY,
      JSON.stringify({
        [deckId]: deck,
      })
    );
    return card;
  }
}

export async function removeDeck(deckId) {
  const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[deckId];

    await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    return data;
  }
  return {};
}
