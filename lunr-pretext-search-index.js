var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  math.unl.edu   copyright  "
},
{
  "id": "prob-axioms",
  "level": "1",
  "url": "prob-axioms.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Axioms of Probability",
  "body": " The Axioms of Probability  Intuition can mislead us, particularly in probability, so we make an effort to be careful from the start.  But let's motivate the definition and consider an example or two before we give it precisely. To describe an experiment or trial with random outcomes, we need three things.     A sample space  , the set of all possible outcomes .    A family of permissible events . (It is less obvious that we need this.) By we mean the powerset of .    An assignment of probabilities (numbers) to events.       Toss a fair coin 3 times. What is the probability that you see exactly two heads?    What are the possible outcomes of this experiment? to be finished      My neighbor and I each leave home, independently, between 8 and 9am, where any time is equally likely. What is the probability that she leaves at least 20 minutes before I do?         A probability measure  on , where is a set and is a -field of subsets of , is a function satisfying the following properties.         is countably additive , meaning that for any countably infinite list of pairwise disjoint ( implies ) members of , we have        The two conditions in together with the fact that for every are often called the three Axioms of Probability.    A collection of subsets of is a -field if it satisfies the following three conditions.       If then ( closure under countable unions ).   If then .       "
},
{
  "id": "example-1",
  "level": "2",
  "url": "prob-axioms.html#example-1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Toss a fair coin 3 times. What is the probability that you see exactly two heads?    What are the possible outcomes of this experiment? to be finished   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "prob-axioms.html#example-2",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  My neighbor and I each leave home, independently, between 8 and 9am, where any time is equally likely. What is the probability that she leaves at least 20 minutes before I do?      "
},
{
  "id": "def-prob-space",
  "level": "2",
  "url": "prob-axioms.html#def-prob-space",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  A probability measure  on , where is a set and is a -field of subsets of , is a function satisfying the following properties.         is countably additive , meaning that for any countably infinite list of pairwise disjoint ( implies ) members of , we have       "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "prob-axioms.html#definition-2",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  A collection of subsets of is a -field if it satisfies the following three conditions.       If then ( closure under countable unions ).   If then .      "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Conditional probability and independence",
  "body": " Conditional probability and independence   Conditional Probability    If then the conditional probability of given , written , is the quantity     Note that the rearranged form of the equation can be useful.    In September 40% of days are warm and the rest are cool. On warm days there is a 60% chance of rain; on cool days there is a 30% chance.   What is the probability that it will rain on a September day?    What is the probability that it is warm, given that it is raining?             The Law of Total Probability   Suppose that events partition . Then for any event we have       Independence    Events and in a probability space are independent if .  More generally, events , , are mutually independent if for any finite subset we have The are said to be pairwise independent if for any distinct indices the two events and are independent.        Notice that . So, as long as and the independence of and is equivalent to either or ; that is, information about either event doesn't change the probability of the other.    Independence is not the same as disjointness; independent events and may or may not satisfy .        Roll two fair 6-sided dice. Let denote the event that the first roll is a 3, denote the event that the second roll is a 4, and denote the event that the sum of the two rolls equals 7.  The events and are certainly independent: of the 36 possible outcomes, 6 are in and 6 are in ; and exactly 1 is common to and .  Show that the three events , , and are pairwise but not mutually independent.    That and are independent is explained in the statement of the example. For and , first notice that . Then notice that and so we have A similar argument shows that and are independent.  But , so the three events are not mutually independent:       Draw one card from a standard 52-card deck. Show that suit is independent of rank; for example, show that drawing a jack is independent of drawing a heart.    The probability of drawing a jack is , and the probability of drawing a heart is . The probability of drawing the Jack of Hearts is .     "
},
{
  "id": "def-conditional-prob",
  "level": "2",
  "url": "section-2.html#def-conditional-prob",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  If then the conditional probability of given , written , is the quantity    "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-2.html#example-3",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  In September 40% of days are warm and the rest are cool. On warm days there is a 60% chance of rain; on cool days there is a 30% chance.   What is the probability that it will rain on a September day?    What is the probability that it is warm, given that it is raining?           "
},
{
  "id": "thm-law-total-prob",
  "level": "2",
  "url": "section-2.html#thm-law-total-prob",
  "type": "Theorem",
  "number": "1.2.3",
  "title": "The Law of Total Probability.",
  "body": " The Law of Total Probability   Suppose that events partition . Then for any event we have    "
},
{
  "id": "def-independence",
  "level": "2",
  "url": "section-2.html#def-independence",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  Events and in a probability space are independent if .  More generally, events , , are mutually independent if for any finite subset we have The are said to be pairwise independent if for any distinct indices the two events and are independent.   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-2.html#remark-1",
  "type": "Remark",
  "number": "1.2.5",
  "title": "",
  "body": "    Notice that . So, as long as and the independence of and is equivalent to either or ; that is, information about either event doesn't change the probability of the other.    Independence is not the same as disjointness; independent events and may or may not satisfy .     "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-2.html#example-4",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Roll two fair 6-sided dice. Let denote the event that the first roll is a 3, denote the event that the second roll is a 4, and denote the event that the sum of the two rolls equals 7.  The events and are certainly independent: of the 36 possible outcomes, 6 are in and 6 are in ; and exactly 1 is common to and .  Show that the three events , , and are pairwise but not mutually independent.    That and are independent is explained in the statement of the example. For and , first notice that . Then notice that and so we have A similar argument shows that and are independent.  But , so the three events are not mutually independent:    "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-2.html#example-5",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": "  Draw one card from a standard 52-card deck. Show that suit is independent of rank; for example, show that drawing a jack is independent of drawing a heart.    The probability of drawing a jack is , and the probability of drawing a heart is . The probability of drawing the Jack of Hearts is .   "
},
{
  "id": "sec-more-examples",
  "level": "1",
  "url": "sec-more-examples.html",
  "type": "Section",
  "number": "1.3",
  "title": "More Examples",
  "body": " More Examples   Poker hands   A standard deck of cards (for the purposes of this class) comprises 52 cards. Each card has a rank and a suit . The 13 possible ranks are Ace, 2 10, Jack, Queen, and King, and the 4 possible suits are hearts ♥️, diamonds ♦️, spades ♠️, and clubs ♣️. Each possible pairing of rank and suit is realized in exactly one card.  From a standard deck of 52 cards draw a 5-card hand. (Both the deck and the hand are thought of as sets , so order is irrelevant.)     What is the probability that your hand is a full house , i.e., takes the form AAABB where A and B are different ranks? (E.g. three 3s and two Queens makes a full house, no matter what the suits of the cards are.)    What is the probability that you hold two pairs , i.e., ranks AABBC where A, B, and C represent different ranks? (E.g. 3377K is two pairs, no matter what the suits, but 3337K is three of a kind.)       There are many ways to count full houses, but the simplest is probably to choose the two ranks first, first the rank of the triplet and then the rank of the pair. There are 13 ways of choosing the rank A of the triplet, leaving 12 possibilities for the rank B of the pair. Then there are possible triplets of cards of rank A and possible pairs of cards of rank B. We can now compute the total probability:   Two pairs: again, it is probably simplest to choose the ranks A, B, and C first. But here we have an overcounting problem, since there is symmetry in A and B. So there are many ways of choosing the three ranks A, B, and C, where the division by 2 represents the fact that 22JJA and JJ22A give the same choice. Once we have chosen the three ranks, we have many ways to choose cards of these ranks, so this is our total:      Birthdays   There are 28 students in the class. What is the probability that two of you chosen at random share a birthday?  (You may make the simplifying assumptions that leap years don't exist and that birthdays are uniformly distributed.)    There are possible outcomes, each of which is equally likely. This is a good example where counting the complement works well. That is, instead of counting the event we are asked to count, we will count its complement, the event that no two students share a birthday.  The number of ways of assigning 28 distinct birthdays to 28 students is , the number of ways of choosing which 28 birthdays will be represented times the number of ways of assigning them to everyone in order. It may help to record another way of expressing this quantity: Now we can simplify the probability that no two people share a birthday: A computer reports that this quantity is . So the probability that at least two people share a birthday is about .     Matching hats   Each of people is wearing a hat that they toss into a pile. Then each person retrieves a hat at random. What is the probability that at least one person gets their hat back?    Let denote the event that the th person gets their hat back. We want to compute . Recall the Inclusion Exclusion Principle: Now ; what about ? Conditional probability gives us a nice way of thinking about this: (Why? The probability that gets their hat back given that does is .) A similar argument shows that .  Now we are in a position to simplify the expression in : What we're really interested in is the behavior of this quantity as . Remembering a little calculus, we see that this probability converges to .    "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec-more-examples.html#example-6",
  "type": "Example",
  "number": "1.3.1",
  "title": "Poker hands.",
  "body": " Poker hands   A standard deck of cards (for the purposes of this class) comprises 52 cards. Each card has a rank and a suit . The 13 possible ranks are Ace, 2 10, Jack, Queen, and King, and the 4 possible suits are hearts ♥️, diamonds ♦️, spades ♠️, and clubs ♣️. Each possible pairing of rank and suit is realized in exactly one card.  From a standard deck of 52 cards draw a 5-card hand. (Both the deck and the hand are thought of as sets , so order is irrelevant.)     What is the probability that your hand is a full house , i.e., takes the form AAABB where A and B are different ranks? (E.g. three 3s and two Queens makes a full house, no matter what the suits of the cards are.)    What is the probability that you hold two pairs , i.e., ranks AABBC where A, B, and C represent different ranks? (E.g. 3377K is two pairs, no matter what the suits, but 3337K is three of a kind.)       There are many ways to count full houses, but the simplest is probably to choose the two ranks first, first the rank of the triplet and then the rank of the pair. There are 13 ways of choosing the rank A of the triplet, leaving 12 possibilities for the rank B of the pair. Then there are possible triplets of cards of rank A and possible pairs of cards of rank B. We can now compute the total probability:   Two pairs: again, it is probably simplest to choose the ranks A, B, and C first. But here we have an overcounting problem, since there is symmetry in A and B. So there are many ways of choosing the three ranks A, B, and C, where the division by 2 represents the fact that 22JJA and JJ22A give the same choice. Once we have chosen the three ranks, we have many ways to choose cards of these ranks, so this is our total:    "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-more-examples.html#example-7",
  "type": "Example",
  "number": "1.3.2",
  "title": "Birthdays.",
  "body": " Birthdays   There are 28 students in the class. What is the probability that two of you chosen at random share a birthday?  (You may make the simplifying assumptions that leap years don't exist and that birthdays are uniformly distributed.)    There are possible outcomes, each of which is equally likely. This is a good example where counting the complement works well. That is, instead of counting the event we are asked to count, we will count its complement, the event that no two students share a birthday.  The number of ways of assigning 28 distinct birthdays to 28 students is , the number of ways of choosing which 28 birthdays will be represented times the number of ways of assigning them to everyone in order. It may help to record another way of expressing this quantity: Now we can simplify the probability that no two people share a birthday: A computer reports that this quantity is . So the probability that at least two people share a birthday is about .   "
},
{
  "id": "ex-matching-hats",
  "level": "2",
  "url": "sec-more-examples.html#ex-matching-hats",
  "type": "Example",
  "number": "1.3.3",
  "title": "Matching hats.",
  "body": " Matching hats   Each of people is wearing a hat that they toss into a pile. Then each person retrieves a hat at random. What is the probability that at least one person gets their hat back?    Let denote the event that the th person gets their hat back. We want to compute . Recall the Inclusion Exclusion Principle: Now ; what about ? Conditional probability gives us a nice way of thinking about this: (Why? The probability that gets their hat back given that does is .) A similar argument shows that .  Now we are in a position to simplify the expression in : What we're really interested in is the behavior of this quantity as . Remembering a little calculus, we see that this probability converges to .   "
},
{
  "id": "sec-random-variables-theory",
  "level": "1",
  "url": "sec-random-variables-theory.html",
  "type": "Section",
  "number": "2.1",
  "title": "Random variables: definition and examples",
  "body": " Random variables: definition and examples   Random variables: the basics  Informally, a random variable is a random number whose value is associated with the various outcome of an experiment.   Toss a fair coin three coins, so that the sample space includes outcomes like HHH, TTH, etc. One example of a random variable associated to this experiment is simply the number of heads.  Here's a more sophisticated random variable. Suppose that we start with $1, double our money if we see heads and lose it all if we see tails. Then could be our winnings after this experiment. (Notice that if we see HHH and otherwise.)    Suppose that my neighbor and I each leave home independently between 8 and 9am, each time equally likely, so .  One random variable is the time I leave: . Another is the time between our departures: .   Now we are ready for the formal definition. Suppose that is a probability space.    A random variable is a function satisfying the following technical assumption. For every       We'll abbreviate e.g. by .     Let be a random variable. For all the following are events (i.e., in ).         and      , , etc.           and is closed under taking complements.     , since is order-dense in . Since is countable and each belongs to , we can conclude that this countable union belongs to too.    Exercise.        The set is an event for any Borel set  . The Borel sets are the smallest -field containing all open sets.     If and are random variables on and , then the following are all also random variables.                   We need to show that for every , but since is a random variable.  The rest are similar.         Associated to a random variable is a cumulative distribution function (cdf) defined by .     The definition of random variable ensures that , so is defined.     Let be the number of heads in three flips of a fair coin. Describe its cdf.            My neighbor and I leave our houses again. Let be the time I leave my house; this can be thought of as the projection . Describe the cdf of .            A cdf for a rv enjoys the following properties.    and      is increasing: if then .     is right-continuous :                     (that is, is the jump that makes at )       In fact, a function satisfying the first three conditions of must in fact be realizable as the cdf of some random variable , as you might have the pleasure of verifying on the homework.    Discrete random variables    The random variable is discrete if it takes values only in some countable subset of . In this case we defined its probability mass function (pmf)  by .    Note that the nonzero values of the pmf satisfy and . In particular, at least one must be positive! We will contrast this below with the situation for continuous random variables.   Most but not all! discrete random variables we consider will have finite range. But many interesting examples have (countably) infinite range; in this case the range will usually be something like .    A simple but important random variable is one that can take only two possible values, and . Such a random variable is called a Bernoulli random variable , and we write where denotes .  Then may represent the outcome of a biased coin or might be an indicator rv for some event :   The cdf of a rv is described as follows.     Roll two dice, details to be added.    Back to our usual example of tossing three coins, where denotes the number of heads. Certainly is discrete, since it has only four possible values: 0,1,2,3. This has the following pmf.      Continuous random variables    The rv is continuous if its cdf can be expressed as the integral of an integrable function as follows. This (integrable) function is called the probability density function (pdf) of .     Leaving home, to be added        is called continuous since is a continuous function. Notice that this implies that for every . See .    By the Fundamental Theorem of Calculus, almost everywhere.     . In fact, for any Borel set . In particular, .    In particular, for small , we have the following. Dividing each side of this approximate equality by , we see that we are justified in calling a density function. Even though there is no point-mass at , there is density there.      A continuous rv cannot be discrete, because a discrete rv must have point mass while a continuous rv cannot. But there are rvs that are neither continuous nor discrete.    Choose a real number from , each equally likely. If it is negative, round it up to 0. Otherwise leave it alone. Let be the result of this procedure. Show that is neither discrete nor continuous.    Then cannot be continuous, for . But can take any value in , of which there are uncountably many. So is not discrete, either.     "
},
{
  "id": "p-52",
  "level": "2",
  "url": "sec-random-variables-theory.html#p-52",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random variable "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-9",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " Toss a fair coin three coins, so that the sample space includes outcomes like HHH, TTH, etc. One example of a random variable associated to this experiment is simply the number of heads.  Here's a more sophisticated random variable. Suppose that we start with $1, double our money if we see heads and lose it all if we see tails. Then could be our winnings after this experiment. (Notice that if we see HHH and otherwise.)  "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-10",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " Suppose that my neighbor and I each leave home independently between 8 and 9am, each time equally likely, so .  One random variable is the time I leave: . Another is the time between our departures: .  "
},
{
  "id": "def-random-var",
  "level": "2",
  "url": "sec-random-variables-theory.html#def-random-var",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "  A random variable is a function satisfying the following technical assumption. For every     "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-random-variables-theory.html#remark-2",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " We'll abbreviate e.g. by .  "
},
{
  "id": "prop-rv-basic",
  "level": "2",
  "url": "sec-random-variables-theory.html#prop-rv-basic",
  "type": "Proposition",
  "number": "2.1.5",
  "title": "",
  "body": "  Let be a random variable. For all the following are events (i.e., in ).         and      , , etc.           and is closed under taking complements.     , since is order-dense in . Since is countable and each belongs to , we can conclude that this countable union belongs to too.    Exercise.      "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-random-variables-theory.html#remark-3",
  "type": "Remark",
  "number": "2.1.6",
  "title": "",
  "body": " The set is an event for any Borel set  . The Borel sets are the smallest -field containing all open sets.  "
},
{
  "id": "prop-rv-constructor",
  "level": "2",
  "url": "sec-random-variables-theory.html#prop-rv-constructor",
  "type": "Proposition",
  "number": "2.1.7",
  "title": "",
  "body": "  If and are random variables on and , then the following are all also random variables.                   We need to show that for every , but since is a random variable.  The rest are similar.      "
},
{
  "id": "def-cdf",
  "level": "2",
  "url": "sec-random-variables-theory.html#def-cdf",
  "type": "Definition",
  "number": "2.1.8",
  "title": "",
  "body": "  Associated to a random variable is a cumulative distribution function (cdf) defined by .   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-random-variables-theory.html#remark-4",
  "type": "Remark",
  "number": "2.1.9",
  "title": "",
  "body": " The definition of random variable ensures that , so is defined.  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-11",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "  Let be the number of heads in three flips of a fair coin. Describe its cdf.         "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-12",
  "type": "Example",
  "number": "2.1.11",
  "title": "",
  "body": "  My neighbor and I leave our houses again. Let be the time I leave my house; this can be thought of as the projection . Describe the cdf of .         "
},
{
  "id": "prop-cdf-properties",
  "level": "2",
  "url": "sec-random-variables-theory.html#prop-cdf-properties",
  "type": "Proposition",
  "number": "2.1.12",
  "title": "",
  "body": "  A cdf for a rv enjoys the following properties.    and      is increasing: if then .     is right-continuous :                     (that is, is the jump that makes at )      "
},
{
  "id": "def-discrete-rv",
  "level": "2",
  "url": "sec-random-variables-theory.html#def-discrete-rv",
  "type": "Definition",
  "number": "2.1.13",
  "title": "",
  "body": "  The random variable is discrete if it takes values only in some countable subset of . In this case we defined its probability mass function (pmf)  by .   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-random-variables-theory.html#remark-5",
  "type": "Remark",
  "number": "2.1.14",
  "title": "",
  "body": " Most but not all! discrete random variables we consider will have finite range. But many interesting examples have (countably) infinite range; in this case the range will usually be something like .  "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-13",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": " A simple but important random variable is one that can take only two possible values, and . Such a random variable is called a Bernoulli random variable , and we write where denotes .  Then may represent the outcome of a biased coin or might be an indicator rv for some event :   The cdf of a rv is described as follows.   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-14",
  "type": "Example",
  "number": "2.1.16",
  "title": "",
  "body": " Roll two dice, details to be added.  "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-15",
  "type": "Example",
  "number": "2.1.17",
  "title": "",
  "body": " Back to our usual example of tossing three coins, where denotes the number of heads. Certainly is discrete, since it has only four possible values: 0,1,2,3. This has the following pmf.   "
},
{
  "id": "def-cts-rv",
  "level": "2",
  "url": "sec-random-variables-theory.html#def-cts-rv",
  "type": "Definition",
  "number": "2.1.18",
  "title": "",
  "body": "  The rv is continuous if its cdf can be expressed as the integral of an integrable function as follows. This (integrable) function is called the probability density function (pdf) of .   "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-16",
  "type": "Example",
  "number": "2.1.19",
  "title": "",
  "body": " Leaving home, to be added  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-random-variables-theory.html#remark-6",
  "type": "Remark",
  "number": "2.1.20",
  "title": "",
  "body": "     is called continuous since is a continuous function. Notice that this implies that for every . See .    By the Fundamental Theorem of Calculus, almost everywhere.     . In fact, for any Borel set . In particular, .    In particular, for small , we have the following. Dividing each side of this approximate equality by , we see that we are justified in calling a density function. Even though there is no point-mass at , there is density there.     "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec-random-variables-theory.html#example-17",
  "type": "Example",
  "number": "2.1.21",
  "title": "",
  "body": "  Choose a real number from , each equally likely. If it is negative, round it up to 0. Otherwise leave it alone. Let be the result of this procedure. Show that is neither discrete nor continuous.    Then cannot be continuous, for . But can take any value in , of which there are uncountably many. So is not discrete, either.   "
},
{
  "id": "sec-discrete-rvs",
  "level": "1",
  "url": "sec-discrete-rvs.html",
  "type": "Section",
  "number": "2.2",
  "title": "Discrete random variables",
  "body": " Discrete random variables     We perform independent trials, each with a fixed probability of success. The total number of successes at the end is a binomial random variable with parameters and ; we write . Find its probability mass function.    Fix . There are -many ways of choosing which of the trials will end in success. Then the probability that these trials succeed and the other fail is (by independence) . Multiplying these gives the value of the pmf at : You can view a graph of this pmf at this GeoGebra link .  Later we will make precise the guess that the center of mass of this pmf occurs at .    Verify that .    Two random variables and on the same probability space are independent if for all the events and are independent.  If and are discrete, then it is equivalent to require that for all the events and are independent.    Then a random variable is if and only if it is a sum of independent random variables:     Independent trials are performed, each with a fixed probability of success. The number of trials required to see the first success is a geometric random variable with parameter , and if it's called then we write . Compute the pmf of a random variable.    The possible values of are . Fix a positive integer . The probability that the first trials fail and the th succeeds is     Verify for the pmf of a random variable that     The expectation of a discrete random variable    The expected value , expectation , or mean of a discrete random variable with pmf is defined as follows. whenever this sum converges absolutely. (Otherwise the expected value does not exist.)    Verify that this agrees with the gradeschool notion of mean in the case .   A random variable has mean :   In particular, .    In order to compute the expectation of , we must make sense of the following quantity. After some thought, we might notice that this is the following function of and evaluated at , . (We have used the Binomial Theorem.) Now, plugging in and gives But this is much easier using the linearity of expectation!     The expectation operator is linear; that is,     It is useful to notice that, for fixed , , and that this is a disjoint union. Thus, by the additivity of the probability measure, . We will use this fact and a similar one with the roles of and interchanged in what follows.   The proof that is easier and is left as an exercise.     Now it is much easier to compute the expectation of a binomial random variable: if then there are independent random variables of which is the sum, and now we can use the linearity of expectation:      Suppose that is a discrete random variable with pmf and that is any function. Then the expectation of the random variable can be computed as follows.     Exercise.      Let be a random variable. For we define the th moment of , denoted , to be . The th central moment of , denoted , to be .  Of particular note is , the variance of .    The variance of measures the tendency of to deviate from its mean.  Show that .    Compute the variance of a random variable.    We see that so the variance is given by      Matching, revisited   Recall , in which we determined that, when people's hats are randomly shuffled, the probability that at least one person gets their hat back is a quantity that tends as to .  Now, letting be the number of people who receive their own hat, find and .    Consider, for , the following indicator random variable. Notice that equals the probability that the th person gets their hat back, which as we discovered in the previous example is . Now we use the linearity of expectation:    For that we needed to compute : Now we can conclude that      Coupon Collector   A fast-food restaurant offers kiddie meals that each include a toy. There are different toys available, and toys are equally likely to be in a given meal.   Find the expected number of meals needed to collect all the toys.   Find the expected number of different toys collected if kiddie meals are purchased.      Let be the number of meals before all toys are collected. Then , where is the number of additional meals after different toys have collected to get another toy. By linearity of expectation, . Notice that , since after different toys have been collected, the chance of any particular meal giving us a new toy is .  Recalling that a random variable has expectation , we are now in position to compute the expectation of . where is the th harmonic number . This quantity for is approximately and for is approximately .  For part (b), let be the number of different toys collected if kiddie meals are purchased, and let be the number of toys missing from the collection after meals. Then can be written as a sum where Note that , where is the probability that we didn't get the th toy in meals, which is . Now . And we can compute the expected value of : Notice that this quantity approaches as , as expected.      The Poisson Distribution  Consider and let and while fixing :     A random variable is said to follow a Poisson distribution with parameter if its pmf is given by     A random variable is a good model for a rare event that occurs on average times per unit time.  Verify that .    Compute the expected value of a random variable.         Show that too.    Astronomers estimate that on average one large meteorite hits Earth every 100 years. Compute the probability that no large meteorite hits Earth in the next 100 years.    We model the number of meteorites coming in the next century by a random variable. The probability that no meteorite comes in the next century is . This means there is a chance that at least one meteorite will hit in the next 100 years.      Our observations indicate that on average gram of radioactive material discharges ɑ particles per second. Compute the probability that at most two ɑ particles will appear.     So approximately a chance.     Poisson Coin Flips   Suppose that a coin with probability of showing heads is tossed times. Let be the number of heads and the number of tails. Then and are certainly not independent; from the value of one we can compute the value of the other!  Nonetheless, show that if we toss the coin a random number of times, then and are independent!    We must show for all that the events and are independent, i.e., that Start with the lefthand side: Toward the righthand side, start by using the Law of Total Probability: Similarly, Combining all this, we get:       More examples of discrete distributions    Independent trials are performed until a total of successes are achieved. Let be the number of trials required. Notice that the pmf of is given by the following formula. (The th trial must be a success; there are many ways to choose which of the remaining trials succeed; then the chance that the trials that are supposed to succeed do succeed and the others fail is .)  A random variable with this pmf is said to follow a negative binomial distribution with parameters and ; we write .      Correlation and variance  Recall that is defined to be and is equal to . We should not expect this statistic to be linear, since as we will verify we expect . But it is natural to wonder under what conditions it is additive , meaning .    Two random variables and are uncorrelated if .      If and are independent, then they are uncorrelated.         The converse is false!    Let and be independent Bernoulli random variables with parameter . Show that and are dependent but uncorrelated.    To show that and are dependent, it is enough to show that the events and are dependent. But of course! The only way for to equal is for , and this implies that . In other words, and , and .  To see that and are uncorrelated, we compute all the relevant expected values by hand:   And , so and are uncorrelated.    And here is the reason for making the definition:            If and are uncorrelated, then .       The first part follows immediately from the definition of variance and the linearity of expectation:   The second part follows from our other characterization of variance: That's it.     A random variable can be expressed as a sum of independent random variables. Recall that the variance of a random variable is . Since the are independent, they are uncorrelated. So .    "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-18",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "  We perform independent trials, each with a fixed probability of success. The total number of successes at the end is a binomial random variable with parameters and ; we write . Find its probability mass function.    Fix . There are -many ways of choosing which of the trials will end in success. Then the probability that these trials succeed and the other fail is (by independence) . Multiplying these gives the value of the pmf at : You can view a graph of this pmf at this GeoGebra link .  Later we will make precise the guess that the center of mass of this pmf occurs at .   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-discrete-rvs.html#exercise-1",
  "type": "Checkpoint",
  "number": "[STRUCT].1",
  "title": "",
  "body": "Verify that . "
},
{
  "id": "def-indep-rv",
  "level": "2",
  "url": "sec-discrete-rvs.html#def-indep-rv",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  Two random variables and on the same probability space are independent if for all the events and are independent.  If and are discrete, then it is equivalent to require that for all the events and are independent.   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-19",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Independent trials are performed, each with a fixed probability of success. The number of trials required to see the first success is a geometric random variable with parameter , and if it's called then we write . Compute the pmf of a random variable.    The possible values of are . Fix a positive integer . The probability that the first trials fail and the th succeeds is    "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-discrete-rvs.html#exercise-2",
  "type": "Checkpoint",
  "number": "[STRUCT].3",
  "title": "",
  "body": "Verify for the pmf of a random variable that  "
},
{
  "id": "def-expectation-discrete",
  "level": "2",
  "url": "sec-discrete-rvs.html#def-expectation-discrete",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  The expected value , expectation , or mean of a discrete random variable with pmf is defined as follows. whenever this sum converges absolutely. (Otherwise the expected value does not exist.)   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-discrete-rvs.html#exercise-3",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": "Verify that this agrees with the gradeschool notion of mean in the case . "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-20",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": " A random variable has mean :   In particular, .  "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-21",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": " In order to compute the expectation of , we must make sense of the following quantity. After some thought, we might notice that this is the following function of and evaluated at , . (We have used the Binomial Theorem.) Now, plugging in and gives But this is much easier using the linearity of expectation!  "
},
{
  "id": "thm-linearity-expectation-discrete",
  "level": "2",
  "url": "sec-discrete-rvs.html#thm-linearity-expectation-discrete",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "",
  "body": "  The expectation operator is linear; that is,     It is useful to notice that, for fixed , , and that this is a disjoint union. Thus, by the additivity of the probability measure, . We will use this fact and a similar one with the roles of and interchanged in what follows.   The proof that is easier and is left as an exercise.   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-22",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": " Now it is much easier to compute the expectation of a binomial random variable: if then there are independent random variables of which is the sum, and now we can use the linearity of expectation:   "
},
{
  "id": "lem-lotus",
  "level": "2",
  "url": "sec-discrete-rvs.html#lem-lotus",
  "type": "Lemma",
  "number": "2.2.10",
  "title": "",
  "body": "  Suppose that is a discrete random variable with pmf and that is any function. Then the expectation of the random variable can be computed as follows.     Exercise.   "
},
{
  "id": "def-moments",
  "level": "2",
  "url": "sec-discrete-rvs.html#def-moments",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": "  Let be a random variable. For we define the th moment of , denoted , to be . The th central moment of , denoted , to be .  Of particular note is , the variance of .   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-discrete-rvs.html#exercise-4",
  "type": "Checkpoint",
  "number": "2.2.12",
  "title": "",
  "body": "Show that . "
},
{
  "id": "example-23",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-23",
  "type": "Example",
  "number": "2.2.13",
  "title": "",
  "body": "  Compute the variance of a random variable.    We see that so the variance is given by    "
},
{
  "id": "example-24",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-24",
  "type": "Example",
  "number": "2.2.14",
  "title": "Matching, revisited.",
  "body": " Matching, revisited   Recall , in which we determined that, when people's hats are randomly shuffled, the probability that at least one person gets their hat back is a quantity that tends as to .  Now, letting be the number of people who receive their own hat, find and .    Consider, for , the following indicator random variable. Notice that equals the probability that the th person gets their hat back, which as we discovered in the previous example is . Now we use the linearity of expectation:    For that we needed to compute : Now we can conclude that    "
},
{
  "id": "example-25",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-25",
  "type": "Example",
  "number": "2.2.15",
  "title": "Coupon Collector.",
  "body": " Coupon Collector   A fast-food restaurant offers kiddie meals that each include a toy. There are different toys available, and toys are equally likely to be in a given meal.   Find the expected number of meals needed to collect all the toys.   Find the expected number of different toys collected if kiddie meals are purchased.      Let be the number of meals before all toys are collected. Then , where is the number of additional meals after different toys have collected to get another toy. By linearity of expectation, . Notice that , since after different toys have been collected, the chance of any particular meal giving us a new toy is .  Recalling that a random variable has expectation , we are now in position to compute the expectation of . where is the th harmonic number . This quantity for is approximately and for is approximately .  For part (b), let be the number of different toys collected if kiddie meals are purchased, and let be the number of toys missing from the collection after meals. Then can be written as a sum where Note that , where is the probability that we didn't get the th toy in meals, which is . Now . And we can compute the expected value of : Notice that this quantity approaches as , as expected.   "
},
{
  "id": "def-poisson",
  "level": "2",
  "url": "sec-discrete-rvs.html#def-poisson",
  "type": "Definition",
  "number": "2.2.16",
  "title": "",
  "body": "  A random variable is said to follow a Poisson distribution with parameter if its pmf is given by    "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-discrete-rvs.html#exercise-5",
  "type": "Checkpoint",
  "number": "2.2.17",
  "title": "",
  "body": "Verify that . "
},
{
  "id": "example-26",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-26",
  "type": "Example",
  "number": "2.2.18",
  "title": "",
  "body": "  Compute the expected value of a random variable.        "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-discrete-rvs.html#exercise-6",
  "type": "Checkpoint",
  "number": "2.2.19",
  "title": "",
  "body": "Show that too. "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-27",
  "type": "Example",
  "number": "2.2.20",
  "title": "",
  "body": "  Astronomers estimate that on average one large meteorite hits Earth every 100 years. Compute the probability that no large meteorite hits Earth in the next 100 years.    We model the number of meteorites coming in the next century by a random variable. The probability that no meteorite comes in the next century is . This means there is a chance that at least one meteorite will hit in the next 100 years.   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-28",
  "type": "Example",
  "number": "2.2.21",
  "title": "",
  "body": "  Our observations indicate that on average gram of radioactive material discharges ɑ particles per second. Compute the probability that at most two ɑ particles will appear.     So approximately a chance.   "
},
{
  "id": "example-29",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-29",
  "type": "Example",
  "number": "2.2.22",
  "title": "Poisson Coin Flips.",
  "body": " Poisson Coin Flips   Suppose that a coin with probability of showing heads is tossed times. Let be the number of heads and the number of tails. Then and are certainly not independent; from the value of one we can compute the value of the other!  Nonetheless, show that if we toss the coin a random number of times, then and are independent!    We must show for all that the events and are independent, i.e., that Start with the lefthand side: Toward the righthand side, start by using the Law of Total Probability: Similarly, Combining all this, we get:    "
},
{
  "id": "def-neg-binom",
  "level": "2",
  "url": "sec-discrete-rvs.html#def-neg-binom",
  "type": "Definition",
  "number": "2.2.23",
  "title": "",
  "body": "  Independent trials are performed until a total of successes are achieved. Let be the number of trials required. Notice that the pmf of is given by the following formula. (The th trial must be a success; there are many ways to choose which of the remaining trials succeed; then the chance that the trials that are supposed to succeed do succeed and the others fail is .)  A random variable with this pmf is said to follow a negative binomial distribution with parameters and ; we write .   "
},
{
  "id": "def-uncorrelated",
  "level": "2",
  "url": "sec-discrete-rvs.html#def-uncorrelated",
  "type": "Definition",
  "number": "2.2.24",
  "title": "",
  "body": "  Two random variables and are uncorrelated if .   "
},
{
  "id": "lem-independent-uncorrelated",
  "level": "2",
  "url": "sec-discrete-rvs.html#lem-independent-uncorrelated",
  "type": "Lemma",
  "number": "2.2.25",
  "title": "",
  "body": "  If and are independent, then they are uncorrelated.        "
},
{
  "id": "example-30",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-30",
  "type": "Example",
  "number": "2.2.26",
  "title": "",
  "body": "  Let and be independent Bernoulli random variables with parameter . Show that and are dependent but uncorrelated.    To show that and are dependent, it is enough to show that the events and are dependent. But of course! The only way for to equal is for , and this implies that . In other words, and , and .  To see that and are uncorrelated, we compute all the relevant expected values by hand:   And , so and are uncorrelated.   "
},
{
  "id": "prop-variance-uncorrelated",
  "level": "2",
  "url": "sec-discrete-rvs.html#prop-variance-uncorrelated",
  "type": "Proposition",
  "number": "2.2.27",
  "title": "",
  "body": "          If and are uncorrelated, then .       The first part follows immediately from the definition of variance and the linearity of expectation:   The second part follows from our other characterization of variance: That's it.   "
},
{
  "id": "example-31",
  "level": "2",
  "url": "sec-discrete-rvs.html#example-31",
  "type": "Example",
  "number": "2.2.28",
  "title": "",
  "body": " A random variable can be expressed as a sum of independent random variables. Recall that the variance of a random variable is . Since the are independent, they are uncorrelated. So .  "
},
{
  "id": "sec-cts-rvs",
  "level": "1",
  "url": "sec-cts-rvs.html",
  "type": "Section",
  "number": "2.3",
  "title": "Continuous random variables",
  "body": " Continuous random variables  Now we develop the theory of continuous random variables in much the same way as we did for the discrete case.    The expected value or expectation of a continuous random variable with pdf is defined as the following integral, when it converges.     "
},
{
  "id": "def-expectation-cts",
  "level": "2",
  "url": "sec-cts-rvs.html#def-expectation-cts",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  The expected value or expectation of a continuous random variable with pdf is defined as the following integral, when it converges.    "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
