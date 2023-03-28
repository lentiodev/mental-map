// src/MentalQuestions.js

import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const questions = [
  {
    question: "What is mental health?",
    answer:
      "Mental health refers to your emotional, psychological, and social well-being. It affects how you think, feel, and act, and plays an important role in your ability to handle stress, build relationships, and make choices.",
  },
  {
    question: "What do I do if the support doesn’t help?",
    answer:
      "If you find that the support you receive isn’t helping, consider discussing your concerns with a mental health professional, such as a therapist or psychiatrist, to explore other options.",
  },
  {
    question: "Can you prevent mental health problems?",
    answer:
      "While it may not be possible to prevent all mental health problems, there are steps you can take to build resilience and maintain your mental well-being. These include regular exercise, a healthy diet, sufficient sleep, stress management, and strong social connections.",
  },
  {
    question: "Are there cures for mental health problems?",
    answer:
      'While there may not be a definitive "cure" for all mental health problems, many conditions can be effectively managed and treated with therapy, medication, or a combination of both. Early intervention and proper support can significantly improve outcomes.',
  },
  {
    question: "What causes mental health problems?",
    answer:
      "Mental health problems can be caused by a variety of factors, including biological factors (such as genetics or brain chemistry), life experiences (such as trauma or abuse), and family history of mental health problems.",
  },
  {
    question: "What do I do if I’m worried about my mental health?",
    answer:
      "If you’re worried about your mental health, it’s important to seek help from a mental health professional, such as a therapist, counselor, or psychiatrist. They can help assess your situation and provide appropriate support and treatment.",
  },
  {
    question: "How do I know if I’m unwell?",
    answer:
      "Signs that you may be struggling with your mental health include persistent changes in your mood, thoughts, or behavior that interfere with your daily life. If you’re concerned about your mental well-being, it’s important to speak with a mental health professional.",
  },
  {
    question: "What should I do if I’m worried about a friend or relative?",
    answer:
      "If you’re concerned about a friend or relative’s mental health, try to provide support and encourage them to seek help from a mental health professional. Be empathetic and non-judgmental, and let them know that you care about their well-being.",
  },
  {
    question: "How do I deal with someone telling me what to do?",
    answer:
      "When dealing with someone who is telling you what to do, it’s important to set boundaries and communicate your feelings. Be assertive and express your needs and preferences, while also considering their perspective.",
  },
];

const MentalQuestions = () => {
  return (
    <Box
      sx={{
        mt: 8,
        backgroundColor: "#eefcfb",
        py: 4,
        width: "60%",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" align="center" mb={3}>
        Mental health questions
      </Typography>
      {questions.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            boxShadow: "none",
            borderColor: "#dcdcdc",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#5ce0d8" }} />}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default MentalQuestions;
