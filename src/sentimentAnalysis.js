// sentimentAnalysis.js

export const analyzeSentiment = async (text) => {
    // Mock sentiment analysis function
    const sentiments = ['positive', 'negative', 'neutral'];
    return sentiments[Math.floor(Math.random() * sentiments.length)];
  };
  