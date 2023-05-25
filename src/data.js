const data = [
    {
        quote: 'Do not go gentle into that good night. Rage, rage against the dying of light',
        author: 'Dylan Thomas',
    },
    {
        quote: 'I haven’t got it yet, but I’m hunting it and fighting for it, I want something serious, something fresh—something with soul in it! Onward, onward',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'The greatest good you can do for another, is not to share your own riches, but to reveal to him, his own',
        author: 'Benjamin Disraeli'
    },
    {
        quote: 'I have been a stranger here in my own land: All my life',
        author: 'Sophocles',
        context: 'Antigone'
    },
    {
        quote: 'You are on the eve of a complete victory. You can\'t go wrong - the world is behind you',
        author: 'Josephine Baker',
        context: 'Speech at the March on Washington for Jobs and Freedom (August 28, 1963)'
    },
    {
        quote: 'Now I am quietly waiting for the catastrophe of my personality to seem beautiful again, and interesting, and modern',
        author: 'Frank O\'Hara',
        context: 'Meditations in an Emergency'
    },
    {
        quote: 'Two roads diverged in a wood, and I -- I took the one less traveled by, and that has made all the difference',
        author: 'Robert Frost'
    },
    {
        quote: 'A woman must not depend upon the protection of a man, but must be taught to protect herself',
        author: 'Susan B. Anthony'
    },
    {
        quote: 'My soul has grown deep like the rivers',
        author: 'Langston Hughes'
    },
    {
        quote: 'Regardless of my transient joys, I am never free of a feeling of melancholy which somehow forms the base of my heart',
        author: 'Chopin',
        context: 'Quoted in Edward N. Waters, Frederic Chopin (London: Collier-Macmillan, 1963)'
    },
    {
        quote: 'Home is not where you were born; home is where all your attempts to escape cease',
        author: 'Naguib Mahfouz ',
    },
    {
        quote: 'Perhaps a sin that humbles you is better than a good deed that makes you arrogant',
        author: 'Hamza Yusuf'
    },
    {
        quote: 'Love is not affectionate feeling, but a steady wish for the loved person\'s ultimate good as far as it can be obtained',
        author: 'C.S Lewis',
    },
    {
        quote: 'And suddenly I wonder, "Where is the girl that I was last year? Two years ago? What would she think of me now"',
        author: 'Sylvia Plath',
        context: 'The Unabridged Journals of Sylvia Plath'
    },
    {
        quote: 'I feel there is nothing more truly artistic than to love people',
        author: 'Vincent Van Gough',
    },
    {
        quote: 'I am seeking, I am striving, I am in it with all my heart',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'When you grow up as a girl, the world tells you the things that you are supposed to be: emotional, loving, beautiful, wanted. And then when you are those things, the world tells you they are inferior: illogical, weak, vain, empty',
        author: 'Stevie Nicks'
    },
    {
        quote: 'I have learned that when sadness comes to visit me, all I can do is say “I see you.” I spend some time with it, get up, and say goodbye. I don’t push it away. I own it. And because I own it, I let it go',
        author: 'Carolina Zacaria'
    },
    {
        quote: 'Love looks not with the eyes but with the mind',
        author: 'William Shakespeare',
        context: 'A Midsummer Night\'s Dream'
    },
    {
        quote: 'I take great care of myself by carefully shutting myself away',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'Those who love you are not fooled by mistakes you have made or dark images you hold about yourself. They remember your beauty when you feel ugly; your wholeness when you are broken; your innocence when you feel guilty; and your purpose when you are confused',
        author: 'Uknown'
    },
    {
        quote: 'I simply wondered about the dead because their days had ended and I did not know how I would get through mine',
        author: 'James Baldwin',
        context: 'Giovanni\'s Room'
    },
    {
        quote: 'Be kind, for everyone you meet is fighting a hard battle.',
        author: 'Socrates'
    },
    {
        quote: 'There is no formula for success, except perhaps an unconditional acceptance of life and what it brings',
        author: 'Arthur Rubinstein'
    },
    {
        quote: 'People can\'t, unhappily, invent their mooring posts, their lovers and their friends, anymore than they can invent their parents. Life gives these and also takes them away and the great difficulty is to say Yes to life',
        author: 'James Baldwin',
        context: 'Giovanni\'s Room'
    },
    {
        quote: 'If we knew each other\'s secrets, what comforts we should find',
        author: 'John Churton Collins'
    },
    {
        quote: 'You don’t have a home until you leave it and then, when you have left it, you never can go back',
        author: 'James Baldwin',
        context: 'Giovanni\'s Room'
    },
    {
        quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing',
        author: 'Aristotle'
    },
    {
        quote: 'Go confidently in the direction of your dreams.  Live the life you have imagined',
        author: 'Henry David Thoreau'
    },
    {
        quote: 'Love was a country he knew nothing about',
        author: 'James Baldwin',
        context: 'Another Country'
    },
    {
        quote: 'At times it is not easy for me to take up living again',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'For me it was a kind of death and I was forced to keep living',
        author: 'Warsan Shire'
    },
    {
        quote: 'I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love',
        author: 'Mother Teresa',
    },
    {
        quote: 'Although the world is full of suffering, it is also full of overcoming it',
        author: 'Helen Keller',
    },
    {
        quote: 'I became insane, with long intervals of horrible sanity',
        author: 'Edgar Allan Poe',
    },
    {
        quote: 'The things we fear most have already happened to us',
        author: 'Robin Williams'
    },
    {
        quote: 'I try more and more to be myself, caring relatively little whether people approve or disapprove',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'I have loved to the point of madness; that which is called madness, that which to me, is the only sensible way to love',
        author: 'Francois Sagon',
    },
    {
        quote: 'So, here you are. Too foreign for home - too foreign for here. Never enough for both',
        author: 'Ijeoma Umebinyuo',
        context: 'Diaspora Blues'
    },
    {
        quote: 'If you truly love nature, you will find beauty everywhere',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'Do you want me to tell you something really subversive? Love is everything it\'s cracked up to be. That\'s why people are so cynical about it. It really is worth fighting for, being brave for, risking everything for. And the trouble is, if you don\'t risk anything, you risk even more',
        author: 'Erica Jong',
        context: 'Fear of Flying'
    },
    {
        quote: 'Night coming tenderly. Black like me',
        author: 'Langston Hughes',
    },
    {
        quote: 'Don\'t just pretend to love others. Really love them. Hate what is wrong. Hold tightly to what is good. Love each other with genuine affection, and take delight in honoring each other',
        author: 'Romans 12:9-10',
    },
    {
        quote: 'Love does not consist in gazing at each other, but in looking together in the same direction',
        author: 'Antoine de Saint-Exupéry',
    },
    {
        quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart',
        author: 'Helen Keller',
    },
    {
        quote: 'Love looks not with the eyes but with the mind',
        author: 'William Shakespeare',
    },
    {
        quote: 'When peoples care for you and cry for you, they can straighten out your soul',
        author: 'Langston Hughes',
    },
    {
        quote: 'To find yourself, think for yourself',
        author: 'Socrates',
    },
    {
        quote: 'Where you go I will go, and where you stay I will stay. May the Lord deal with me, be it ever so severely, if even death separates you and me',
        author: 'Ruth 1:16-17',
    },
    {
        quote: 'My heart is closing like a fist',
        author: 'Frank O\'Hara',
    },
];

export default data;