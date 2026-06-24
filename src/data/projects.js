export const projects = [
  {
    id: 'transitpulse',
    title: 'TransitPulse',
    emoji: 'TP',
    tagline: 'Klang Valley Public Transport Analytics',
    tags: ['Python', 'FastAPI', 'React', 'IsolationForest', 'GTFS Data', 'PostgreSQL'],
    category: 'Data Analytics - Anomaly Detection',
    summary:
      'A full-stack analytics platform that ingests real GTFS data from api.data.gov.my to detect route anomalies, visualize transit patterns, and surface operational insights for the Klang Valley public transport network.',
    problem:
      'Public transit data in Malaysia is available but rarely analyzed in a meaningful way. Without anomaly detection or pattern analysis, service disruptions and underperforming routes can go unnoticed.',
    dataset:
      'Real GTFS feed from api.data.gov.my, including stops, routes, trips, stop times, and calendar data. Over 800,000 records processed.',
    tools: ['pandas', 'numpy', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'React', 'Recharts'],
    methodology: [
      'Ingested and parsed GTFS feed data from the Malaysian open data portal',
      'Cleaned and normalized multi-table transit data',
      'Applied IsolationForest to flag anomalous routes',
      'Built RandomForest classifier for route performance categories',
      'Used K-Means to cluster stops by usage patterns and density',
      'Developed FastAPI backend with async PostgreSQL queries',
      'Built React dashboard with interactive maps and anomaly alerts',
    ],
    insights: [
      'Identified 23 routes with statistically anomalous departure patterns',
      'Clustered stops into 5 usage groups, revealing underserved suburban areas',
      'Peak anomaly hours concentrated around rush hours',
      'Route classification model achieved 94.3% accuracy',
    ],
    outcome:
      'A functional analytics dashboard with real Malaysian data, demonstrating data engineering, ML pipelines, and interactive visualization.',
    skills: ['Data ingestion', 'Anomaly detection', 'Classification', 'Clustering', 'Visualization'],
    learned:
      'Working with messy real-world data taught me that cleaning and validation shape the quality of every model downstream.',
    github: 'https://github.com/graysonchia/TransitPulse',
    demo: '',
  },
  {
    id: 'pricewatch',
    title: 'PriceWatch MY',
    emoji: 'PW',
    tagline: 'Malaysian E-Commerce Price Intelligence Platform',
    tags: ['Python', 'FastAPI', 'React', 'GradientBoosting', 'IsolationForest', 'APScheduler'],
    category: 'Data Analytics - Price Forecasting',
    summary:
      'A price tracking platform for Malaysian e-commerce that monitors product prices, detects anomalous price changes, segments products, and forecasts future prices.',
    problem:
      'Malaysian shoppers and small retailers need a systematic way to track price trends, detect suspicious spikes, and forecast upcoming price movements.',
    dataset:
      'Scraped and synthetic e-commerce price data with 12,500+ records across product categories and time periods.',
    tools: ['pandas', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'APScheduler', 'React', 'Recharts'],
    methodology: [
      'Built APScheduler pipeline to collect and store product prices',
      'Applied IsolationForest to detect price spikes',
      'Used K-Means to segment products into pricing tiers',
      'Trained GradientBoostingRegressor for 7-day price forecasts',
      'Developed an ML insights dashboard with anomaly timelines and forecast charts',
    ],
    insights: [
      '156 anomalous price events detected around festive and sale periods',
      'K-Means identified 4 pricing segments with different volatility profiles',
      'Forecasting model achieved 4.2% RMSE on a 30-day holdout set',
      'Electronics showed the highest price volatility',
    ],
    outcome:
      'An end-to-end price intelligence system with scheduled data collection, ML detection, and forecast-powered insights.',
    skills: ['Forecasting', 'Anomaly detection', 'Clustering', 'Scheduled pipelines', 'Business insights'],
    learned:
      'This project sharpened my ability to translate technical model output into business questions users actually care about.',
    github: 'https://github.com/graysonchia/PriceWatch-MY',
    demo: '',
  },
  {
    id: 'habitflow',
    title: 'HabitFlow',
    emoji: 'HF',
    tagline: 'Habit & Mood Analytics Platform',
    tags: ['Python', 'FastAPI', 'Expo React Native', 'K-Means', 'Logistic Regression'],
    category: 'Behavioural Analytics - ML Classification',
    summary:
      'A mobile-first habit and mood tracker with an analytics engine that clusters users by behaviour and predicts habit dropout risk.',
    problem:
      'Most habit tracking apps show what users did, but not why they are likely to quit. HabitFlow turns raw logs into behavioural insight.',
    dataset:
      'Synthetic habit logs and mood entries for 500 simulated users over a 90-day horizon.',
    tools: ['pandas', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'Expo React Native', 'Recharts'],
    methodology: [
      'Designed schema for habits, mood logs, and streaks',
      'Extracted behavioural features such as streak length and completion rate',
      'Applied K-Means to cluster users by engagement style',
      'Trained Logistic Regression to predict 30-day dropout risk',
      'Built analytics endpoints and a mobile insights screen',
    ],
    insights: [
      '4 user clusters identified: Consistent Achievers, Weekend Warriors, Mood-Driven Users, and At-Risk Disengaged',
      'At-Risk cluster represented 18.4% of users',
      'Morning habit completions correlated with higher mood scores',
      'Logistic Regression achieved 83% accuracy',
    ],
    outcome:
      'A full-stack mobile analytics platform demonstrating segmentation, churn prediction, and personalized insight delivery.',
    skills: ['Behavioural analytics', 'Clustering', 'Classification', 'Mobile development', 'Feature engineering'],
    learned:
      'The most useful ML output is the one a user can understand and act on without needing to inspect a model.',
    github: 'https://github.com/graysonchia/HabitFlow',
    demo: '',
  },
  {
    id: 'fitlog',
    title: 'FitLog Pro',
    emoji: 'FL',
    tagline: 'Fitness Tracking with ML-Powered Insights',
    tags: ['Python', 'FastAPI', 'React', 'RandomForest', 'K-Means', 'Linear Regression'],
    category: 'Health Analytics - Predictive Modelling',
    summary:
      'A 12-table fitness tracking platform with a web dashboard and ML layer for churn prediction, fitness clustering, and performance forecasting.',
    problem:
      'Fitness apps generate large volumes of data but rarely help users understand progress or identify disengagement risk.',
    dataset:
      'Synthetic fitness data across 12 relational tables, including workouts, sets, reps, body metrics, goals, streaks, and profiles.',
    tools: ['pandas', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'React', 'Expo React Native', 'Recharts'],
    methodology: [
      'Designed and seeded a 12-table PostgreSQL schema',
      'Trained RandomForest classifier to predict 30-day churn',
      'Applied K-Means to segment users into fitness archetypes',
      'Built Linear Regression forecasting for PR trajectories',
      'Created React insights page with risk scores and forecast charts',
    ],
    insights: [
      'Churn model achieved 87% accuracy',
      '4 fitness archetypes identified across simulated users',
      'Consistent users tended to plateau around week 12',
      'Weekend-only users had higher churn probability',
    ],
    outcome:
      'A production-style fitness analytics platform from relational data modelling through ML integration and dashboard delivery.',
    skills: ['Churn prediction', 'Segmentation', 'Forecasting', 'Full-stack development', 'Relational modelling'],
    learned:
      'Careful schema design matters before ML begins, because data relationships shape every downstream feature.',
    github: 'https://github.com/graysonchia/FitLog-Pro',
    demo: '',
  },
  {
    id: 'wellanalytics',
    title: 'WellAnalytics',
    emoji: 'WA',
    tagline: 'Oil & Gas Well Performance Prediction',
    tags: ['Python', 'FastAPI', 'React', 'Prophet', 'IsolationForest', 'K-Means'],
    category: 'Industrial Analytics - Time-Series Forecasting',
    summary:
      'A domain-specific analytics platform for monitoring well sensor readings, detecting equipment anomalies, and forecasting production.',
    problem:
      'Unexpected equipment failures and declining well performance are expensive. Predictive analytics moves maintenance from reactive to proactive.',
    dataset:
      'Synthetic sensor readings and production logs for 20 wells over a 12-month simulated horizon.',
    tools: ['pandas', 'scikit-learn', 'Prophet', 'FastAPI', 'PostgreSQL', 'React', 'Recharts'],
    methodology: [
      'Simulated realistic well sensor and production data',
      'Applied IsolationForest to sensor readings',
      'Clustered wells by performance profile',
      'Trained Prophet models per well for production forecasts',
      'Built React dashboard with timelines, anomaly feeds, and forecasts',
    ],
    insights: [
      '47 sensor anomaly events flagged across 20 wells',
      '3 well clusters identified: underperforming, stable, and high-output',
      'High-output wells showed seasonal Q3 production dips',
      'Prophet forecasts achieved 6.8% MAPE',
    ],
    outcome:
      'A domain-adapted analytics product showing that data and ML skills transfer across industries.',
    skills: ['Time-series forecasting', 'Anomaly detection', 'Industrial analytics', 'Prophet modelling'],
    learned:
      'This project taught me to research unfamiliar domains and map business risk to the right analytics methods.',
    github: 'https://github.com/graysonchia/WellAnalytics',
    demo: '',
  },
]
