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
  "body": " Random variables: definition and examples  Informally, a random variable is a random number whose value is associated with the various outcome of an experiment.   Toss a fair coin three coins, so that the sample space includes outcomes like HHH, TTH, etc. One example of a random variable associated to this experiment is simply the number of heads.  Here's a more sophisticated random variable. Suppose that we start with $1, double our money if we see heads and lose it all if we see tails. Then could be our winnings after this experiment. (Notice that if we see HHH and otherwise.)    Suppose that my neighbor and I each leave home independently between 8 and 9am, each time equally likely, so .  One random variable is the time I leave: . Another is the time between our departures: .   Now we are ready for the formal definition. Suppose that is a probability space.    A random variable is a function satisfying the following technical assumption. For every       We'll abbreviate e.g. by .     Let be a random variable. For all the following are events (i.e., in ).         and      , , etc.           and is closed under taking complements.     , since is order-dense in . Since is countable and each belongs to , we can conclude that this countable union belongs to too.    Exercise.        The set is an event for any Borel set  . The Borel sets are the smallest -field containing all open sets.     If and are random variables on and , then the following are all also random variables.                   We need to show that for every , but since is a random variable.  The rest are similar.         Associated to a random variable is a cumulative distribution function (cdf) defined by .     The definition of random variable ensures that , so is defined.     Let be the number of heads in three flips of a fair coin. Describe its cdf.            My neighbor and I leave our houses again. Let be the time I leave my house; this can be thought of as the projection . Describe the cdf of .            A cdf for a rv enjoys the following properties.    and      is increasing: if then .     is right-continuous :                     (that is, is the jump that makes at )       "
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
