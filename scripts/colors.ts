export const colors = {
  black: '#111',
  white: '#fff',
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
}

export const DiscordTheme = {
  primary: '#5197ed', //✅

  foreground: '#b5b4b4',//✅
  activeForeground: '#bfbaaa',//✅
  secondaryForeground: '#6D6D73',//✅

  ignored: '#dedcd550',
  faded: '#dedcd510',
  border: '#222225',//✅

  background: '#1a1a1e',//✅
  secondaryBackground: '#121214', //✅
  activeBackground: '#242428', //✅
  selectionBackground: '#eeeeee18',
  selectionBackgroundActive: '#eeeeee18',
  selectionBackgroundInActive: '#eeeeee18',

  comment: '#758575dd',
  string: '#c98a7d',
  variable: '#bd976a',
  keyword: '#4d9375',
  number: '#4C9A91',
  boolean: '#4d9375',
  operator: '#cb7676',
  function: '#80a665',
  constant: '#c99076',
  class: '#6872ab',
  interface: '#5d99a9',
  type: '#5DA994',
  builtin: '#cb7676',
  property: '#b8a965',
  namespace: '#db889a',
  punctuation: '#666666',
  decorator: '#bd8f8f',
  regex: '#c4704f',

  // colors
  green: '#4d9375',
  cyan: '#5eaab5',
  blue: '#6394bf',
  red: '#cb7676',
  orange: '#d4976c',
  yellow: '#e6cc77',
  magenta: '#d9739f',
} satisfies Record<string, [string, string] | string>
