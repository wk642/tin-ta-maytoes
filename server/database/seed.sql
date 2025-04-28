INSERT INTO threads (id,favorites,created_at,completed_at,player_name) VALUES
	 (2,false,'2025-04-16 12:02:08.3076-05',NULL,'Winnie Wins'),
	 (4,false,'2025-04-16 12:02:40.857736-05',NULL,'Winnie Looses');
INSERT INTO questions (id,"text") VALUES
	 (5,'The tin-ta-maytoe, comes right above your french toast threatening to splatter tomatoes all over your french toast...'),
	 (4,'A tin-ta-maytoe has been spotted 2 streets south of you heading north...');
INSERT INTO choices (id,question_id,"text",value) VALUES
	 (3,4,'Make some french toast',1),
	 (5,4,'Grab the keys to your underground shelter',2),
	 (7,4,'Put your favorite show on',1),
	 (6,4,'Grab your car keys and load your family up into the car',2),
	 (8,5,'Use the plate to cover the French Toast',1),
	 (9,5,'You throw the french toast as far as you can, in the hopes that the tin-ta-maytoes will follow the french toast instead of attacking you.',1),
	 (10,5,'You threaten the tomatoes back saying that. you will cook it on the stove if it attacks you or your french toast',2),
	 (11,5,'You abandon the french toast and take cover immediately and hide in the bathroom',2);
INSERT INTO threadquestions (thread_id,question_id,choice_id,created_at,answered_at) VALUES
	 (2,4,5,'2025-04-16 12:18:14.107798-05',NULL),
	 (4,4,3,'2025-04-16 12:18:14.107798-05',NULL),
	 (4,5,NULL,'2025-04-16 12:18:14.107798-05',NULL);
