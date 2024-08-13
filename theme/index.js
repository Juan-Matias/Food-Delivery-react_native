const palette = {
    // Orange
    orange: {
      text: '#f97316',
      bgColor: opacity => `rgba(251, 146, 60, ${opacity})`,
    },
    // Dark Gray
    darkGray: {
      text: '#334155',
      bgColor: opacity => `rgba(30, 41, 59, ${opacity})`,
    },
    // Purple
    purple: {
      text: '#7c3aed',
      bgColor: opacity => `rgba(167, 139, 250, ${opacity})`,
    },
    // Green
    green: {
      text: '#009950',
      bgColor: opacity => `rgba(0, 179, 89, ${opacity})`,
    },
    // Teal
    teal: {
      text: '#14b8a6',
      bgColor: opacity => `rgba(45, 212, 191, ${opacity})`,
    },
    // Red
    red: {
      text: '#dc2626',
      bgColor: opacity => `rgba(248, 113, 113, ${opacity})`,
    }
  };
  
  // Export a specific color from the palette
  export const themeColors = {
    ...palette.green, // Change 'orange' to the desired color key
  };
  