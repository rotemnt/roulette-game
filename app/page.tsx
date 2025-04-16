import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const questions = {
  hot: [
    "מה הדבר הכי קטן שיכול להדליק אותך?",
    "מה היית רוצה שאעשה לך אם לא היו גבולות?",
    "איפה בגוף נוגעים בך וזה משבש לך את הדופק?",
    "אתה טיפוס של שליטה או כניעה?",
    "מה הפנטזיה הכי מצחיקה שאי פעם התחרמנת ממנה?"
  ],
  deep: [
    "איזה חלק בך הכי רוצה שיראו – אבל הכי קשה לך לחשוף?",
    "מתי לאחרונה הרגשת ממש מחובר למישהו – ולמה?",
    "באיזו סיטואציה אתה הכי אתה?",
    "אתה יותר מפחד להיפגע או להכאיב?",
    "תספר לי על רגע שבו הפתעת את עצמך לטובה."
  ],
  playful: [
    "אם הייתי קינוח – מה הייתי?",
    "מה השם הכי מצחיק שאי פעם קראת לחלק אינטימי?",
    "איזה שיר היית שם לסשן הכי סוער שלנו?",
    "מה הייתי מגלה עליך אם הייתי חוטפת לך את הטלפון עכשיו?",
    "אם היינו נתקעים במעלית ל-3 שעות – מה היה קורה שם?"
  ]
};

export default function RouletteGame() {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState({ player1: '', player2: '' });

  const spin = () => {
    const keys = Object.keys(questions);
    const randomCategory = keys[Math.floor(Math.random() * keys.length)];
    const randomQuestion = questions[randomCategory][Math.floor(Math.random() * questions[randomCategory].length)];
    setCategory(randomCategory);
    setQuestion(randomQuestion);
    setAnswers({ player1: '', player2: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <motion.h1 layout className="text-4xl mb-6 font-bold tracking-tight">זה הסיבוב שלך 🎲</motion.h1>

      {question ? (
        <Card className="w-full max-w-md bg-gray-900 text-white mb-6">
          <CardContent className="p-6 text-center text-xl">{question}</CardContent>
        </Card>
      ) : (
        <p className="mb-4">לחצו על הכפתור כדי לסובב את הרולטה ולקבל שאלה רנדומלית 🔥</p>
      )}

      <Button onClick={spin} className="bg-pink-600 hover:bg-pink-700 rounded-2xl text-lg px-8 py-4 shadow-lg">
        סובב רולטה
      </Button>

      {question && (
        <div className="mt-8 w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="השחקן/ית הראשון/ה עונה..."
            value={answers.player1}
            onChange={(e) => setAnswers({ ...answers, player1: e.target.value })}
            className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="text"
            placeholder="השחקן/ית השני/ה עונה..."
            value={answers.player2}
            onChange={(e) => setAnswers({ ...answers, player2: e.target.value })}
            className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-600"
          />
        </div>
      )}
    </div>
  );
}
