export default async function getQuotes() {
    const quotes = [
        {
            "q": "Learn the rules like a pro, so you can break them like an artist.",
            "a": "Pablo Picasso",
            "c": "65",
            "h": "<blockquote>&ldquo;Learn the rules like a pro, so you can break them like an artist.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
        },
        {
            "q": "Change will not come if we wait for some other person, or if we wait for some other time.",
            "a": "Barack Obama",
            "c": "89",
            "h": "<blockquote>&ldquo;Change will not come if we wait for some other person, or if we wait for some other time.&rdquo; &mdash; <footer>Barack Obama</footer></blockquote>"
        },
        {
            "q": "If you do the work you get rewarded. There are no shortcuts in life.",
            "a": "Michael Jordan",
            "c": "68",
            "h": "<blockquote>&ldquo;If you do the work you get rewarded. There are no shortcuts in life.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>"
        },
        {
            "q": "Take care of your cents: dollars will take care of themselves.",
            "a": "Thomas Jefferson",
            "c": "62",
            "h": "<blockquote>&ldquo;Take care of your cents: dollars will take care of themselves.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"
        },
        {
            "q": "The most wasted day of all is that on which we have not laughed.",
            "a": "Nicolas Chamfort",
            "c": "64",
            "h": "<blockquote>&ldquo;The most wasted day of all is that on which we have not laughed.&rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>"
        },
        {
            "q": "The only time you run out of chances is when you stop taking them.",
            "a": "Unknown",
            "c": "66",
            "h": "<blockquote>&ldquo;The only time you run out of chances is when you stop taking them.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
        },
        {
            "q": "The most important single ingredient in the formula of success is knowing how to get along with people.",
            "a": "Theodore Roosevelt",
            "c": "103",
            "h": "<blockquote>&ldquo;The most important single ingredient in the formula of success is knowing how to get along with people.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>"
        },
        {
            "q": "The harder the conflict, the greater the triumph. ",
            "a": "George Washington",
            "c": "50",
            "h": "<blockquote>&ldquo;The harder the conflict, the greater the triumph. &rdquo; &mdash; <footer>George Washington</footer></blockquote>"
        },
        {
            "q": "We may not be able to stop evil in the world, but how we treat one another is entirely up to us.",
            "a": "Barack Obama",
            "c": "96",
            "h": "<blockquote>&ldquo;We may not be able to stop evil in the world, but how we treat one another is entirely up to us.&rdquo; &mdash; <footer>Barack Obama</footer></blockquote>"
        },
        {
            "q": "You don't need a weatherman to know which way the wind blows.",
            "a": "Bob Dylan",
            "c": "61",
            "h": "<blockquote>&ldquo;You don't need a weatherman to know which way the wind blows.&rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>"
        },
        {
            "q": "A man who cannot tolerate small misfortunes can never accomplish great things.",
            "a": "Chinese Proverb",
            "c": "78",
            "h": "<blockquote>&ldquo;A man who cannot tolerate small misfortunes can never accomplish great things.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
        },
        {
            "q": "Dream big and dare to fail.",
            "a": "Norman Vaughan",
            "c": "27",
            "h": "<blockquote>&ldquo;Dream big and dare to fail.&rdquo; &mdash; <footer>Norman Vaughan</footer></blockquote>"
        },
        {
            "q": "Thoughts become things. If you see it in your mind, you will hold it in your hand.",
            "a": "Bob Proctor",
            "c": "82",
            "h": "<blockquote>&ldquo;Thoughts become things. If you see it in your mind, you will hold it in your hand.&rdquo; &mdash; <footer>Bob Proctor</footer></blockquote>"
        },
        {
            "q": "Every act of creation is first an act of destruction.",
            "a": "Pablo Picasso",
            "c": "53",
            "h": "<blockquote>&ldquo;Every act of creation is first an act of destruction.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
        },
        {
            "q": "There is nothing quite so tragic as a young cynic.",
            "a": "Maya Angelou",
            "c": "50",
            "h": "<blockquote>&ldquo;There is nothing quite so tragic as a young cynic.&rdquo; &mdash; <footer>Maya Angelou</footer></blockquote>"
        },
        {
            "q": "Everyone sees what you appear to be, few experience what you really are.",
            "a": "Niccolo Machiavelli",
            "c": "72",
            "h": "<blockquote>&ldquo;Everyone sees what you appear to be, few experience what you really are.&rdquo; &mdash; <footer>Niccolo Machiavelli</footer></blockquote>"
        },
        {
            "q": "I'd rather welcome change than cling to the past.",
            "a": "Robert Kiyosaki",
            "c": "49",
            "h": "<blockquote>&ldquo;I'd rather welcome change than cling to the past.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"
        },
        {
            "q": "Do not pray for an easy life, pray for the strength to endure a difficult one.  ",
            "a": "Bruce Lee",
            "c": "80",
            "h": "<blockquote>&ldquo;Do not pray for an easy life, pray for the strength to endure a difficult one.  &rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>"
        },
        {
            "q": "Failure is an option here. If things are not failing, you are not innovating enough.",
            "a": "Elon Musk",
            "c": "84",
            "h": "<blockquote>&ldquo;Failure is an option here. If things are not failing, you are not innovating enough.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
        },
        {
            "q": "Don't be pushed by your problems; be led by your dreams.",
            "a": "Unknown",
            "c": "56",
            "h": "<blockquote>&ldquo;Don't be pushed by your problems; be led by your dreams.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
        },
        {
            "q": "Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.",
            "a": "Steve Maraboli",
            "c": "149",
            "h": "<blockquote>&ldquo;Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>"
        },
        {
            "q": "Your mind will make you rich or poor, depending on the use you put to it.",
            "a": "Brian Tracy",
            "c": "73",
            "h": "<blockquote>&ldquo;Your mind will make you rich or poor, depending on the use you put to it.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
        },
        {
            "q": "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
            "a": "Zig Ziglar",
            "c": "87",
            "h": "<blockquote>&ldquo;Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
        },
        {
            "q": "It still holds true that man is most uniquely human when he turns obstacles into opportunities.",
            "a": "Eric Hoffer",
            "c": "95",
            "h": "<blockquote>&ldquo;It still holds true that man is most uniquely human when he turns obstacles into opportunities.&rdquo; &mdash; <footer>Eric Hoffer</footer></blockquote>"
        },
        {
            "q": "Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution.",
            "a": "Kahlil Gibran",
            "c": "109",
            "h": "<blockquote>&ldquo;Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution.&rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>"
        },
        {
            "q": "Character is doing what you don't want to do but know you should do.",
            "a": "Joyce Meyer",
            "c": "68",
            "h": "<blockquote>&ldquo;Character is doing what you don't want to do but know you should do.&rdquo; &mdash; <footer>Joyce Meyer</footer></blockquote>"
        },
        {
            "q": "Being entirely honest with oneself is a good exercise.",
            "a": "Sigmund Freud",
            "c": "54",
            "h": "<blockquote>&ldquo;Being entirely honest with oneself is a good exercise.&rdquo; &mdash; <footer>Sigmund Freud</footer></blockquote>"
        },
        {
            "q": "Anything you may hold firmly in your imagination can be yours.",
            "a": "William James",
            "c": "62",
            "h": "<blockquote>&ldquo;Anything you may hold firmly in your imagination can be yours.&rdquo; &mdash; <footer>William James</footer></blockquote>"
        },
        {
            "q": "If you go out looking for friends, you're going to find they are very scarce. If you go out to be a friend, you'll find them everywhere.",
            "a": "Zig Ziglar",
            "c": "136",
            "h": "<blockquote>&ldquo;If you go out looking for friends, you're going to find they are very scarce. If you go out to be a friend, you'll find them everywhere.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
        },
        {
            "q": "We become what we believe.",
            "a": "Lolly Daskal",
            "c": "26",
            "h": "<blockquote>&ldquo;We become what we believe.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"
        },
        {
            "q": "Instead of worrying about what you cannot control, shift your energy to what you can create.",
            "a": "Roy T. Bennett",
            "c": "92",
            "h": "<blockquote>&ldquo;Instead of worrying about what you cannot control, shift your energy to what you can create.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
        },
        {
            "q": "Leadership starts at the top.",
            "a": "Morgan Wootten",
            "c": "29",
            "h": "<blockquote>&ldquo;Leadership starts at the top.&rdquo; &mdash; <footer>Morgan Wootten</footer></blockquote>"
        },
        {
            "q": "The essence of the Way is detachment.",
            "a": "Bodhidharma",
            "c": "37",
            "h": "<blockquote>&ldquo;The essence of the Way is detachment.&rdquo; &mdash; <footer>Bodhidharma</footer></blockquote>"
        },
        {
            "q": "There is no path to Happiness. Happiness is the path.",
            "a": "Dan Millman",
            "c": "53",
            "h": "<blockquote>&ldquo;There is no path to Happiness. Happiness is the path.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>"
        },
        {
            "q": "Obstacles don't block the path, they are the path.",
            "a": "Zen Proverb",
            "c": "50",
            "h": "<blockquote>&ldquo;Obstacles don't block the path, they are the path.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>"
        },
        {
            "q": "The most important things are the hardest to say.",
            "a": "Stephen King",
            "c": "49",
            "h": "<blockquote>&ldquo;The most important things are the hardest to say.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>"
        },
        {
            "q": "Yesterday is gone. Tomorrow has not yet come. We have only today.",
            "a": "Mother Teresa",
            "c": "65",
            "h": "<blockquote>&ldquo;Yesterday is gone. Tomorrow has not yet come. We have only today.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>"
        },
        {
            "q": "In order for you to be the BEST you can be for others, first you must be BEST for yourself.",
            "a": "Jeffrey Gitomer",
            "c": "91",
            "h": "<blockquote>&ldquo;In order for you to be the BEST you can be for others, first you must be BEST for yourself.&rdquo; &mdash; <footer>Jeffrey Gitomer</footer></blockquote>"
        },
        {
            "q": "We tend to live up to our expectations.",
            "a": "Earl Nightingale",
            "c": "39",
            "h": "<blockquote>&ldquo;We tend to live up to our expectations.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>"
        },
        {
            "q": "Life is a long lesson in humility. ",
            "a": "James Matthew Barrie",
            "c": "35",
            "h": "<blockquote>&ldquo;Life is a long lesson in humility. &rdquo; &mdash; <footer>James Matthew Barrie</footer></blockquote>"
        },
        {
            "q": "If you think adventure is dangerous, try routine; it is lethal.",
            "a": "Paulo Coelho",
            "c": "63",
            "h": "<blockquote>&ldquo;If you think adventure is dangerous, try routine; it is lethal.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
        },
        {
            "q": "You have to give up some of the old so that you can make room for the new.",
            "a": "Yanni",
            "c": "74",
            "h": "<blockquote>&ldquo;You have to give up some of the old so that you can make room for the new.&rdquo; &mdash; <footer>Yanni</footer></blockquote>"
        },
        {
            "q": "Be grateful for what you have now, and nothing should be taken for granted.",
            "a": "Roy T. Bennett",
            "c": "75",
            "h": "<blockquote>&ldquo;Be grateful for what you have now, and nothing should be taken for granted.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
        },
        {
            "q": "Always seek out the seed of triumph in every adversity.",
            "a": "Og Mandino",
            "c": "55",
            "h": "<blockquote>&ldquo;Always seek out the seed of triumph in every adversity.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>"
        },
        {
            "q": "Even when a friend does something you do not like, he continues to be your friend. ",
            "a": "Genghis Khan",
            "c": "83",
            "h": "<blockquote>&ldquo;Even when a friend does something you do not like, he continues to be your friend. &rdquo; &mdash; <footer>Genghis Khan</footer></blockquote>"
        },
        {
            "q": "Hardly anybody recognizes the most significant moments of their life at the time they happen.",
            "a": "W.P. Kinsella",
            "c": "93",
            "h": "<blockquote>&ldquo;Hardly anybody recognizes the most significant moments of their life at the time they happen.&rdquo; &mdash; <footer>W.P. Kinsella</footer></blockquote>"
        },
        {
            "q": "The way we feel is the direct result of what we think.",
            "a": "Peter A. Cohen",
            "c": "54",
            "h": "<blockquote>&ldquo;The way we feel is the direct result of what we think.&rdquo; &mdash; <footer>Peter A. Cohen</footer></blockquote>"
        },
        {
            "q": "Make no small plans for they have no power to stir the soul.",
            "a": "Niccolo Machiavelli",
            "c": "60",
            "h": "<blockquote>&ldquo;Make no small plans for they have no power to stir the soul.&rdquo; &mdash; <footer>Niccolo Machiavelli</footer></blockquote>"
        },
        {
            "q": "Make peace with your inner turmoil.",
            "a": "Unknown",
            "c": "35",
            "h": "<blockquote>&ldquo;Make peace with your inner turmoil.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
        },
        {
            "q": "The biggest and only critic lives in your perception of people's perception of you rather than people's perception of you.",
            "a": "Criss Jami",
            "c": "122",
            "h": "<blockquote>&ldquo;The biggest and only critic lives in your perception of people's perception of you rather than people's perception of you.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
        }
    ]

    await new Promise(resolve => setTimeout(resolve, 3000))

    return quotes
}