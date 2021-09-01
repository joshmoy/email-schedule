const texts = [
  "WHEN DIET IS WRONG, MEDICINE IS OF NO USE. WHEN DIET IS CORRECT, MEDICINE IS OF NO NEED.",
  "IF YOU KEEP GOOD FOOD IN YOUR FRIDGE, THIS IS A GOOD TME TO EAT IT.",
  "SORRY, THERE’S NO MAGIC BULLET. YOU GOTTA EAT HEALTHY AND LIVE HEALTHY TO BE HEALTHY AND LOOK HEALTHY. END OF STORY.",
  "LET FOOD BE THY MEDICINE, THY MEDICINE SHALL BE THY FOOD.",
  "TO KEEP THE BODY IN GOOD HEALTH IS A DUTY, OTHERWISE WE SHALL NOT BE ABLE TO KEEP OUR MIND STRONG AND CLEAR.",
  "THE FIRST WEALTH IS HEALTH.",
  "EAT BREAKFAST LIKE A QUEEN, LUNCH LIKE A PRINCESS AND DINNER LIKE THE BEAUTY YOU ARE",
  "SUCCESS IS THE SUM OF SMALL EFFORTS, REPEATED DAY IN AND DAY OUT.",
  "TAKE CARE OF YOUR BODY. IT’S THE ONLY PLACE YOU HAVE TO LIVE.",
  "EATING HEALTHY FOOD FILLS YOUR BODY WITH ENERGY AND NUTRIENTS. IMAGINE YOUR CELLS SMILING BACK AT YOU AND SAYING: ‘THANK YOU!’",
  "HEALTH IS LIKE MONEY. WE NEVER HAVE A TRUE IDEA OF ITS VALUE UNTIL WE LOSE IT.",
  "There are only 2 foods you shouldn’t eat – a food that’s rotten or a food that’s stolen",
  "Enjoy your food with health in mind.",
  "Mindful eating is about trusting your body, not a calculator.",
  "Hunger is 365 days a year and doesn’t take a summer vacation",
];

const getText = () => {
  const length = texts.length;
  const index = Math.floor(Math.random() * length);
  const text = `${texts[index]} \n\nIt's time to eat. \n\nYours lovely.`;
  return text;
};

module.exports = { getText };
