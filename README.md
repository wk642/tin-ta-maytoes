# tin-ta-maytoes

Welcome to the world of Tin-Ta-Maytoes! 
Currently availble [live](https://tin-ta-maytoes-client.onrender.com/): 
 - [ ] the mini game scenario mode version
Coming soon:
 - [ ] Story mode
   - [ ] Timed
   - [ ] Tornado Expert
- [ ] Change volume
- [ ] Change dark light mode

## How to run my project locally if you would like to contribute

1. Clone my project
2. In my project's directroy run `npm install`
3. To create the database and tables `npm run loadDB`
4. To add the questions and choices `npm run seed`
5. To run it locally run `npm run dev`

## Demo of what is happening right now

![demo](https://github.com/user-attachments/assets/325f7c19-bacb-4a7d-92d2-61c882e95908)

## Requirements

- [ ] use Postgres, express, react, node.js
- [ ] 2 tables in db
- [ ] 1 external api integration
- [ ] test all components
- [ ] readme
- [ ] link to live site
- [ ] install and setup instructions
- [ ] screenshot
- [ ] deploy app
- [ ] 50 commits
- [ ] 3 branches
- [ ] error handling
- [ ] use github issues and milestones
- [ ] accessibility
- [ ] high contrast (for visual support)
- [ ] screen reader accessible
- [ ] aria labels and attributes
- [ ] test how it looks when zoomed in

## Week 0 milestones

- [ ] pick your project
- [ ] mvp
- [ ] features
- [ ] user flows
- [ ] wireframes
- [ ] components
- [ ] one sentence project pitch (project description)
- [ ] list of tools and frameworks (in project requirements)
- [ ] list api chosen
- [ ] technical risks
- [ ] style guide
- [ ] db schema
- [ ] use github kanban for project management
- [ ] prepare 3 minute presentation
- [ ] add GH description to repo
- [ ] invite mentor and KR to collab

## Week 1

- [ ] create black express and react app
- [ ] deploy to render
- [ ] connect db and 1 api
- [ ] create 2 components
- [ ] create 1 pull requests
- [ ] have mentor and peer review PR

## week 2

- [ ] test components
- [ ] finish mvp
- [ ] create 1 pull requests
- [ ] have mentor and peer review PR

## week 3

- [ ] git checkout -b complete_mvp
- [ ] prepare demo
- [ ] add screenshot
- [ ] create 1 pull requests
- [ ] have mentor and peer review PR

## week 4

- [ ] present
- [ ] record

## MVP

- [ ] game
- [ ] questions asked to user with right or wrong answers
- [ ] wrong answer is +1
- [ ] right answer is +2
- [ ] after 3 questions you get result
- [ ] if score is even, you survive,
- [ ] if score is odd, you perish
- [ ] schema:
      | MVP QUESTIONS Table | MVP ROUNDS Table |
      | --------------------- | --------------------- |
      | id UUID [PK] | id UUID [PK] |
      | qesution TEXT | points INTEGER |
      | incorrect answer TEXT | created_at TIMESTAMP |
      | correct answer TEXT | |
      | created_at TIMESTAMP | |

## Extensions

1. Tornado expert

- When there is a weather question, people come to you. Your job is to give people insturctions on what to do.
- Give instructions to people on what to do to survive or perishment.
- It is entirely up to you on what kind of person you become. You can do your best to save everyone, or you can intentionally get them in trouble, maybe because they are your arch nemsis.
  - Within this mode, user can play
  - timed mode:
    - Within a certain number of minutes, you have to save as many people as you can.
  - story mode:
    - You recently purchased a used phone, you plugged it in, and all of a sudden, your phone is blowing up! Ding! Ding! Ding! Ding! Ding! Ding!....
    - You check your phone and you were gettin a bunch of notifications about upcoming severe weather warnings. You look at your messages and theres 10 unread messages from 10 different people.
    - You open it up and see that the messages are people asking for advice on what to do in this situation (tornado).
    - You have no clue what to do in a tornado, but it is up to you to decide the fate of everyone in this town.
    - As you help people you will collect different things, to complete the main mission
  - Main mission:
    - You woke up in an empty town to start in the middle of a field. You look around and all you see is the nature. You do not see that there are anyone else (yet). You start exploring and realize that you are in a new place, and you are starting to develop a new life here. You have to collect different things by helping others survive the tin ta maytoes to start building a new life and meet new people as you go. All while you learn how to go from 0 to expert as a tornado expert. Are you going to be an expert that saves a lot of lives? or are you going to get forced out of the town and have to find yourself a new home?
- The interface will be like our text messages on your phone.
- db updates

| MVP QUESTIONS Table   | MVP ROUNDS Table     | CHARACTERS table | COLLECTION table | MAPS table      | TIME MODE table      |
| --------------------- | -------------------- | ---------------- | ---------------- | --------------- | -------------------- |
| id UUID [PK]          | id UUID [PK]         | id UUID [PK]     | id UUID [PK]     | id UUID [PK]    | id UUID              |
| qesution TEXT         | points INTEGER       | name VARCHAR     | item TEXT        | levels INTERGER | created_at TIMESTAMP |
| incorrect answer TEXT | created_at TIMESTAMP | alive BOOLEAN    | amount INTERGER  | name VARCHAR    |                      |
| correct answer TEXT   |                      |                  |                  |                 |                      |
| created_at TIMESTAMP  |                      |                  |                  |                 |                      |

- **_USER STORIES EXTENTIONS: TORNADO EXPERT-TIMED MODE_**

  - **SCENE 1**
    > As a user,  
    > When I select "Timed Mode",  
    > Then load up a list of "messages"
  - **SCENE 2**
    > As a user,  
    > When I select one message from the list,  
    > Then open up the message
  - **\*SCENE 3**
    > As a user,  
    > When I click on an answer,
    > Then I will see the question and answer selected
  - **\*SCENE 4**
    > As a user,  
    > When I click the back button,  
    > Then I will be back at the list of messages

- components updates
- endpoint updates
- features

  - dark mode
  - new user/returning user
  - flashlight story line

- different game modes
  - tornado expert
    user logs in
    local or google oauth
    user has levels, saved data
    their user account has levels and achievements

play out scenarios
can try to save peopl
can try to harm people
person in tornado trying to save the towsnpeople
2D guy running around
play as tintamato instead
schema
user table with auth
question table
add category

## Attributions

- [ ] [Animated icons](https://animatedicons.co/)
