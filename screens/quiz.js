import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState([]);
    const [ques, setQues] = useState(0);

    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
    };

    useEffect(() => {
        getQuiz();
    }, []);

    const handleNext = () => {
        setQues((prevQues) => (prevQues + 1 < questions.length ? prevQues + 1 : prevQues));
    };

    const handleSkip = () => {
        handleNext(); // Gleiche Funktionalität wie "Next", aber speziell für das Überspringen
    };

    return (
      <View style={styles.container}>
          {questions.length > 0 && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>{questions[ques].question}</Text>
            </View>
            <View style={styles.options}>
              {questions[ques].incorrect_answers.concat(questions[ques].correct_answer).map((option, index) => (
                <TouchableOpacity key={index} style={styles.optionButton}>
                  <Text style={styles.option}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.button} onPress={handleSkip}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result")}>
                <Text style={styles.buttonText}>END</Text>
              </TouchableOpacity>
            </View>
          </View>
          )}
      </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#6930C3",
    padding: 12,
    paddingHorizontal: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: 'white',
  },
  question: {
    fontSize: 24,
    fontWeight: '600',
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#5e60ce',
    borderRadius: 16,
    paddingHorizontal: 12,
  },
  parent:{
    height: '100%'
  }
});