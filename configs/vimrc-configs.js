module.exports = {
  set: {
    title: {
      command: 'title',
      description: 'Updates the title of your window or terminal.',
      base: true
    },
    number: {
      command: 'number',
      description: 'Display line numbers.',
      base: true
    },
    ruler: {
      command: 'ruler',
      description: 'Display cursor position.',
      base: true
    },
    wrap: {
      command: 'wrap',
      description: 'Wrap lines that are too long.',
      base: true
    },
    scrolloff: {
      command: 'scrolloff',
      default_value: '3'
      description: 'Display at least n lines around your cursor.',
      base: true
    },
    guioptions: {
      command: 'guioptions',
      default_value: 'T'
      description: 'Configure gui version of vim.',
      base: true
    },
    ignorecase: {
      command: 'ignorecase',
      description: 'Ignore case when searching.',
      base: true
    },
    smartcase: {
      command: 'smartcase',
      description: 'Search case-sensitive if there is an uppercase in the search term.',
      base: true
    },
    incsearch: {
      command: 'incsearch',
      description: 'Highlight search results when typing.',
      base: true
    },
    hlsearch: {
      command: 'hlsearch',
      description: 'Highlight search results.',
      base: true
    },
    visualbell: {
      command: 'visualbell',
      description: 'Prevent vim from beeping',
      base: true
    },
    noerrorbells: {
      command: 'noerrorbells',
      description: 'Prevent vim from beeping',
      base: true
    },
    backspace: {
      command: 'backspace',
      default_value: 'indent, eol, start',
      description: 'Backspace options.',
      base: true
    },
    hidden: {
      command: 'hidden',
      description: 'Hide buffer instead of abandoning when switching buffers.',
      base: true
    }
  }
};
