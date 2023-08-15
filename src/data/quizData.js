// sample data
export const quizzes = {
  javascript: {
    fundamentals_1: {
      details: {
        title: 'JavaScript Fundamentals 1',
        total: 10,
        difficulty: 'beginner',
        topics: 'booleans, variables, expressions, and more',
        link: 'js-fundamentals-1',
        type: 'javascript',
      },
      questions: {
        1: {
          id: 'js-fundamentals-1-1',
          answer: 'boolean',
          question: 'any sort of logic that results in either true or false',
        },
        2: {
          id: 'js-fundamentals-1-2',
          answer: 'variable',
          question: 'a named reference to a value; const, let, and var',
        },
        3: {
          id: 'js-fundamentals-1-3',
          answer: 'value',
          question: 'any piece of data that can be held with a variable',
        },
        4: {
          id: 'js-fundamentals-1-4',
          answer: 'string',
          question:
            "data that's represented with text and always wrapped in single or double quotation marks, or backticks (``)",
        },
        5: {
          id: 'js-fundamentals-1-5',
          answer: 'falsy value',
          question:
            "any value that isn't exactly false, but will return as false when converted into a boolean",
        },
        6: {
          id: 'js-fundamentals-1-6',
          answer: 'truthy value',
          question: 'any value that returns true when converted to a boolean',
        },
        7: {
          id: 'js-fundamentals-1-7',
          answer: 'expression',
          question: 'a piece of code that produces some type of value',
        },
        8: {
          id: 'js-fundamentals-1-8',
          answer: 'statement',
          question:
            'multiple expressions, or a line or block of code, that carries out some sort of action',
        },
        9: {
          id: 'js-fundamentals-1-9',
          answer: 'operators',
          question:
            'symbols or phrases that are used to change, combine, or check values',
        },
        10: {
          id: 'js-fundamentals-1-10',
          answer: 'type conversion/type coercion',
          question:
            'any time a data type is changed from one type to a different type',
        },
      },
    },
    fundamentals_2: {
      details: {
        title: 'JavaScript Fundamentals 2',
        total: 10,
        difficulty: 'beginner',
        topics: 'functions, loops, DOM, and more',
        link: 'js-fundamentals-2',
        type: 'javascript',
      },
      questions: {
        1: {
          id: 'js-fundamentals-2-1',
          answer: 'function',
          question: 'a block of code that performs a task or set of tasks',
        },
        2: {
          id: 'js-fundamentals-2-2',
          answer: 'array',
          question:
            'an ordered list of values that can include multiple data types',
        },
        3: {
          id: 'js-fundamentals-2-3',
          answer: 'object',
          question: 'an unordered list of key/value pairs',
        },
        4: {
          id: 'js-fundamentals-2-4',
          answer: 'primitive type',
          question:
            "a fixed value that's added to a call stack after it's declared",
        },
        5: {
          id: 'js-fundamentals-2-5',
          answer: 'reference type',
          question:
            'dynamic values or sets of values that do not have a fixed size; within a call stack, they are assigned an "address" that points to their actual value within the memory heap',
        },
        6: {
          id: 'js-fundamentals-2-6',
          answer: 'event listeners',
          question:
            'higher-order functions used to wait for certain events or user-interactions to occur on the DOM',
        },
        7: {
          id: 'js-fundamentals-2-7',
          answer: 'for loop',
          question:
            'a conditional, iterative statement that repeats until a condition is satisfied',
        },
        8: {
          id: 'js-fundamentals-2-8',
          answer: 'Document Object Model (DOM)',
          question:
            'a web API that connects our scripts to a document and its element/nodes',
        },
        9: {
          id: 'js-fundamentals-2-9',
          answer: 'higher-order function',
          question:
            'any function that returns a function, or takes one or more functions as an argument',
        },
        10: {
          id: 'js-fundamentals-2-10',
          answer: 'first-class function',
          question:
            'a function that can be given a variable, and is treated like any other variable',
        },
      },
    },
  },
  react: {
    reactBasics: {
      details: {
        title: 'React Basics',
        total: 10,
        difficulty: 'intermediate',
        topics: 'useState, useEffect, JSX, and more',
        link: 'react-basics',
        type: 'react',
      },
      questions: {
        1: {
          id: 'react-basics-1',
          answer: 'JSX',
          question:
            'JavaScript with an added syntax that allows you to write HTML code directly into your scripts; short for JavaScript XML',
        },
      },
    },
    advancedReact: {
      details: {
        title: 'Advanced React',
        total: 10,
        difficulty: 'challenging',
        topics: 'Context API, useRef, and more',
        link: 'basic-react',
        type: 'react',
      },
      questions: {
        1: {
          id: 'advanced-react-1',
          answer: 'answer',
          questions: 'question',
        },
      },
    },
  },
};
