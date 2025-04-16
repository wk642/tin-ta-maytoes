// questions - have 1 or more options
// answers - player's selection of options in threads
// options - 1 or more for each question, with follow up questions
// threads - rounds of play, with a list of previously answered questions
const MESSAGES = [
  {
    "id": 0,
    "question": "A tin-ta-maytoe has been spotted 2 streets south of you heading north...",
    "options": [
      {
        "id": 0,
        "answer_text": "Make some french toast",
        "value": 1,
        "followup": 1
      },
      {
        "id": 1,
        "answer_text": "Grab the keys to your underground shelter",
        "value": 2,
        "followup": 3
      },
      {
        "id": 2,
        "answer_text": "Grab the keys to your underground shelter",
        "value": 2,
        "followup": 3
      },
    ]
  },
  {
    "id": 1,
    "question": "The tin-ta-maytoe, comes right above your french toast threatening to splatter tomatoes all over your french toast...",
    "options": [
      {
        "answer_text": "Use your plate to cover the French Toast",
        "isCorrect": false,
        "followup": 2
      },
    ]
  },
];

const MESSAGESold = [
  {
    // questions
      // category: intro questions
      "intro-question": [
        {
          "question": "A tin-ta-maytoe has been spotted 2 streets south of you heading north...",
          "options": [
            {
              "answer": "Make some french toast",
              "correct_answer": false,
              "followup_question": [
                {
                  "question": "The tin-ta-maytoe, comes right above your french toast threatening to splatter tomatoes all over your french toast...",
                  "options": [
                    {
                      "answer": "Use your plate to cover the French Toast",
                      "correct_answer": false,
                      "options": [
                        {
                          "survive": [
                            {
                              "result": [
                                "As the tomatoes start attacking you and your house and french toast. You made a last minute audible call, and decided to let the french toasts to fend for themselves, while you use the pan as a shield from the tomatoes and smashing these tomatoes up, and using the frying pan also as a paddle and paddle yourself through a sea of tomatoes until you get to a tomatoe free part of land.", 
                                
                                "You did nto expect the tomatoes start attacking so quickly. Luckily, you are right next to the door to the underground bunker, so you dive right into it, might have hit your head a little on the way down but you will survive and shut the storm door right before it got a little too crazy."
                              ] 
                            }
                          ],
                          "perish": [ 
                            {
                              "result": [
                                "CONGRATS!!!!! If you love being burried in tomatoes! The tin-ta-maytoe came swirling through, with all the tomatoes dropping down from the sky, crushing your roof and filling your entire house with tomatoes. You eventually get smotthered in all the tomatoes Worst part of it, is you never even got to take a bite of that french toast.",

                                "You tried using the french toast as a  shield, but the tomatoes broke right through it. A 6000lb tomatoes came flying down, hitting you right in the head, and you went to sleep and never woke up again."
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
      // questions after answers
    // answers
      // correct answer
      // incorrect answer
    // results    
  }
]