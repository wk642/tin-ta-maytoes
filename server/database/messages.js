const MESSAGES = [
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
                              "result": "CONGRATS!!!!! If you love being burried in tomatoes! The tin-ta-maytoe came swirling through, with all the tomatoes dropping down from the sky, crushing your roof and filling your entire house with tomatoes. You eventually get smotthered in all the tomatoes Worst part of it, is you never even got to take a bite of that french toast.",
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


const gameData = {
  introQuestions: [
    {
      text: "What's your favorite way to spend a free weekend?",
      options: [
        {
          text: "Relaxing at home with a good book/movie",
          followUpQuestions: [
            { text: "What genre do you usually prefer?", answerPool: ["Fantasy", "Sci-Fi", "Mystery", "Romance"] },
            { text: "Do you prefer reading or watching?", answerPool: ["Reading", "Watching"] },
          ],
        },
        {
          text: "Getting active outdoors",
          followUpQuestions: [
            { text: "Do you enjoy individual or team sports more?", answerPool: ["Individual", "Team"] },
            { text: "What's your favorite outdoor activity?", answerPool: ["Hiking", "Cycling", "Swimming"] },
          ],
        },
        {
          text: "Socializing with friends",
          followUpQuestions: [
            { text: "What's your go-to activity when hanging out with friends?", answerPool: ["Going out to eat", "Playing games", "Having deep conversations"] },
            { text: "Do you prefer small gatherings or large parties?", answerPool: ["Small gatherings", "Large parties"] },
          ],
        },
      ],
    },
    {
      text: "What kind of food do you enjoy the most?",
      options: [
        {
          text: "Savory dishes",
          followUpQuestions: [
            { text: "Do you prefer spicy or mild flavors?", answerPool: ["Spicy", "Mild"] },
            { text: "What's your favorite type of cuisine?", answerPool: ["Italian", "Mexican", "Asian"] },
          ],
        },
        {
          text: "Sweet treats",
          followUpQuestions: [
            { text: "Do you prefer chocolate or fruity desserts?", answerPool: ["Chocolate", "Fruity"] },
            { text: "What's your favorite kind of baked good?", answerPool: ["Cake", "Cookies", "Pie"] },
          ],
        },
      ],
    },
    {
      text: "What's your preferred way to learn something new?",
      options: [
        {
          text: "Reading and research",
          followUpQuestions: [
            { text: "Do you prefer physical books or digital resources?", answerPool: ["Physical books", "Digital resources"] },
            { text: "What kind of topics are you most interested in learning about?", answerPool: ["Science", "History", "Art"] },
          ],
        },
        {
          text: "Hands-on experience",
          followUpQuestions: [
            { text: "Do you learn better by yourself or with others?", answerPool: ["By myself", "With others"] },
            { text: "What's a skill you'd like to learn through practice?", answerPool: ["Coding", "Cooking", "Playing an instrument"] },
          ],
        },
        {
          text: "Watching videos or lectures",
          followUpQuestions: [
            { text: "Do you prefer short-form or long-form content?", answerPool: ["Short-form", "Long-form"] },
            { text: "Who is your favorite type of educator?", answerPool: ["Entertaining", "Informative", "Interactive"] },
          ],
        },
      ],
    },
    {
      text: "What's your ideal travel destination like?",
      options: [
        {
          text: "A bustling city",
          followUpQuestions: [
            { text: "Do you prefer historical or modern cities?", answerPool: ["Historical", "Modern"] },
            { text: "What's the most important aspect of a city trip for you?", answerPool: ["Culture", "Food", "Nightlife"] },
          ],
        },
        {
          text: "A peaceful natural setting",
          followUpQuestions: [
            { text: "Do you prefer mountains or beaches?", answerPool: ["Mountains", "Beaches"] },
            { text: "What kind of activities do you enjoy in nature?", answerPool: ["Hiking", "Relaxing", "Wildlife watching"] },
          ],
        },
      ],
    },
  ],
};