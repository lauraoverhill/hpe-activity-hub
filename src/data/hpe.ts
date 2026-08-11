export type HpeActivity = {
  phase: number
  lesson: string
  type: string
  title: string
  description: string
  file: string
  printable?: string
}

export const phases = [
  ['Know your drugs', 'Lessons 1–2'], ['Why people use', 'Lessons 3–4'], ['Saying no & staying safe', 'Lessons 5–6'], ['Assessment A · Party Safety Plan', 'Lesson 7'], ['Dependence & harm minimisation', 'Lessons 8–9'], ['Finding & using evidence', 'Lessons 10–14'], ['Assessment B · Responding to a Friend', 'Lesson 15'],
]

export const activities: HpeActivity[] = [
  { phase: 1, lesson: 'Lesson 1', type: 'Sort · print', title: 'Drug Category Sort', description: 'Sort drug names and their short- and long-term effects into stimulant, depressant, hallucinogen, opioid, or ‘common to all drugs’.', file: 'Drug_Category_Sort.html', printable: 'Drug_Category_Sort_Printable.html' },
  { phase: 1, lesson: 'Lesson 2', type: 'Sort · print', title: 'Legal, Illegal or Illicit?', description: 'Decide how the law treats 15 everyday scenarios — including the tricky ‘illicit’ misuse of otherwise-legal drugs.', file: 'Legal_Illegal_Illicit_Sort.html', printable: 'Legal_Illegal_Illicit_Sort_Printable.html' },
  { phase: 1, lesson: 'Lesson 2', type: 'Game', title: 'Mix & match: key words', description: 'Match eight key words to their meanings — the four drug classes plus legal, illegal and illicit.', file: 'Mix_and_Match_Key_Words.html', printable: 'Mix_and_Match_Key_Words_Printable.html' },
  { phase: 2, lesson: 'Lesson 3', type: 'Sorter', title: 'Direct or indirect?', description: 'Decide whether each peer-pressure example is direct or indirect, with instant feedback.', file: 'Direct_or_Indirect.html', printable: 'Direct_or_Indirect_Printable.html' },
  { phase: 2, lesson: 'Lesson 3', type: 'Sorter', title: 'What kind of influence?', description: 'Sort real examples into social, emotional and environmental influences.', file: 'What_Kind_of_Influence.html', printable: 'What_Kind_of_Influence_Printable.html' },
  { phase: 2, lesson: 'Lesson 4', type: 'Scenario', title: 'Spot the influences', description: 'Read three scenarios and tick the social, emotional and environmental influences you can spot. Has a read-aloud option.', file: 'Spot_the_Influences.html', printable: 'Spot_the_Influences_Printable.html' },
  { phase: 3, lesson: 'Lesson 5', type: 'Story game', title: 'Party Night: Choose Your Path', description: 'A branching story where your refusal choices lead to six different endings — from home safe to a rough night. Practise saying no.', file: 'Party_Choose_Your_Path.html' },
  { phase: 3, lesson: 'Lesson 6', type: 'Sorter', title: 'Spot the risks', description: 'Sort risks from a party scenario into physical, social, emotional and legal.', file: 'Spot_the_Risks.html', printable: 'Spot_the_Risks_Printable.html' },
  { phase: 5, lesson: 'Lesson 8', type: 'Sort · print', title: 'Common to all drugs (revisit)', description: 'Return to the Drug Category Sort, focusing on dependence, tolerance and withdrawal — the effects shared by all drugs.', file: 'Drug_Category_Sort.html', printable: 'Drug_Category_Sort_Printable.html' },
  { phase: 5, lesson: 'Lesson 9', type: 'Sorter', title: 'The three pillars', description: 'Sort real examples into harm, demand and supply reduction.', file: 'Three_Pillars.html', printable: 'Three_Pillars_Printable.html' },
  { phase: 6, lesson: 'Lesson 10', type: 'Sorter', title: 'Trusted or not?', description: 'Sort health sources into credible and unreliable, with a reason for each.', file: 'Trusted_or_Not.html', printable: 'Trusted_or_Not_Printable.html' },
  { phase: 6, lesson: 'Lesson 11', type: 'Data', title: 'Read the graph', description: 'Read a graph of opioid-harm trends (practice data based on AIHW) and answer questions.', file: 'Read_the_Graph.html', printable: 'Read_the_Graph_Printable.html' },
  { phase: 6, lesson: 'Lesson 12', type: 'Check', title: 'Safe medicine check', description: 'Decide whether each action with a prescription medicine is safe or risky.', file: 'Safe_Medicine_Check.html', printable: 'Safe_Medicine_Check_Printable.html' },
  { phase: 6, lesson: 'Lesson 13', type: 'Research', title: 'Fact finder', description: 'Pick the best way to put a reliable health fact into your own words — without copying or changing the meaning.', file: 'Fact_Finder.html', printable: 'Fact_Finder_Printable.html' },
  { phase: 6, lesson: 'Lesson 14', type: 'Builder', title: 'Respond to a friend', description: 'Build a caring, accurate reply to a friend worried about codeine, using sentence starters.', file: 'Respond_to_a_Friend.html', printable: 'Respond_to_a_Friend_Printable.html' },
]
