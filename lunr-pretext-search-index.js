var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "     copyright  "
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
  "id": "prob-axioms-5",
  "level": "2",
  "url": "prob-axioms.html#prob-axioms-5",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Toss a fair coin 3 times. What is the probability that you see exactly two heads?    What are the possible outcomes of this experiment? to be finished   "
},
{
  "id": "prob-axioms-6",
  "level": "2",
  "url": "prob-axioms.html#prob-axioms-6",
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
  "id": "prob-axioms-9",
  "level": "2",
  "url": "prob-axioms.html#prob-axioms-9",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  A collection of subsets of is a -field if it satisfies the following three conditions.       If then ( closure under countable unions ).   If then .      "
},
{
  "id": "prob-spaces-3",
  "level": "1",
  "url": "prob-spaces-3.html",
  "type": "Section",
  "number": "1.2",
  "title": "Conditional probability and independence",
  "body": " Conditional probability and independence   Conditional Probability    If then the conditional probability of given , written , is the quantity     Note that the rearranged form of the equation can be useful.    In September 40% of days are warm and the rest are cool. On warm days there is a 60% chance of rain; on cool days there is a 30% chance.   What is the probability that it will rain on a September day?    What is the probability that it is warm, given that it is raining?             The Law of Total Probability   Suppose that events partition . Then for any event we have       Independence    Events and in a probability space are independent if .  More generally, events , , are mutually independent if for any finite subset we have The are said to be pairwise independent if for any distinct indices the two events and are independent.        Notice that . So, as long as and the independence of and is equivalent to either or ; that is, information about either event doesn't change the probability of the other.    Independence is not the same as disjointness; independent events and may or may not satisfy .        Roll two fair 6-sided dice. Let denote the event that the first roll is a 3, denote the event that the second roll is a 4, and denote the event that the sum of the two rolls equals 7.  The events and are certainly independent: of the 36 possible outcomes, 6 are in and 6 are in ; and exactly 1 is common to and .  Show that the three events , , and are pairwise but not mutually independent.    That and are independent is explained in the statement of the example. For and , first notice that . Then notice that and so we have A similar argument shows that and are independent.  But , so the three events are not mutually independent:       Draw one card from a standard 52-card deck. Show that suit is independent of rank; for example, show that drawing a jack is independent of drawing a heart.    The probability of drawing a jack is , and the probability of drawing a heart is . The probability of drawing the Jack of Hearts is .     "
},
{
  "id": "def-conditional-prob",
  "level": "2",
  "url": "prob-spaces-3.html#def-conditional-prob",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  If then the conditional probability of given , written , is the quantity    "
},
{
  "id": "subsec-conditional-prob-4",
  "level": "2",
  "url": "prob-spaces-3.html#subsec-conditional-prob-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  In September 40% of days are warm and the rest are cool. On warm days there is a 60% chance of rain; on cool days there is a 30% chance.   What is the probability that it will rain on a September day?    What is the probability that it is warm, given that it is raining?           "
},
{
  "id": "thm-law-total-prob",
  "level": "2",
  "url": "prob-spaces-3.html#thm-law-total-prob",
  "type": "Theorem",
  "number": "1.2.3",
  "title": "The Law of Total Probability.",
  "body": " The Law of Total Probability   Suppose that events partition . Then for any event we have    "
},
{
  "id": "def-independence",
  "level": "2",
  "url": "prob-spaces-3.html#def-independence",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  Events and in a probability space are independent if .  More generally, events , , are mutually independent if for any finite subset we have The are said to be pairwise independent if for any distinct indices the two events and are independent.   "
},
{
  "id": "subsec-independence-3",
  "level": "2",
  "url": "prob-spaces-3.html#subsec-independence-3",
  "type": "Remark",
  "number": "1.2.5",
  "title": "",
  "body": "    Notice that . So, as long as and the independence of and is equivalent to either or ; that is, information about either event doesn't change the probability of the other.    Independence is not the same as disjointness; independent events and may or may not satisfy .     "
},
{
  "id": "subsec-independence-4",
  "level": "2",
  "url": "prob-spaces-3.html#subsec-independence-4",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Roll two fair 6-sided dice. Let denote the event that the first roll is a 3, denote the event that the second roll is a 4, and denote the event that the sum of the two rolls equals 7.  The events and are certainly independent: of the 36 possible outcomes, 6 are in and 6 are in ; and exactly 1 is common to and .  Show that the three events , , and are pairwise but not mutually independent.    That and are independent is explained in the statement of the example. For and , first notice that . Then notice that and so we have A similar argument shows that and are independent.  But , so the three events are not mutually independent:    "
},
{
  "id": "subsec-independence-5",
  "level": "2",
  "url": "prob-spaces-3.html#subsec-independence-5",
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
  "id": "sec-more-examples-2",
  "level": "2",
  "url": "sec-more-examples.html#sec-more-examples-2",
  "type": "Example",
  "number": "1.3.1",
  "title": "Poker hands.",
  "body": " Poker hands   A standard deck of cards (for the purposes of this class) comprises 52 cards. Each card has a rank and a suit . The 13 possible ranks are Ace, 2 10, Jack, Queen, and King, and the 4 possible suits are hearts ♥️, diamonds ♦️, spades ♠️, and clubs ♣️. Each possible pairing of rank and suit is realized in exactly one card.  From a standard deck of 52 cards draw a 5-card hand. (Both the deck and the hand are thought of as sets , so order is irrelevant.)     What is the probability that your hand is a full house , i.e., takes the form AAABB where A and B are different ranks? (E.g. three 3s and two Queens makes a full house, no matter what the suits of the cards are.)    What is the probability that you hold two pairs , i.e., ranks AABBC where A, B, and C represent different ranks? (E.g. 3377K is two pairs, no matter what the suits, but 3337K is three of a kind.)       There are many ways to count full houses, but the simplest is probably to choose the two ranks first, first the rank of the triplet and then the rank of the pair. There are 13 ways of choosing the rank A of the triplet, leaving 12 possibilities for the rank B of the pair. Then there are possible triplets of cards of rank A and possible pairs of cards of rank B. We can now compute the total probability:   Two pairs: again, it is probably simplest to choose the ranks A, B, and C first. But here we have an overcounting problem, since there is symmetry in A and B. So there are many ways of choosing the three ranks A, B, and C, where the division by 2 represents the fact that 22JJA and JJ22A give the same choice. Once we have chosen the three ranks, we have many ways to choose cards of these ranks, so this is our total:    "
},
{
  "id": "sec-more-examples-3",
  "level": "2",
  "url": "sec-more-examples.html#sec-more-examples-3",
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
  "id": "subsec-random-variables-2",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-random-variables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random variable "
},
{
  "id": "subsec-random-variables-3",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-random-variables-3",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " Toss a fair coin three coins, so that the sample space includes outcomes like HHH, TTH, etc. One example of a random variable associated to this experiment is simply the number of heads.  Here's a more sophisticated random variable. Suppose that we start with $1, double our money if we see heads and lose it all if we see tails. Then could be our winnings after this experiment. (Notice that if we see HHH and otherwise.)  "
},
{
  "id": "subsec-random-variables-4",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-random-variables-4",
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
  "id": "subsec-random-variables-7",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-random-variables-7",
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
  "id": "subsec-random-variables-9",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-random-variables-9",
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
  "id": "subsec-random-variables-12",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-random-variables-12",
  "type": "Remark",
  "number": "2.1.9",
  "title": "",
  "body": " The definition of random variable ensures that , so is defined.  "
},
{
  "id": "subsec-random-variables-13",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-random-variables-13",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "  Let be the number of heads in three flips of a fair coin. Describe its cdf.         "
},
{
  "id": "subsec-random-variables-14",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-random-variables-14",
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
  "id": "subsec-discrete-rvs-4",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-discrete-rvs-4",
  "type": "Remark",
  "number": "2.1.14",
  "title": "",
  "body": " Most but not all! discrete random variables we consider will have finite range. But many interesting examples have (countably) infinite range; in this case the range will usually be something like .  "
},
{
  "id": "subsec-discrete-rvs-5",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-discrete-rvs-5",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": " A simple but important random variable is one that can take only two possible values, and . Such a random variable is called a Bernoulli random variable , and we write where denotes .  Then may represent the outcome of a biased coin or might be an indicator rv for some event :   The cdf of a rv is described as follows.   "
},
{
  "id": "subsec-discrete-rvs-6",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-discrete-rvs-6",
  "type": "Example",
  "number": "2.1.16",
  "title": "",
  "body": " Roll two dice, details to be added.  "
},
{
  "id": "subsec-discrete-rvs-7",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-discrete-rvs-7",
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
  "id": "subsec-cts-rvs-3",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-cts-rvs-3",
  "type": "Example",
  "number": "2.1.19",
  "title": "",
  "body": " Leaving home, to be added  "
},
{
  "id": "subsec-cts-rvs-4",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-cts-rvs-4",
  "type": "Remark",
  "number": "2.1.20",
  "title": "",
  "body": "     is called continuous since is a continuous function. Notice that this implies that for every . See .    By the Fundamental Theorem of Calculus, almost everywhere.     . In fact, for any Borel set . In particular, .    In particular, for small , we have the following. Dividing each side of this approximate equality by , we see that we are justified in calling a density function. Even though there is no point-mass at , there is density there.     "
},
{
  "id": "subsec-cts-rvs-6",
  "level": "2",
  "url": "sec-random-variables-theory.html#subsec-cts-rvs-6",
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
  "id": "sec-discrete-rvs-2-1",
  "level": "2",
  "url": "sec-discrete-rvs.html#sec-discrete-rvs-2-1",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "  We perform independent trials, each with a fixed probability of success. The total number of successes at the end is a binomial random variable with parameters and ; we write . Find its probability mass function.    Fix . There are -many ways of choosing which of the trials will end in success. Then the probability that these trials succeed and the other fail is (by independence) . Multiplying these gives the value of the pmf at : You can view a graph of this pmf at this GeoGebra link .  Later we will make precise the guess that the center of mass of this pmf occurs at .   "
},
{
  "id": "sec-discrete-rvs-2-2",
  "level": "2",
  "url": "sec-discrete-rvs.html#sec-discrete-rvs-2-2",
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
  "id": "sec-discrete-rvs-2-5",
  "level": "2",
  "url": "sec-discrete-rvs.html#sec-discrete-rvs-2-5",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Independent trials are performed, each with a fixed probability of success. The number of trials required to see the first success is a geometric random variable with parameter , and if it's called then we write . Compute the pmf of a random variable.    The possible values of are . Fix a positive integer . The probability that the first trials fail and the th succeeds is    "
},
{
  "id": "sec-discrete-rvs-2-6",
  "level": "2",
  "url": "sec-discrete-rvs.html#sec-discrete-rvs-2-6",
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
  "id": "subsec-expectation-discrete-3",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-expectation-discrete-3",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": "Verify that this agrees with the gradeschool notion of mean in the case . "
},
{
  "id": "subsec-expectation-discrete-4",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-expectation-discrete-4",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": " A random variable has mean :   In particular, .  "
},
{
  "id": "subsec-expectation-discrete-5",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-expectation-discrete-5",
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
  "id": "subsec-expectation-discrete-7",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-expectation-discrete-7",
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
  "id": "subsec-expectation-discrete-11",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-expectation-discrete-11",
  "type": "Checkpoint",
  "number": "2.2.12",
  "title": "",
  "body": "Show that . "
},
{
  "id": "subsec-expectation-discrete-12",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-expectation-discrete-12",
  "type": "Example",
  "number": "2.2.13",
  "title": "",
  "body": "  Compute the variance of a random variable.    We see that so the variance is given by    "
},
{
  "id": "subsec-expectation-discrete-13",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-expectation-discrete-13",
  "type": "Example",
  "number": "2.2.14",
  "title": "Matching, revisited.",
  "body": " Matching, revisited   Recall , in which we determined that, when people's hats are randomly shuffled, the probability that at least one person gets their hat back is a quantity that tends as to .  Now, letting be the number of people who receive their own hat, find and .    Consider, for , the following indicator random variable. Notice that equals the probability that the th person gets their hat back, which as we discovered in the previous example is . Now we use the linearity of expectation:    For that we needed to compute : Now we can conclude that    "
},
{
  "id": "subsec-expectation-discrete-14",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-expectation-discrete-14",
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
  "id": "subsec-poisson-5",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-poisson-5",
  "type": "Checkpoint",
  "number": "2.2.17",
  "title": "",
  "body": "Verify that . "
},
{
  "id": "subsec-poisson-6",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-poisson-6",
  "type": "Example",
  "number": "2.2.18",
  "title": "",
  "body": "  Compute the expected value of a random variable.        "
},
{
  "id": "subsec-poisson-7",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-poisson-7",
  "type": "Checkpoint",
  "number": "2.2.19",
  "title": "",
  "body": "Show that too. "
},
{
  "id": "subsec-poisson-8",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-poisson-8",
  "type": "Example",
  "number": "2.2.20",
  "title": "",
  "body": "  Astronomers estimate that on average one large meteorite hits Earth every 100 years. Compute the probability that no large meteorite hits Earth in the next 100 years.    We model the number of meteorites coming in the next century by a random variable. The probability that no meteorite comes in the next century is . This means there is a chance that at least one meteorite will hit in the next 100 years.   "
},
{
  "id": "subsec-poisson-9",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-poisson-9",
  "type": "Example",
  "number": "2.2.21",
  "title": "",
  "body": "  Our observations indicate that on average gram of radioactive material discharges ɑ particles per second. Compute the probability that at most two ɑ particles will appear.     So approximately a chance.   "
},
{
  "id": "subsec-poisson-10",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-poisson-10",
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
  "id": "subsec-variance-correlation-6",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-variance-correlation-6",
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
  "id": "subsec-variance-correlation-9",
  "level": "2",
  "url": "sec-discrete-rvs.html#subsec-variance-correlation-9",
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
  "body": " Continuous random variables   Now we develop the theory of continuous random variables in much the same way as we did for the discrete case.    The expected value or expectation of a continuous random variable with pdf is defined as the following integral, when it converges.       The exponential distribution  to be added    The Gaussian distribution  to be added   "
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
  "id": "sec-some-inequalities",
  "level": "1",
  "url": "sec-some-inequalities.html",
  "type": "Section",
  "number": "2.4",
  "title": "Some Inequalities",
  "body": " Some Inequalities  How likely is a random variable to deviate greatly from its mean?   Chebyshev's Inequality   Let be a random variable and . Then   In particular, when and , we have So must concentrate around its mean in a way that's bounded by its variance.     For , we have This is valid regardless of the distribution of    So Chebyshev is very general; it needs only the first two moments of . But there is a trade-off: in specific cases it can give a poor estimate.   Suppose . We can compute by direct computation: This is much smaller than , the bound given by Chebyshev.   Soon we'll prove Chebyshev's Inequality, but it will be easier to first prove another inequality.   Markov's Inequality   Let be a random variable and be a constant. Then     Put . Since , we have . (Check this, perhaps by considering separately the cases and .) Take the expectation of each side: Rearrange to get what we want.    Note that Markov's Inequality applies even when isn't finite (or is unknown), unlike Chebyshev's.   Proof of  Apply Markov's Inequality to and to get Notice that iff , so we have Chebyshev's Inequality.     A factory produces an average of 50 items per day.   Comment on the probability that today's production exceeds 75 items.    If the standard deviation is 5 items per day, what can be said about the probability that today's production level will be between 40 and 60 items?          By Markov, .    Apply Chebyshev to , which has the same variance as but mean 0:        "
},
{
  "id": "thm-chebyshev",
  "level": "2",
  "url": "sec-some-inequalities.html#thm-chebyshev",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "Chebyshev’s Inequality.",
  "body": " Chebyshev's Inequality   Let be a random variable and . Then   In particular, when and , we have So must concentrate around its mean in a way that's bounded by its variance.   "
},
{
  "id": "sec-some-inequalities-4",
  "level": "2",
  "url": "sec-some-inequalities.html#sec-some-inequalities-4",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": " For , we have This is valid regardless of the distribution of   "
},
{
  "id": "sec-some-inequalities-6",
  "level": "2",
  "url": "sec-some-inequalities.html#sec-some-inequalities-6",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": " Suppose . We can compute by direct computation: This is much smaller than , the bound given by Chebyshev.  "
},
{
  "id": "thm-markov",
  "level": "2",
  "url": "sec-some-inequalities.html#thm-markov",
  "type": "Theorem",
  "number": "2.4.4",
  "title": "Markov’s Inequality.",
  "body": " Markov's Inequality   Let be a random variable and be a constant. Then     Put . Since , we have . (Check this, perhaps by considering separately the cases and .) Take the expectation of each side: Rearrange to get what we want.   "
},
{
  "id": "sec-some-inequalities-10",
  "level": "2",
  "url": "sec-some-inequalities.html#sec-some-inequalities-10",
  "type": "Proof",
  "number": "2.4.1",
  "title": "Proof of Theorem 2.4.1.",
  "body": " Proof of  Apply Markov's Inequality to and to get Notice that iff , so we have Chebyshev's Inequality.  "
},
{
  "id": "sec-some-inequalities-11",
  "level": "2",
  "url": "sec-some-inequalities.html#sec-some-inequalities-11",
  "type": "Example",
  "number": "2.4.5",
  "title": "",
  "body": "  A factory produces an average of 50 items per day.   Comment on the probability that today's production exceeds 75 items.    If the standard deviation is 5 items per day, what can be said about the probability that today's production level will be between 40 and 60 items?          By Markov, .    Apply Chebyshev to , which has the same variance as but mean 0:       "
},
{
  "id": "ch-joint-distributions-2",
  "level": "1",
  "url": "ch-joint-distributions-2.html",
  "type": "Section",
  "number": "3.1",
  "title": "Definitions and examples",
  "body": " Definitions and examples  If and are random variables on the same probability space, then their cdfs and tell us about how they are distributed, individually. But with only this information, we don't know how they act relative to each other.    Situation A. Flip two coins and define Then and are identically distributed; they both follow a distribution and therefore have the same pmf and cdf.   Situation B. Now flip only one coin and consider and . (That is, is the indicator rv of the event that the result is a heads, and indicates whether the result is a tails.) Then and are identically distributed random variables, just as in Situation A.  But clearly these two situations are different! How do we capture that? It might occur to us to record joint probabilies in a 2D array:      The joint mass function of discrete random variables and is defined by        Discrete random variables and are independent if and only if their joint mass function is the pointwise product of their mass functions: (This holds in Situation A of the example but not in Situation B.)  The definition of joint mass function can be extended to more than two random variables. We probably won't worry about that much, though.    and . Follows from the Law of Total Probability. Thus, we get the so-called marginal mass functions by taking sums down columns and rows in the joint mass function tables:      In Situation A, and are uncorrelated. In Situation B, they are correlated. By how much?    The covariance of random variables and is defined by The correlation coefficient of and is provided and are both nonzero.     Some properties:     Recall that . In a moment we will prove that   iff and are uncorrelated. This follows immediately from the previous item.   . (This will also be proved soon.)       For all random variables and , we have     Essentially the same proof we gave for the case . Just expand and use linearity of expectation:      Back to our example with Situations A and B. In Situation A we have since and are independent therefore uncorrelated. In Situation B, we have: So and are negatively correlated , meaning when decreases then increases, and vice versa. More specifically, which (as we will show) is as negative as possible. So and in this example are as negatively correlated as possible.    Suppose that and are indicator random variables for events and . We have the following: So the covariance of and is given by This means that and are ...      Flip a fair coin three times. Let count the number of heads in the first 2 flips. Let count the number of heads in the last 2 flips. Compute .    It might be informative to solve this directly from the definition, even though we have the convenient formula of . Notice that . Look at the joint mass function: and compute the covariance directly from the definition:   It is easier (and in more complicated examples this will be truer) to use the formula, though: so     "
},
{
  "id": "ch-joint-distributions-2-3",
  "level": "2",
  "url": "ch-joint-distributions-2.html#ch-joint-distributions-2-3",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": "  Situation A. Flip two coins and define Then and are identically distributed; they both follow a distribution and therefore have the same pmf and cdf.   Situation B. Now flip only one coin and consider and . (That is, is the indicator rv of the event that the result is a heads, and indicates whether the result is a tails.) Then and are identically distributed random variables, just as in Situation A.  But clearly these two situations are different! How do we capture that? It might occur to us to record joint probabilies in a 2D array:   "
},
{
  "id": "def-jmf",
  "level": "2",
  "url": "ch-joint-distributions-2.html#def-jmf",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  The joint mass function of discrete random variables and is defined by    "
},
{
  "id": "ch-joint-distributions-2-5",
  "level": "2",
  "url": "ch-joint-distributions-2.html#ch-joint-distributions-2-5",
  "type": "Remark",
  "number": "3.1.3",
  "title": "",
  "body": "   Discrete random variables and are independent if and only if their joint mass function is the pointwise product of their mass functions: (This holds in Situation A of the example but not in Situation B.)  The definition of joint mass function can be extended to more than two random variables. We probably won't worry about that much, though.    and . Follows from the Law of Total Probability. Thus, we get the so-called marginal mass functions by taking sums down columns and rows in the joint mass function tables:     "
},
{
  "id": "def-cov",
  "level": "2",
  "url": "ch-joint-distributions-2.html#def-cov",
  "type": "Definition",
  "number": "3.1.4",
  "title": "",
  "body": "  The covariance of random variables and is defined by The correlation coefficient of and is provided and are both nonzero.   "
},
{
  "id": "ch-joint-distributions-2-8",
  "level": "2",
  "url": "ch-joint-distributions-2.html#ch-joint-distributions-2-8",
  "type": "Remark",
  "number": "3.1.5",
  "title": "",
  "body": " Some properties:     Recall that . In a moment we will prove that   iff and are uncorrelated. This follows immediately from the previous item.   . (This will also be proved soon.)    "
},
{
  "id": "lem-cov-formula",
  "level": "2",
  "url": "ch-joint-distributions-2.html#lem-cov-formula",
  "type": "Lemma",
  "number": "3.1.6",
  "title": "",
  "body": "  For all random variables and , we have     Essentially the same proof we gave for the case . Just expand and use linearity of expectation:    "
},
{
  "id": "ch-joint-distributions-2-10",
  "level": "2",
  "url": "ch-joint-distributions-2.html#ch-joint-distributions-2-10",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": " Back to our example with Situations A and B. In Situation A we have since and are independent therefore uncorrelated. In Situation B, we have: So and are negatively correlated , meaning when decreases then increases, and vice versa. More specifically, which (as we will show) is as negative as possible. So and in this example are as negatively correlated as possible.  "
},
{
  "id": "ch-joint-distributions-2-11",
  "level": "2",
  "url": "ch-joint-distributions-2.html#ch-joint-distributions-2-11",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": " Suppose that and are indicator random variables for events and . We have the following: So the covariance of and is given by This means that and are ...   "
},
{
  "id": "ch-joint-distributions-2-12",
  "level": "2",
  "url": "ch-joint-distributions-2.html#ch-joint-distributions-2-12",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "  Flip a fair coin three times. Let count the number of heads in the first 2 flips. Let count the number of heads in the last 2 flips. Compute .    It might be informative to solve this directly from the definition, even though we have the convenient formula of . Notice that . Look at the joint mass function: and compute the covariance directly from the definition:   It is easier (and in more complicated examples this will be truer) to use the formula, though: so    "
},
{
  "id": "sec-pgfs",
  "level": "1",
  "url": "sec-pgfs.html",
  "type": "Section",
  "number": "4.1",
  "title": "Probability generating functions",
  "body": " Probability generating functions  What is a pgf?  "
},
{
  "id": "sec-characteristic-fns",
  "level": "1",
  "url": "sec-characteristic-fns.html",
  "type": "Section",
  "number": "4.2",
  "title": "Characteristic functions",
  "body": " Characteristic functions    The characteristic function of a random variable is the function given by .  When is discrete with values in , this is . When is continuous with density function , this is , the Fourier Transform of .    The characteristic function looks like just a mild modification of the mgf, but adding the to the exponent makes a big difference: recall that for a real number , .   Wait, how do we even make sense of ? The quantity is not (typically) a real number! We're considering complex-valued random variables now. A function is a complex-valued random variable if both and are random variables, so that .  In the definition, we are considering ; both and are random variables by standard closure properties of random variables. (This is really just jointly distributed random variables repackaged in a complex-numbers format.) Then the expectation of is defined to be .     Suppose that is a random variable with characteristic function .    , and for all .     is uniformly continuous on .        . We'll prove the second part of (a) for continuous ; the discrete case is similar.   Part (b) requires some analysis. Fix and . We must show that as in a way that is independent of . (To justify the last line, argue that the integrand is bounded by and and apply the Dominated Convergence Theorem.)      Find the characteristic functions of these random variables.   constant r.v. .       with .               The discrete examples (all but the last one) can be computed using the identity and our work on pgfs:    , which traverses the unit circle at speed , either CW or CCW depending on the sign of .    : , which traverses the circle of radius centered at .   with . .   : by a fact that we're about to prove or by our work on pgfs.   : .   :        The characteristic function of a normal rv  Suppose that , so that the density of is given by . First, we just apply the definition: Now we do something non-obvious: for a real number we have the following. We have shown that the functions of a complex variable agree for all . Both of these functions are analytic, so they must agree for all , in particular for all , . Thus,   The fact that the density function of a random variable is an eigenfunction of the Fourier Transform is in some sense why the Central Limit Theorem is true.   Show that the characteristic function of is given by .   Properties of characteristic functions   what needs to go here?      If the random variables have distribution functions , then we say that the sequence  converges in distribution to and write if, for all such that , we have .        Recall that iff is continuous at . All but countably many points are continuity points of , and for all in a cocountable set implies .    This is the weakest of several notions of convergence of random variables. Notice that convergence in distribution refers only to the distribution functions, not on the actual values of the random variable. That is, if we replace e.g. with an identically distributed (that are still independent), then that doesn't change whether converges in distribution to .       Central Limit Theorem   Let be a sequence of i.i.d. random variables with common mean and variance . Define and notice that and . Let be the normalized sum, so that and .  Then .     The point of all this business is just to arrange for the distributions to converge; the s have means that go to . In specific examples (see below) we will usually instaed approximate by .    Roll a die 100 times. (We will assume that 100 is large enough for the CLT to provide a reasonable approximation.) Using the CLT we make the approximation We can use this to approximate probabilities:    "
},
{
  "id": "def-char-fn",
  "level": "2",
  "url": "sec-characteristic-fns.html#def-char-fn",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  The characteristic function of a random variable is the function given by .  When is discrete with values in , this is . When is continuous with density function , this is , the Fourier Transform of .   "
},
{
  "id": "sec-characteristic-fns-4",
  "level": "2",
  "url": "sec-characteristic-fns.html#sec-characteristic-fns-4",
  "type": "Remark",
  "number": "4.2.2",
  "title": "",
  "body": " Wait, how do we even make sense of ? The quantity is not (typically) a real number! We're considering complex-valued random variables now. A function is a complex-valued random variable if both and are random variables, so that .  In the definition, we are considering ; both and are random variables by standard closure properties of random variables. (This is really just jointly distributed random variables repackaged in a complex-numbers format.) Then the expectation of is defined to be .  "
},
{
  "id": "lem-char-fn-basic",
  "level": "2",
  "url": "sec-characteristic-fns.html#lem-char-fn-basic",
  "type": "Lemma",
  "number": "4.2.3",
  "title": "",
  "body": "  Suppose that is a random variable with characteristic function .    , and for all .     is uniformly continuous on .        . We'll prove the second part of (a) for continuous ; the discrete case is similar.   Part (b) requires some analysis. Fix and . We must show that as in a way that is independent of . (To justify the last line, argue that the integrand is bounded by and and apply the Dominated Convergence Theorem.)   "
},
{
  "id": "sec-characteristic-fns-6",
  "level": "2",
  "url": "sec-characteristic-fns.html#sec-characteristic-fns-6",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Find the characteristic functions of these random variables.   constant r.v. .       with .               The discrete examples (all but the last one) can be computed using the identity and our work on pgfs:    , which traverses the unit circle at speed , either CW or CCW depending on the sign of .    : , which traverses the circle of radius centered at .   with . .   : by a fact that we're about to prove or by our work on pgfs.   : .   :      "
},
{
  "id": "sec-characteristic-fns-7",
  "level": "2",
  "url": "sec-characteristic-fns.html#sec-characteristic-fns-7",
  "type": "Example",
  "number": "4.2.5",
  "title": "The characteristic function of a normal rv.",
  "body": " The characteristic function of a normal rv  Suppose that , so that the density of is given by . First, we just apply the definition: Now we do something non-obvious: for a real number we have the following. We have shown that the functions of a complex variable agree for all . Both of these functions are analytic, so they must agree for all , in particular for all , . Thus,   The fact that the density function of a random variable is an eigenfunction of the Fourier Transform is in some sense why the Central Limit Theorem is true.  "
},
{
  "id": "sec-characteristic-fns-8",
  "level": "2",
  "url": "sec-characteristic-fns.html#sec-characteristic-fns-8",
  "type": "Checkpoint",
  "number": "4.2.6",
  "title": "",
  "body": "Show that the characteristic function of is given by . "
},
{
  "id": "lem-char-fn-props",
  "level": "2",
  "url": "sec-characteristic-fns.html#lem-char-fn-props",
  "type": "Lemma",
  "number": "4.2.7",
  "title": "Properties of characteristic functions.",
  "body": " Properties of characteristic functions   what needs to go here?   "
},
{
  "id": "def-conv-distr",
  "level": "2",
  "url": "sec-characteristic-fns.html#def-conv-distr",
  "type": "Definition",
  "number": "4.2.8",
  "title": "",
  "body": "  If the random variables have distribution functions , then we say that the sequence  converges in distribution to and write if, for all such that , we have .   "
},
{
  "id": "sec-characteristic-fns-11",
  "level": "2",
  "url": "sec-characteristic-fns.html#sec-characteristic-fns-11",
  "type": "Remark",
  "number": "4.2.9",
  "title": "",
  "body": "    Recall that iff is continuous at . All but countably many points are continuity points of , and for all in a cocountable set implies .    This is the weakest of several notions of convergence of random variables. Notice that convergence in distribution refers only to the distribution functions, not on the actual values of the random variable. That is, if we replace e.g. with an identically distributed (that are still independent), then that doesn't change whether converges in distribution to .     "
},
{
  "id": "thm-clt",
  "level": "2",
  "url": "sec-characteristic-fns.html#thm-clt",
  "type": "Theorem",
  "number": "4.2.10",
  "title": "Central Limit Theorem.",
  "body": " Central Limit Theorem   Let be a sequence of i.i.d. random variables with common mean and variance . Define and notice that and . Let be the normalized sum, so that and .  Then .   "
},
{
  "id": "sec-characteristic-fns-13",
  "level": "2",
  "url": "sec-characteristic-fns.html#sec-characteristic-fns-13",
  "type": "Remark",
  "number": "4.2.11",
  "title": "",
  "body": " The point of all this business is just to arrange for the distributions to converge; the s have means that go to . In specific examples (see below) we will usually instaed approximate by .  "
},
{
  "id": "sec-characteristic-fns-14",
  "level": "2",
  "url": "sec-characteristic-fns.html#sec-characteristic-fns-14",
  "type": "Example",
  "number": "4.2.12",
  "title": "",
  "body": " Roll a die 100 times. (We will assume that 100 is large enough for the CLT to provide a reasonable approximation.) Using the CLT we make the approximation We can use this to approximate probabilities:   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
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
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
